// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for SwaggerUiFunction
 */
export interface SwaggerUiFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes functions/src/swagger-ui.
 */
export class SwaggerUiFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: SwaggerUiFunctionProps) {
    super(scope, id, {
      description: 'functions/src/swagger-ui.lambda.ts',
      ...props,
      runtime: new lambda.Runtime('nodejs18.x', lambda.RuntimeFamily.NODEJS),
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../assets/functions/src/swagger-ui.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}
