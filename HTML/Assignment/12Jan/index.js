var count = 0;
var x = document.getElementById("like");
var y = document.getElementById("dislike");
var totalLike = document.querySelector('.likeCount');
// totalLike.innerText='Yogesh';

console.log(totalLike);
console.log(x);

var clickLike = x.addEventListener("onclick", myFunction1);
var clickdiLike = y.addEventListener("onclick", myFunction2);

function myFunction1() {
  count = count + 1;
  console.log(count);
//   totalLike.innerText=count;
//   return count;
  totalLike.innerHTML = count;
}
function myFunction2() {
  count = count - 1;
  console.log(count);
//   totalLike.innerText=count + " likes";
//   return count;
  totalLike.innerHTML = count;
  totalLike.innerText=count;
}
