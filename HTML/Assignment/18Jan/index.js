// let post1 = document.getElementById('p1-img');
// let p1=336;
// function likeCount() {
//     // console.log("hello");
//     // p1=p1+1;
//     console.log(p1);
//     // post1.addEventListener('onclick',()=>{
//     //     console.log("Hello");
//     // });
    

     
// }
let p1=950;
let funCount=0;
let firstPostlike =document.querySelector("#p1-like-comm-send i:first-child");
let p1_likes = document.getElementsByClassName('p1-likes');
function likeCount2(pNo) {
   
    funCount+=1;
    
    if(funCount%2==1){
        p1=p1+1;
        document.querySelector('.p1-likes').innerHTML=p1;
        document.querySelector("#p1-like-comm-send i:first-child").style.color ="red";
    }
    else
        {
            p1=p1-1;
        document.querySelector('.p1-likes').innerHTML=p1;
        document.querySelector("#p1-like-comm-send i:first-child").style.color ="black";
        }
    
    
}