import { AwsCdkConstructLibrary } from "@pepperize/projen-awscdk-construct";
import { awscdk, javascript, typescript } from "projen";
const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  cdkVersion: "2.1.0",
  name: "@pepperize/cdk-apigateway-swagger-ui",
  description: "Add SwaggerUI to your AWS Apigateway RestApi",
  keywords: [
    "aws",
    "cdk",
    "apigateway",
    "restapi",
    "openapi",
    "swagger-ui",
    "express",
    "lambda",
    "serverless",
    "utilities",
  ],
  repositoryUrl: "https://github.com/pepperize/cdk-apigateway-swagger-ui.git",

  projenrcTs: true,

  devDeps: ["@pepperize/projen-awscdk-construct"],

  defaultReleaseBranch: "main",
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  publishToNuget: {
    dotNetNamespace: "Pepperize.CDK",
    packageId: "Pepperize.CDK.ApigatewaySwaggerUi",
  },
  publishToPypi: {
    distName: "pepperize.cdk-apigateway-swagger-ui",
    module: "pepperize_cdk_apigateway_swagger_ui",
  },
  publishToMaven: {
    mavenEndpoint: "https://s01.oss.sonatype.org",
    mavenGroupId: "com.pepperize",
    mavenArtifactId: "cdk-apigateway-swagger-ui",
    javaPackage: "com.pepperize.cdk.apigateway_swagger_ui",
  },

  gitignore: ["/cdk.out/"],
  npmignore: ["/functions/", "!/assets/functions/"],
});

new awscdk.LambdaFunction(project, {
  entrypoint: "functions/src/api-docs.lambda.ts",
  constructFile: "src/api-docs-function.ts",
  constructName: "ApiDocsFunction",
  cdkDeps: project.cdkDeps,
});
new awscdk.LambdaFunction(project, {
  entrypoint: "functions/src/swagger-ui.lambda.ts",
  constructFile: "src/swagger-ui-function.ts",
  constructName: "SwaggerUiFunction",
  cdkDeps: project.cdkDeps,
});

project.tasks
  .tryFind("bundle")
  ?.exec(
    "npx copyfiles --flat functions/node_modules/swagger-ui-dist/swagger* functions/node_modules/swagger-ui-dist/favicon* assets/functions/src/swagger-ui.lambda"
  );

project.setScript("cdk", "cdk");

project.synth();

const functions = new typescript.TypeScriptProject({
  parent: project,
  outdir: "functions",
  name: "@pepperize/cdk-apigateway-swagger-ui-functions",
  defaultReleaseBranch: "main",
  deps: [
    "@types/aws-lambda",
    "@types/express",
    "@types/swagger-ui-express",
    "@vendia/serverless-express",
    "aws-lambda",
    "aws-sdk",
    "express",
    "swagger-ui-express",
  ],
  eslint: true,
  prettier: true,
  prettierOptions: {
    settings: { printWidth: 120 },
  },
});

functions.synth();
