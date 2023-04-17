
//Max occurence js Function =

function mostFrequent(arr) {
    let count = {};
    let maxCount = 0;
    let maxItem = null;
  
    for (let item of arr) {
      if (!count[item]) {
        count[item] = 1;
      } else {
        count[item]++;
      }
      if (count[item] > maxCount) {
        maxCount = count[item];
        maxItem = item;
      }
    }
  
    return maxItem;
  }
let arr = [2,3,4,2,4,2,5,62,6];
let v = mostFrequent(arr); 
console.log(v); 