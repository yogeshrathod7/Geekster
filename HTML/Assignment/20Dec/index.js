// Q1. Write a program to check whether the number is greater than 10 or not.

var n =prompt("enter the number");
n=parseInt(n);
if(n>10){
    alert("The number is grater than 10");
}
else if(n<10){
    alert("The number is less than 10");
}
else{
    alert("the value of number is 10");
}

// Q2. Write a program to have 3 variables (all three are number) and output the highest/greatest/maximum of all three. 

var a =prompt("enter the first number");
var b=prompt("enter the second number");
var c=prompt("enter the third number");
a = parseInt(a)
b = parseInt(b)
c = parseInt(c)
if(a>b & a>c){
    console.log("Number a is maximum value");
    alert("Number a is maximum value");
}
if(b>a & b>c){
    console.log("Number b is maximum value");
    alert("Number b is maximum value");
}
if(c>a & c>b){
    console.log("Number c is maximum value");
    alert("Number c is maximum value");
}