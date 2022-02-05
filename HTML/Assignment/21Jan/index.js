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
let arr = ["https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png","https://cdn-icons.flaticon.com/png/128/5948/premium/5948910.png?token=exp=1643463362~hmac=c0815ec202c3935014be6a6e0f9e2a67","https://media.istockphoto.com/photos/young-traveler-with-backpack-picture-id1134707669?k=20&m=1134707669&s=612x612&w=0&h=8MVkv4PxmGPXZGhQcqm0oApYX5mRKM-5s9aWMglC3AQ=","https://cdn.pixabay.com/photo/2015/09/03/08/04/photographer-920128_960_720.jpg"];

let container = document.getElementsByClassName('container');
console.log(container);

for(let i=0;i<arr.length;i++){
    var posts = document.createElement(`<div class="post post1">
<div class="h-post">
  <img
    id="p1-himg"
    src="https://cdn.pixabay.com/photo/2017/06/09/17/11/model-2387582__340.jpg"
    alt="profile-img"
  />
  <h4>_nikki012</h4>
  <h4 class="more">...</h4>
</div>
<img
  src="${arr[i]}"
  alt="Post"
  class="post-img" id="p1-img" ondblclick="likeCount();"
/>
<div class="like-comm-send" id="p1-like-comm-send">
  <i class="far fa-heart" id="like"  onclick="likeCount2('p1');"></i>
  <i class="far fa-comment"></i>
  <i class="far fa-paper-plane"></i>
  <i class="far fa-bookmark"></i>
</div>
<div class="like-count">
  <span id="post1-likes" class="p1-likes">950</span>
  <span>likes</span>
</div>
<p class="post1-comm">
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Exercitationem earum sit numquam quo, aut qui. Lorem ipsum dolor sit
  amet.
</p>
<div class="comment">
  <i class="far fa-frown"></i>
  <input
    type="text"
    name="comment"
    id=""
    placeholder="Add a comment..."
  />
  <span>Post</span>
</div>
</div>`)
container.appendChild('posts');
}