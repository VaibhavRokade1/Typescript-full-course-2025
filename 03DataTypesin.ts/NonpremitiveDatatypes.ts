// non- premitive datatypes

// arrays in js / ts 
 //js
// const num = [1,2,3,4,5] 

// //ts
// const num : number[] = [1,2,3,4,5] 

// num.forEach((i)=>console.log(i));

// console.log("hi");


// Enumurations

// enum  special datatypes that define a set of  name constant
// enum  special data type that defines a set of named constants 

// enum userRole{
//     ADMIN = "admin",
//     GUEST = "guest",
//     SUPER_ADMIN = "super_admin"
// }

// most use to store user roles and status code

// enum StatusCode
// {
//     NOTFOUND  = "Error 404 not found...",
//     SUCCESS = "201 ok"
// }

// StatusCode.SUCCESS = "dffsdf" it by default read-only...!!! 

// console.log(StatusCode.SUCCESS)



// tuples is fxed array size with fixed type 
// const person : [string , number , boolean] = ["Vaibhav" , 100, true];