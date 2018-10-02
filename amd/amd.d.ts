declare namespace amd {
  interface HelloWorld {
    hello(): void;
  }
}

declare module 'amd/HelloWorld' {
  import _HelloWorld = amd.HelloWorld;
  export = _HelloWorld;
}
