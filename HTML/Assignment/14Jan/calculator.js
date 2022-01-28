console.log('☀');


var number1 = "";
var number2 = "";
var operator = "";

function setOperator(new_operator) {
    operator = new_operator;
}

function concatNumber(single_digit) {
    if(operator == "") {
        number1 = number1 + single_digit;
        display(number1);
    } else {
        number2 = number2 + single_digit;
        display(number2);
    }
   
}

function deleteLastDigit() {
    if(operator == "") {
        number1 = number1.slice(0, -1);
        display(number1);
    } else {
        number2 = number2.slice(0, -1);
        display(number2);
    }
    
}

function clearAll() {
    if(operator == "") {
        number1 = "";
        display(number1);
    } else {
        number2 = "";
        display(number2);
    }
    
}


function equals() {
    if(operator == "+") {
        number1 = add(number1, number2);
        number2 = "";
        operator = "";
        display(number1);
    } else if(operator == "*") {
        number1 = mul(number1, number2);
        number2 = "";
        operator = "";
        display(number1);
    }
    else if(operator=="-"){
        number1 = sub(number1, number2);
        number2 = "";
        operator = "";
        display(number1);
    }
    else if(operator=="/"){
        number1 = div(number1, number2);
        number2 = "";
        operator = "";
        display(number1);
    }
    else if(operator="%"){
        number1 = rem(number1, number2);
        number2 = "";
        operator = "";
        display(number1);
    }
}

function add(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var sum = num1 + num2; 
    return sum;
}

function mul(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 * num2;
}
function sub(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var sub = num1 - num2; 
    return sub;
}
function div(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var div1 = num1 / num2; 
    return div1;
}
function rem(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var remain = num1 % num2; 
    return remain;
}
function display(num) {
    // var inp = document.getElementsById('input');
    // inp.innerHTML = num;
    document.querySelector('#result').innerHTML=num;
    console.log(num);
}