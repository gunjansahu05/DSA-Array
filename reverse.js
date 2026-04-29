let arr = [48,23,45,5,47,767,89,30,26,16,38];

let temp = new Array(arr.length);
let i = 0;
for(let j = arr.length-1;j>=0;j--){
    temp[i] = arr[j];
    i++;
}
console.log("Reversed array: "+temp);