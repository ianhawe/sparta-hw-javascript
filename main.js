var bob = true;

var a = prompt("enter a number");

a = parseFloat(a);

while (bob = true) {
    var input1 = prompt("Please enter a number here");
    input1 = parseFloat(input1);
    if (input1 === "quit") {
        bob = false;
        window.close();
        break;


    }
    else {
        var input2 = prompt("please select an operator");

        if (input2 === "quit") {
            bob = false;
            window.close();
            break;

        }
        else if (input2 === "*") {
            a = a * input1;
            alert(a);
        }
        else if (input2 == "/") {
            a = a / input1;
            alert(a);
        }
        else if (input2 == "-") {
            a = a - input1;
            alert(a);
        }
        else {
            a = a + input1;
            alert(a);
        }
    }
}