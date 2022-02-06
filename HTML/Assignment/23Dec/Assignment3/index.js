var n=prompt("enter the number");
n = parseInt(n);
var flag=true;

for(let i = 2; i <= n - 1; i++)
    if (n % i == 0) {
        flag = false;
        break;
    }
      
    // Check and display alert message
if (flag == true)
    alert(n + " is prime");
else
    alert(n + " is not prime");