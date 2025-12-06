// const Str: string = "Vaibhav";
// console.log(Str);
// --------------------------
// let ChaiName: string = "Chai Our Code";
// ChaiName = "Vaibhav";
// ChaiName = 30; we got an errors becouse of type is miss match
// Annotation --> In Annotation we explicitly define our datatypes
var age = 25;
var name1 = "John";
// console.log(name1);
var Num1 = true ? " " : 1; // explicitly we define type of that Particuler variable
// Inference --> In Inference TypeScript automatically detects the datatype
var city = "London"; // inferred as string
var count = 10; // inferred as number
var Num2 = true ? Math.random() * 20 + 1 : "1"; // inferred as string | number
