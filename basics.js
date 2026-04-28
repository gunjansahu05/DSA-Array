let prompt = require("prompt-sync")();
let size = Number(prompt("Enter the size of array"));
let arr = new Array(size);

for(let i = 0;i<arr.length;i++){
    arr[i] = Number(prompt("Enter the element"));
}

console.log(arr);
