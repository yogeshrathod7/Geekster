// let string1="";
// function firstString(){
//     let string1 =prompt("enter the first string");
// //    let ss1= string1.toLocaleLowerCase();

//     return string1;
//     // let str1 = document.querySelector('.str1');
//     // str1.innerHTML=string1;
//     // return ss1;

// }
// function secondString(){
//     let string2 = prompt("enter the second string");
//     return string2;
// //    let ss2 = string2.toLocaleLowerCase();
// //     let str2 = document.querySelector('.str2');
// //     str2.innerHTML=string2;

// }
// function addToDom(firstString,secondString){
//     let str1 = document.querySelector('.str1');
//     str1.innerHTML=firstString();
//     let str2 = document.querySelector('.str2');
//     str2.innerHTML=secondString();
// }
// console.log(string1);

// // let str1 = document.querySelector('.str1');
// // str1.innerHTML=string1;
// // let str2 = document.querySelector('.str2');
// // str1.innerHTML=string2;

// let string1 = "below";
// let string2="elboW";
// string1.toLocaleLowerCase();
// string2.toLocaleLowerCase();
// let str = string1.sort();
// console.log(str1);
//  let str2=string2.sort();
//  console.log(str2);
// if(str1 ==str2){
//     console.log("anagram Strings");
// }
// else{
// console.log("Not anagram strings");
// }

// str1= "bELOW";
// str2="elboW";
// console.log(str1.toLowerCase().split('').sort().join());
// console.log(str2.toLowerCase().split('').sort().join());

function isAnagram(str1, str2) {
  if (str1.length !== str1.length) {
    alert("Enter Valid String");
  }
  let string1=str1.toLowerCase().split("").sort().join();
  let string2 =str2.toLowerCase().split("").sort().join();
  if(string1==string2){
      console.log("string is anagram");
  }
  else {
      console.log("Strings are not anagrams");
  }
}

setTimeout(() => {
    var a = prompt("Enter the first String:");
console.log(a);
var b = prompt ("Enter the second string");
console.log(b);
isAnagram(a,b);
    
}, 2000);
 


 