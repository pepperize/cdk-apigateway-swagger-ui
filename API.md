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



