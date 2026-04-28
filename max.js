let arr = [1,2,3,45,68,100,23,56];
let max = arr[0];

for(let i = 1;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log("Maximum value in the array is: " ,max);