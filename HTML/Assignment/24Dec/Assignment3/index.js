function isPerfectSquare(x) {
  let left = 1,
    right = x;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    // Check if mid is perfect square
    if (mid * mid == x) {
      return true;
    }

    // Mid is small -> go right to increase mid
    if (mid * mid < x) {
      left = mid + 1;
    }

    // Mid is large -> to left to decrease mid
    else {
      right = mid - 1;
    }
  }
  return false;
}

// Driver Code
let x = prompt("enter the number");
x=parseInt(x);

// Function Call
if (isPerfectSquare(x)) alert("Yes,The number is perfect square root");
else alert("No,The number is not perfect square root");
