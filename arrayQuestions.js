
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


