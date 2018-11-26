
var n = 0;
var p = 1000;
while (n > p) {
    n++
    var num1 = prompt("Hello please enter the first number!");
    var num2 = prompt("Please enter your second number!");
    var symbol = prompt("Please enter the operator you wish to do");

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var results;


    switch (symbol) {

        case "/":
            results = num1 / num2;
            alert(results);
            break;
        case "-":
            results = num1 - num2;
            alert(results);
            break;
        case "*":
            results = num1 * num2;
            alert(results);
            multiply(results);
            break;

        default:
            results = num1 + num2;
            alert(results);
            break;
    }


}

