interface Person1 {
  name: string;
  age: number;
}

interface Person2 {
  name: string;
  isMinor: boolean;
}

// union type
let p: Person1 & Person2;
// p

// intersection type
let p2: Person1 | Person2;
// p2

type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "modify"; payload: boolean };

function reducer(action: Actions) {
  switch (action.type) {
    case "add":
      return action.payload.toLowerCase();
    case "remove":
      return action.payload.toExponential(1);
    default:
      return typeof action.payload;
  }
}
