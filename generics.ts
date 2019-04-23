// So

function echo(a: any): any {
  return a;
}

function genericEcho<varType>(a: varType): varType {
  return a;
}

function normalGeneric<T>(a: T): T {
  return a;
}

function keyOf<T, U extends keyof T>(o: T, k: U): T[U] {
  return o[k];
}

// keyOf({ noah: 1, tang: 2 }, "tang");
