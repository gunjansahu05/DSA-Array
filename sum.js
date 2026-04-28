let prompt = require("prompt-sync")();
let size = Number(prompt("Enter the size of array"));
let arr = new Array(size);
let sum = 0;

for(let i = 0;i<arr.length;i++){
    arr[i] = Number(prompt("Enter the element"));
    sum = sum + arr[i];
}
console.log(arr);
console.log("Sum of array elements is: " + sum);