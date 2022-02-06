var arr=[];
var n =prompt("enter the length of array")
for(let i=0;i<n;i++){
    arr.push(prompt("enter array element"));
}
// console.log('max value in array is',Math.max(...arr));
console.log('max value in array is',Math.max.apply(Math, arr)); 