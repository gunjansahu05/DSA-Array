let arr = [10,20,30,40];
console.log(arr);
let temp = new Array(arr.length);
let k = 2;
k = k%arr.length;

for(let i=0;i<arr.length;i++){
    temp[i] = arr[(i+k)%arr.length];
}

console.log(temp);