import { Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { RestApi } from "aws-cdk-lib/aws-apigateway";
import { SwaggerUi } from "../src";

describe("SwaggerUi", () => {
  it("Should match snapshot", () => {
    // Given
    const stack = new Stack();
    const api = new RestApi(stack, "Api");
    new SwaggerUi(stack, "SwaggerUi", { resource: api.root });

    // When
    const template = Template.fromStack(stack);

    // Then
    expect(template).toMatchSnapshot();
  });
});
