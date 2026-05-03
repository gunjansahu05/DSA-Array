let arr = [10,20,30,40,50,60];
console.log(arr);
let prompt = require("prompt-sync")();
let k = Number(prompt("Enter the number of positions to rotate: "));

for(let j=1;j<=k;j++){
let temp = arr[0];

for(let i=0;i<=arr.length-1;i++){
    arr[i] = arr[i+1];
}
arr[arr.length-1] = temp;
}

console.log(arr);

