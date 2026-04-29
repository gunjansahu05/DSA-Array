let arr = [48,23,45,5,47,767,89,30,26,16,5,38];
let min = Math.min(arr[0],arr[1]);
let smin = Math.max(arr[0],arr[1]);
for(let i=2;i<arr.length;i++){
    if(arr[i]<min){
        smin = min;
        min = arr[i];
    }else if(arr[i]<smin && arr[i]!= min){
        smin = arr[i];
    }
}
console.log("Minimum element: "+min);
console.log("Second minimum element: "+smin);