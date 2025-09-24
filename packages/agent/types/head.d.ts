interface Head {
}

declare global {
  interface Window {
    head: Head;

    BigInt: any;
  }
}

export {}
