import { AwsCdkConstructLibrary } from "@pepperize/projen-awscdk-construct";
const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  cdkVersion: "2.1.0",
  defaultReleaseBranch: "main",
  devDeps: [
    "@pepperize/projen-awscdk-construct",
    "@types/aws-lambda",
    "@types/express",
    "@types/swagger-ui-express",
    "@vendia/serverless-express",
    "aws-lambda",
    "aws-sdk",
    "express",
    "swagger-ui-express",
  ],
  name: "cdk-apigateway-swagger-ui",
  projenrcTs: true,
  repositoryUrl: "https://github.com/patrick.florek/cdk-apigateway-swagger-ui.git",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */

  tsconfig: {
    compilerOptions: {
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
    },
  },
  tsconfigDev: {
    compilerOptions: {
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
    },
  },
});

project.tasks
  .tryFind("bundle")
  ?.exec(
    "npx copyfiles --flat node_modules/swagger-ui-dist/swagger* node_modules/swagger-ui-dist/favicon* assets/swagger-ui.lambda"
  );

project.synth();
