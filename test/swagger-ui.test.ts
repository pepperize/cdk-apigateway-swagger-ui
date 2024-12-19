import { Stack } from "aws-cdk-lib";
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
});
