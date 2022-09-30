import { AwsCdkConstructLibrary } from "@pepperize/projen-awscdk-construct";
const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  cdkVersion: "2.1.0",
  defaultReleaseBranch: "main",
  devDeps: ["@pepperize/projen-awscdk-construct"],
  name: "cdk-apigateway-swagger-ui",
  projenrcTs: true,
  repositoryUrl: "https://github.com/patrick.florek/cdk-apigateway-swagger-ui.git",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();