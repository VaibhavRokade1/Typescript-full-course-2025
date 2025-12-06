// const Str: string = "Vaibhav";
// console.log(Str);
// --------------------------

// let ChaiName: string = "Chai Our Code";

// ChaiName = "Vaibhav";
// ChaiName = 30; we got an errors becouse of type is miss match

// Annotation --> In Annotation we explicitly define our datatypes
let age: number = 25;
let name1: string = "John";
// console.log(name1);

let Num1: string | number = true ? " " : 1; // explicitly we define type of that Particuler variable

// Inference --> In Inference TypeScript automatically detects the datatype
let city = "London"; // inferred as string
let count = 10; // inferred as number

let Num2 = true ? Math.random() * 20 + 1 : "1"; // inferred as string | number
