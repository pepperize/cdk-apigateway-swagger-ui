import { Stack } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import { RestApi } from "aws-cdk-lib/aws-apigateway";
import { SwaggerUi } from "../src";
import "jest-cdk-snapshot";

describe("SwaggerUi", () => {
  it("Should match snapshot", () => {
    // Given
    const stack = new Stack();
    const api = new RestApi(stack, "Api");

    // When
    new SwaggerUi(stack, "SwaggerUi", { resource: api.root });

    // Then
    expect(stack).toMatchCdkSnapshot({
      ignoreAssets: true,
      ignoreCurrentVersion: true,
      ignoreMetadata: true,
      ignoreTags: true,
    });
  });

  it("Should run lambda functions on nodejs26.x", () => {
    // Given
    const stack = new Stack();
    const api = new RestApi(stack, "Api");

    // When
    new SwaggerUi(stack, "SwaggerUi", { resource: api.root });

    // Then
    const functions = Template.fromStack(stack).findResources("AWS::Lambda::Function", {
      Properties: { Description: Match.stringLikeRegexp("^functions/src/") },
    });
    const runtimes = Object.values(functions).map((fn) => fn.Properties.Runtime);
    expect(runtimes).toEqual(["nodejs26.x", "nodejs26.x"]);
  });
});
