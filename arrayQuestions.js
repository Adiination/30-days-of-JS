//1).Max occurence js Function =

// function mostFrequent(arr) {
//     let count = {};
//     let maxCount = 0;
//     let maxItem = null;

//     for (let item of arr) {
//       if (!count[item]) {
//         count[item] = 1;
//       } else {
//         count[item]++;
//       }
//       if (count[item] > maxCount) {
//         maxCount = count[item];
//         maxItem = item;
//       }
//     }

//     return maxItem;
//   }
// let arr = [2,3,4,2,4,2,5,62,6];
// let v = mostFrequent(arr);
// console.log(v);

//2).function that returns largest word of a string:

// function longest (string){
//   let words = string.split(" ");
//   let longestWord = "";
//   for (let i = 0; i<words.length ;i++){
//     if (words[i].length>longestWord.length){
//       longestWord = words[i];

//     }

//   }
//   return longestWord;
// }

// const str = longest("A quick brown fox jumped over a lazy dog");
//  console.log(str);

// 3). table of a give number
// const table =  (n) => {
//   for(let i = 1; i <= 10; i++){
//     console.log(`${n} x ${i} = ${n * i}`)
// }

// }

// table(3);

//4). function to reverse the given string:

// function reverseString(n){

//   return n.split('').reverse().join('');
// }

// let a = reverseString("Aditya");
// console.log(a);

//to find the sum of an array

// 5).function sumArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// let a =[45,6,55,45];

// console.log(sumArray(a));

//6). to reverse an array and join them and console as a string :

// function reverseArray(array){
//     let result = array.reverse().join(',');
//     console.log(result);
// }
// let B = [23,34,32,25];

// console.log(reverseArray(B));

//7).find the smallest number in an array :

// function minNumber(array){

// return Math.min(...ar);

// }

// let ar = [3,4,4,454,53];
// console.log(minNumber(ar));

//**another way

// function findLowestNumber(numbers) {
//     let lowest = numbers[0]; // Assume the first element is the lowest

//     for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] < lowest) {
//         lowest = numbers[i]; // Update the lowest if we find a smaller number
//       }
//     }

//     return lowest;
//   }

//8). To check if the array has repetitive numbers.

// function containsDuplicate(nums) {
//     const set = new Set(nums);  // create a Set from the input array
//     return set.size !== nums.length;  // if the Set size is less than the array length, then there are duplicates
//   }

// // let a = [2,3,2,2,1,43,43,8];
// // console.log(containsDuplicate(a));
// let b = [12,2,3,4,56,43,78];
// console.log(containsDuplicate(b));

//9). To return how many of of the n number are there in an array :

// function countn(array,Num){
//     var count = 0;
//     for(var i = 0; i < array.length; i++){
//         if(array[i]==Num){
//             count++;
//         }

// }
// return count;
// }

// console.log(countn([2,3,4,2,3,5,5,2],4));

//create a js function that Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

// function largestOfFour(arr) {
//   let maxArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let maxNumber = arr[i][0];
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > maxNumber) {
//         maxNumber = arr[i][j];
//       }
//     }
//     maxArr.push(maxNumber);
//   }
//   return maxArr;
// }

// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );

//Q).Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
//This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

// function findElement(arr, func) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
//   return undefined;
// }

// console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

//Question: Given an array of numbers, write a function to find the two numbers that add up to a given target sum.
//Return an array containing the indices of the two numbers.

// function findTwoNumbers(arr, targetSum) {
//   const numMap = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     const complement = targetSum - arr[i];

//     if (numMap.has(complement)) {
//       return [numMap.get(complement), i];
//     }

//     numMap.set(arr[i], i);
//   }

//   return [];
// }

// const numbers = [2, 4, 6, 8, 10];
// const target = 12;
// const result = findTwoNumbers(numbers, target);
// console.log(result);

//Q).You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// function birthdayCakeCandles(candles) {
//   let num = Math.max(...candles);
//   let total = 0;

//   for (let i = 0; i < candles.length; i++) {
//     if (candles[i] === num) {
//       total += 1;
//     }
//   }
//   return total;
// }

// let candles = [2, 3, 4, 5, 5, 6];
// console.log(birthdayCakeCandles(candles));
