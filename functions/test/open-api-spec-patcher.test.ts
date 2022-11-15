import { OpenApiSpecPatcher } from "../src/open-api-spec-patcher";

const patcher = new OpenApiSpecPatcher();

const doPatch = (spec: any): any => {
  return patcher.patchServerVariableSlashPrefixes(spec);
};

describe("OpenSpec is patched after exporting from apigateway", function () {
  it("Verifies that the patch class is successfully invoked", () => {
    const optionPatcher = new OpenApiSpecPatcher({
      pathsToRemove: ["other", "blah"],
      patchServerSlashPrefixes: false,
    });

    expect(
      optionPatcher.patch({
        servers: [{ url: "https://foobar/{x}", variables: { x: { default: "/x" } } }],
        paths: { other: 42, yetAnother: 42 },
      })
    ).toEqual({
      servers: [{ url: "https://foobar/{x}", variables: { x: { default: "/x" } } }],
      paths: { yetAnother: 42 },
    });

    expect(optionPatcher.patch({ servers: [] })).toEqual({ servers: [] });

    expect(
      optionPatcher.patchJson(
        JSON.stringify({
          servers: [{ url: "https://foobar/{x}", variables: { x: { default: "/x" } } }],
          paths: { other: 42, yetAnother: 42 },
        })
      )
    ).toEqual(
      JSON.stringify({
        servers: [{ url: "https://foobar/{x}", variables: { x: { default: "/x" } } }],
        paths: { yetAnother: 42 },
      })
    );
  });

  it("Verifies that the patcher can handle unexpected input", () => {
    expect(doPatch({ foobar: "42" })).toEqual({ foobar: "42" });
    expect(doPatch({ servers: "42" })).toEqual({ servers: "42" });
    expect(doPatch({ servers: undefined })).toEqual({ servers: undefined });
    expect(doPatch({ servers: {} })).toEqual({ servers: {} });
    expect(doPatch({ servers: [] })).toEqual({ servers: [] });
    expect(doPatch({ servers: [{}] })).toEqual({ servers: [{}] });
    expect(doPatch({ servers: [{ url: "a" }] })).toEqual({ servers: [{ url: "a" }] });
    expect(doPatch({ servers: [{ variables: "a" }] })).toEqual({ servers: [{ variables: "a" }] });
  });

  it("Verifies that the patcher removes properties from path variable", () => {
    const testData = { foo: { a: "b" }, bar: { b: { c: "d", e: "f" } } };

    patcher.removeProperty(testData, "foo");
    expect(testData).toEqual({ bar: { b: { c: "d", e: "f" } } });

    patcher.removeProperty(testData.bar.b, "e");
    expect(testData).toEqual({ bar: { b: { c: "d" } } });

    patcher.removeProperty(testData.bar, "x");
    expect(testData).toEqual({ bar: { b: { c: "d" } } });
  });

  it("Verifies that the patcher removes double slashes from path variable only when suitable", () => {
    const data = {
      foobar: true,
      servers: [
        {
          description: "foo",
          url: "https://foobar{y}/{x}/{z}",
          variables: {
            z: {
              default: "/z",
            },
            y: {
              default: "/y",
              enum: ["/x", "/y"],
            },
            x: {
              default: "/x",
              description: "foo",
              enum: ["/x", "/y", "z"],
            },
          },
        },
      ],
    };

    patcher.patch(data);

    expect(data).toEqual({
      foobar: true,
      servers: [
        {
          description: "foo",
          url: "https://foobar{y}/{x}/{z}",
          variables: {
            z: {
              default: "z",
            },
            y: {
              default: "/y",
              enum: ["/x", "/y"],
            },
            x: {
              default: "x",
              description: "foo",
              enum: ["x", "y", "z"],
            },
          },
        },
      ],
    });
  });
});
