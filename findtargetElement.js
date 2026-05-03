let prompt = require("prompt-sync")();
let target = Number(prompt("Enter the target element : "));
let arr = [10,20,30,40,50,60];
let index = -1;

for(let i=0;i<arr.length;i++){
    if(arr[i] === target){
        index = i;
        break;

    }
}
if(index === -1){
    console.log("element not found");
}else{
    console.log("element found at index : " + index);
}