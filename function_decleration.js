// const a = 2,
//   b = 3;
// function sumOnnoy(x, y) {
//   return x + y;
// }
// console.log(sumOnnoy(a, b));

// function showCount(count) {
//   console.log(count ?? "unknown");
// }
// // let count = prompt("enter a number: ", "");
// showCount(0);
// showCount(null);
// showCount(count);

// // instences where a function returns more then one values

// let age = prompt("Are you 18+?\nEnter yes if you are otherwise enter no", "no");
// const age = 10;
// function checkAge(enteredAge) {
//   if (enteredAge >= 18) {
//     return true;
//   }
//   return false;
// }
// if (checkAge(age)) {
//   console.log("Access Granted");
// } else {
//   console.log("Access Denied");
// }

// function showPrime(n) {
//   nextPrime: for (let i = 2; i < n; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         continue nextPrime;
//       }
//     }
//     console.log(i);
//   }
// }
// showPrime(10);

// function showAnotherPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (isPrime(i)) continue;
//   }
// }
// function isPrime(i) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       return false;
//     }
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm("Did your parents gave permission?");
// }
// function checkAge(age) {
//   return age > 18 || confirm("Did your parents gave you permission?");
// }
// checkAge(10);

// function minNum(a, b) {
//   // if (a > b) {
//   //   return b;
//   // }
//   // return a;
//   return a < b ? a : b;
// }
// console.log(minNum(6, 9));

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(3, 3));
console.log("hello world");
console.log("hello world");
