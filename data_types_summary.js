// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol.

// String
const str = "hello";
// Number
const num = 9;
// Boolean
const bool = true;
// Null
const nul = null;
// Undefined
const undf = undefined;
// Symbol
const sym = Symbol("123");

// Reference (Non-primitive)

// Array, Objects, Functions

// Array
const arr = ["hello", "hi", true, 9];
// Objects
const obj = {
  name: "rafidul",
  roll: 22069,
  registration_no: 21500200539,
};
//Functions
const fun = function () {
  console.log(typeof sym);
};

// All the primitive data types are stored in stack memory
// Stack memory gives access to a copy of a variable so that after reinitializing it doesn't change its original value
// Stack memory only changes the copy of the variable. Example:--

let youtubeName = "RafidulOnnoy";
let newYoutubeName = youtubeName;
newYoutubeName = "Another Onnoy";
console.log(youtubeName);
console.log(newYoutubeName);

// All the non-primitive data types are stored in heap memory
// Heap memory gives direct access to any variable and after reinitializing it changes the content of the variable
// to the newest changes. Example:--

let userOne = {
  email: "userOne@gmail.com",
  phone_no: +8801922426410,
};
let userTwo = userOne;
userTwo.email = "userTwo@gmail.com";
userTwo.phone_no = +8801933536430;

console.log(userTwo.email);
console.log(userOne.email);
console.log(userTwo.phone_no);
console.log(userOne.phone_no);
