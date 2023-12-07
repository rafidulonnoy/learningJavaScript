// arrow functions are shorter versions of function expression. Ex:

// let sum = function(a, b) {
//   return a + b;
// };
// console.log(sum(1, 2));
// let sum = (a, b) => a + b;
// console.log(sum(1, 2));
// ways of declaring
// for a single argument parentheses is not needed
// let singleSum = (n) => {
//   let multi = n;
//   for (let i = 1; i < n; i++) {
//     multi *= n;
//   }
//   return multi;
// };
// console.log(singleSum(3));

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Do you agree?",
//   () => {
//     console.log("You agreed.");
//   },
//   () => {
//     console.log("You canceled the execution.");
//   }
// );
let sakib = prompt("Are you sakib or not?", true);
console.log(sakib);
let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");
