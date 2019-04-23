import { action } from "typesafe-actions";

// use typescript enum rather than action constants
enum actionTypes {
  ADD = "ADD",
  DELETE = "DELETE"
}

export const todoActions = {
  add: (entry: string) => action(actionTypes.ADD, entry),
  delete: (idx: number) => action(actionTypes.DELETE, idx)
};
