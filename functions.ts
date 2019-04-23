// function types are set using the :types syntax

function addTwo(n: number): number {
  return n + 2;
}

function toString(n: number): string {
  return n.toString();
}

function toStringBad(n: number): number {
  return n.toString();
}

function multiple(a: number, b: string): boolean {
  return true;
}

// for function signatures, use (x: types) => type
function incrementCounter(): (n: number) => number {
  let counter = 0;
  return (n: number): number => {
    return counter + n;
  };
}

// if functions return nothing, use the type void
function iReturnNothing(): void {
  for (let i = 0; i < 10; i += 1) {
    console.log(i);
  }
}

// the never type!
function shouldNeverHappen(): never {
  throw new Error("should never happen!");
}

// method overloading
