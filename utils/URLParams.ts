export class URLParams extends URLSearchParams {
  constructor(init?: URLSearchParams | Record<string, string> | string) {
    super(init);
  }

  append(name: string, value: string) {
    super.append(name, value);
    return this;
  }

  delete(name: string) {
    super.delete(name);
    return this;
  }

  set(name: string, value: string) {
    super.set(name, value);
    return this;
  }
}
