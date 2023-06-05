// How do you check if a string contains a specific substring in JavaScript?
// const str = "The quick brown fox jumps over the lazy dog";
// const substr = "brown";
// const containsSubstr = str.includes(substr);
// console.log(containsSubstr);

// How do you convert a string to uppercase in JavaScript?

// const str = "hello, world!";
// const uppercaseStr = str.toUpperCase();
// console.log(uppercaseStr);

// How do you remove whitespace from the beginning and end of a string in JavaScript?

// const str = "   Hello, World!   ";
// const trimmedStr = str.trim();
// console.log(trimmedStr);

//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
//For the purpose of this challenge, do not use the built-in .repeat() method.

// function repeatStringNumTimes(str, num) {
//   let completeStr = "";
//   if (num <= 0) {
//     return "";
//   } else {
//     for (let i = 0; i < num; i++) {
//       completeStr += str;
//     }
//   }
//   return completeStr;
// }

// let a = repeatStringNumTimes("abc", 3);
// console.log(a);

//Q).Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

// function truncateString(str, num) {
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
