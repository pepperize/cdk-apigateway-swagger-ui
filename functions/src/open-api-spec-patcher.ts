export class OpenApiSpecPatcher {
  options: any;

  constructor(options?: any) {
    this.options = { pathsToRemove: [], patchServerSlashPrefixes: true, ...(options || {}) };
  }

  public patchJson(spec: string): string {
    const obj = JSON.parse(spec);
    this.patch(obj);
    return JSON.stringify(obj);
  }

  public patch(spec: any): any {
    if (true === this.options.patchServerSlashPrefixes) {
      this.patchServerVariableSlashPrefixes(spec);
    }
    this.options.pathsToRemove.forEach((e: string) => {
      this.removeProperty(spec.paths || {}, e);
    });
    return spec;
  }

  public patchServerVariableSlashPrefixes(spec: any): any {
    if (!Array.isArray(spec.servers || null)) return spec;
    spec.servers = spec.servers.map((e: any) => {
      if (!e.variables || !e.url) return e;
      return { ...e, variables: this.patchSrvVars(e.variables, e.url) };
    });
    return spec;
  }

  public removeProperty(spec: any, removeKey: string): any {
    if (spec.hasOwnProperty(removeKey)) delete spec[removeKey];
    return spec;
  }

  private hasPrefixedKey(url: string, v: string): Boolean {
    return null !== url.match(new RegExp(`\\/\\{${v}\\}`, "g"));
  }

  private removePrefix(s: string): string {
    return s.charAt(0) === "/" ? s.substring(1) : s;
  }

  private patchSrvVars(vars: any, url: string): any {
    return Object.entries(vars).reduce((r: any, [k, v]) => {
      r[k] = v as any;
      if (this.hasPrefixedKey(url, k)) {
        if (r[k].default) r[k].default = this.removePrefix(r[k].default);
        if (Array.isArray(r[k].enum)) r[k].enum = r[k].enum.map((i: string) => this.removePrefix(i));
      }
      return r;
    }, {});
  }
}
