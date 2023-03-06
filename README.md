[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
[![GitHub](https://img.shields.io/github/license/pepperize/cdk-apigateway-swagger-ui?style=flat-square)](https://github.com/pepperize/cdk-apigateway-swagger-ui/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/cdk-apigateway-swagger-ui?style=flat-square)](https://www.npmjs.com/package/@pepperize/cdk-apigateway-swagger-ui)
[![PyPI](https://img.shields.io/pypi/v/pepperize.cdk-apigateway-swagger-ui?style=flat-square)](https://pypi.org/project/pepperize.cdk-apigateway-swagger-ui/)
[![Nuget](https://img.shields.io/nuget/v/Pepperize.CDK.ApigatewaySwaggerUi?style=flat-square)](https://www.nuget.org/packages/Pepperize.CDK.ApigatewaySwaggerUi/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.pepperize/cdk-apigateway-swagger-ui?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/pepperize/cdk-apigateway-swagger-ui/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/pepperize/cdk-apigateway-swagger-ui/release.yml?branch=main&label=release&style=flat-square)](https://github.com/pepperize/cdk-apigateway-swagger-ui/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/cdk-apigateway-swagger-ui?sort=semver&style=flat-square)](https://github.com/pepperize/cdk-apigateway-swagger-ui/releases)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/pepperize/cdk-apigateway-swagger-ui)

# CDK Apigateway SwaggerUI

Add SwaggerUI to your AWS Apigateway RestApi

![SwaggerUI Example](./images/swagger-ui-example.png)

## Install

### TypeScript

```shell
npm install @pepperize/cdk-apigateway-swagger-ui
```

or

```shell
yarn add @pepperize/cdk-apigateway-swagger-ui
```

### Python

```shell
pip install pepperize.cdk-apigateway-swagger-ui
```

### C\# / .Net

```
dotnet add package Pepperize.CDK.ApigatewaySwaggerUi
```

### Java

```xml
<dependency>
  <groupId>com.pepperize</groupId>
  <artifactId>cdk-apigateway-swagger-ui</artifactId>
  <version>${cdkApigatewaySwaggerUi.version}</version>
</dependency>
```

## Usage

```typescript
import { Stack } from "aws-cdk-lib";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { SwaggerUi } from "@pepperize/cdk-apigateway-swagger-ui";

const stack = new Stack();
const restApi = new apigateway.RestApi();

new SwaggerUi(stack, "SwaggerUI", { resource: restApi.root });
```

- Open your SwaggerUI: `https://<rest api id>.execute-api.<aws region>.amazonaws.com/<stage>/api-docs/swagger-ui.html`
- View your API docs: `https://<rest api id>.execute-api.<aws region>.amazonaws.com/<stage>/api-docs.json`
