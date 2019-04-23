import { ITodoModel } from "./model";
import * as MyTypes from "MyTypes";

const initialState: ITodoModel = {
  count: 0,
  list: ["Do the laundry", "Do the dishes"]
};

export const todoReducer = (state: ITodoModel = initialState, action: MyTypes.RootAction) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state
      };
    }
    case "DELETE": {
      return {
        ...state
      };
    }
    // need default or will return error
    default:
      return state;
  }
};
