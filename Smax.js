let arr = [48,23,45,5,47,767,89,30,26,16,38];
let max = Math.max(arr[0],arr[1]);
let smax = Math.min(arr[0],arr[1]);
for(let i= 2;i<arr.length;i++){
    if(arr[i]>max){
        smax = max;
        max = arr[i];
    }else if(arr[i]>smax && arr[i]!= max){
        smax = arr[i];
    }
}
console.log("Maximum element:",max);
console.log("Second maximum element:",smax);