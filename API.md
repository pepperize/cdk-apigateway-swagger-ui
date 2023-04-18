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

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SwaggerUi <a name="SwaggerUi" id="@pepperize/cdk-apigateway-swagger-ui.SwaggerUi"></a>

#### Initializers <a name="Initializers" id="@pepperize/cdk-apigateway-swagger-ui.SwaggerUi.Initializer"></a>

```typescript
import { SwaggerUi } from '@pepperize/cdk-apigateway-swagger-ui'

new SwaggerUi(scope: Construct, id: string, props: SwaggerUiProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-apigateway-swagger-ui.SwaggerUi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-apigateway-swagger-ui.SwaggerUi.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-apigateway-swagger-ui.SwaggerUi.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-apigateway-swagger-ui.SwaggerUiProps">SwaggerUiProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-apigateway-swagger-ui.SwaggerUi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-apigateway-swagger-ui.SwaggerUi.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-apigateway-swagger-ui.SwaggerUi.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-apigateway-swagger-ui.SwaggerUiProps">SwaggerUiProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-apigateway-swagger-ui.SwaggerUi.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-apigateway-swagger-ui.SwaggerUi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-apigateway-swagger-ui.SwaggerUi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-apigateway-swagger-ui.SwaggerUi.isConstruct"></a>

```typescript
import { SwaggerUi } from '@pepperize/cdk-apigateway-swagger-ui'

SwaggerUi.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-apigateway-swagger-ui.SwaggerUi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-apigateway-swagger-ui.SwaggerUi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-apigateway-swagger-ui.SwaggerUi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### SwaggerUiProps <a name="SwaggerUiProps" id="@pepperize/cdk-apigateway-swagger-ui.SwaggerUiProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-apigateway-swagger-ui.SwaggerUiProps.Initializer"></a>

```typescript
import { SwaggerUiProps } from '@pepperize/cdk-apigateway-swagger-ui'

const swaggerUiProps: SwaggerUiProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-apigateway-swagger-ui.SwaggerUiProps.property.resource">resource</a></code> | <code>aws-cdk-lib.aws_apigateway.IResource</code> | *No description.* |

---

##### `resource`<sup>Required</sup> <a name="resource" id="@pepperize/cdk-apigateway-swagger-ui.SwaggerUiProps.property.resource"></a>

```typescript
public readonly resource: IResource;
```

- *Type:* aws-cdk-lib.aws_apigateway.IResource

---



