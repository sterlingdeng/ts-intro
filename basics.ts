/**
 *
 * @description a typescript talk
 * @author sterling
 *
 */

// basic type declarations

// primitives

let a: string = "sterling";
let b: number = 123;
let c: boolean = true;

// re-assignment is okay because the new values are of the same type
a = "ed";
b = 456;
c = false;

// all fail because after the new assignment, types do not match their initial
// type assignment
a = 1;
b = "no";
c = "false";

// type can be inferred so you don't need to explicitly state it
// this is known as type inference
let d = "ray";

// error occurs even when type is inferred. it bad practice to mutate
// the type
d = 123;

// null and undefined can be assigned for falsy values, but false cannot
// since it's a boolean
d = null;
d = undefined;
d = false; //error

// declare an array of types by using
// type[]

let numbArr: number[] = [];
numbArr.push(2);
numbArr.push(5);
numbArr.push("3");

// you can use the any type to remove type-safety
// generally, this is avoided because this removes type-safety
let anyArr: any[] = [];
anyArr.push(3);
anyArr.push({});
anyArr.push("3')");
anyArr.push(false);
