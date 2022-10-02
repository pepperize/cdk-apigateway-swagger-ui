import { App, Stack } from "aws-cdk-lib";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { SwaggerUi } from "./swagger-ui";

// yarn cdk deploy --app 'npx ts-node -P tsconfig.dev.json --prefer-ts-exts ./src/integ.default.ts'

const app = new App();
const stack = new Stack(app, "SwaggerUI");

const restApi = new apigateway.RestApi(stack, "RestApi");
new SwaggerUi(stack, "SwaggerUI", { resource: restApi.root });
