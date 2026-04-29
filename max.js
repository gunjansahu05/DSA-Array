let prompt = require("prompt-sync")();
let size = Number(prompt("Enter the size of array:"));
let arr = new Array(size);

for(let i = 0;i<arr.length;i++){
    arr[i]= Number(prompt("Enter the element of array:"));

}
let max= arr[0];
for(let i = 1;i<arr.length;i++){
 arr[i]>max? max=arr[i]:max;
}
console.log("Maximum element in array is: " + max);