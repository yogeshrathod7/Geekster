// Q1.Take 3 inputs from the user and show minimum of the three. 

var a =prompt("enter the first number");
var b=prompt("enter the second number");
var c=prompt("enter the third number");
a = parseInt(a)
b = parseInt(b)
c = parseInt(c)
if(a>b & a>c){
    console.log("Number a is maximum value");
}
if(b>a & b>c){
    console.log("Number b is maximum value");
}
if(c>a & c>b){
    console.log("Number c is maximum value");
}

// Q2.Check whether the given chracter is a vowel or not. (Also check for capital characters).

var x = prompt("Enter a charecter");
 
switch(x){
    case 'a'||'A':
        console.log("It is a vowel A");
        break;

    case 'e'||'E':
        console.log("It is a vowel E");
        break;

    case 'i'||'I':
        console.log("It is a vowel I");
        break;
    case 'o'||'O':
        console.log("It is a vowel O");
        break;
    case 'u'||'U':
        console.log("It is a vowel U");
        break;
    default:
        console.log("It is not vowel");
}