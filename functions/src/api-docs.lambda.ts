import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda/trigger/api-gateway-proxy";
import { APIGateway, AWSError } from "aws-sdk";
import { OpenApiSpecPatcher } from "./open-api-spec-patcher";

let apiGateway: APIGateway;

const patcher = new OpenApiSpecPatcher({ pathsToRemove: ["/api-docs.json", "/api-docs/{proxy+}"] });

export async function handler(request: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  apiGateway = new APIGateway();

  try {
    const spec = await apiGateway
      .getExport({
        restApiId: request.requestContext.apiId,
        stageName: request.requestContext.stage,
        exportType: "oas30",
        parameters: {},
        accepts: "application/json",
      })
      .promise();

    const patchedSpec = patcher.patchJson(spec.body!.toString());

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Content-Disposition": "inline" },
      body: patchedSpec,
      isBase64Encoded: false,
    };
  } catch (e) {
    const error = e as AWSError;
    console.log(error);

    return {
      statusCode: 500,
      headers: { "Content-Type": "application/problem+json" },
      body: JSON.stringify({
        type: "about:blank",
        title: error.code,
        status: 500,
        description: error.message,
      }),
      isBase64Encoded: false,
    };
  }
}
