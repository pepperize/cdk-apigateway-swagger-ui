import { ArnFormat, Stack } from "aws-cdk-lib";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as iam from "aws-cdk-lib/aws-iam";
import * as logs from "aws-cdk-lib/aws-logs";
import { Construct } from "constructs";
import { ApiDocsFunction } from "./api-docs-function";
import { SwaggerUiFunction } from "./swagger-ui-function";

export interface SwaggerUiProps {
  readonly resource: apigateway.IResource;
}

export class SwaggerUi extends Construct {
  public constructor(scope: Construct, id: string, props: SwaggerUiProps) {
    super(scope, id);

    const { resource } = props;
    const api = resource.api;

    const apiDocs = resource.addResource("api-docs.json");
    const apiDocsFunction = new ApiDocsFunction(this, "ApiDocsFunction", {
      initialPolicy: [
        new iam.PolicyStatement({
          actions: ["apigateway:GET"],
          resources: [
            Stack.of(this).formatArn({
              // https://docs.aws.amazon.com/apigateway/latest/developerguide/arn-format-reference.html
              service: "apigateway",
              account: "",
              resource: `/restapis/${api.restApiId}/*`,
              arnFormat: ArnFormat.COLON_RESOURCE_NAME,
            }),
          ],
        }),
      ],
      logRetention: logs.RetentionDays.ONE_WEEK,
    });
    apiDocs.addMethod("GET", new apigateway.LambdaIntegration(apiDocsFunction, {}), {});

    const swaggerUi = resource.addResource("api-docs").addResource("{proxy+}");
    const swaggerUiFunction = new SwaggerUiFunction(this, "SwaggerUiFunction", {
      logRetention: logs.RetentionDays.ONE_WEEK,
    });

    swaggerUi.addMethod("GET", new apigateway.LambdaIntegration(swaggerUiFunction, { proxy: true }), {});
  }
}
