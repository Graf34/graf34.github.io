var primer = document.getElementById("primer");

var otvet = document.getElementById("otvet");

var a = "";

var b = "";

var x = " ";

var otvetNum = "";

var dota = true;

var dotb = true;


function getNum(num) {
    if (otvetNum == "") {
        if (x == " ") {
            if (a.length < 10) {
                a += String(num);
                otvet.innerText = a;
            }
        } else {
            if (b.length < 10) {
                b += String(num);
                otvet.innerText = b;
            }
        }
    } else { location.reload(); }

}

function getOp(op) {

    if (!isNaN(parseFloat(a)) && (x = " ")) {
        x = op;
        primer.innerText = a + op;
        otvet.innerText = "";
    }

    if (a == "" && op == "-") {
        a += "-";
        otvet.innerText = a;
    } else {
        if (a == "+" && op == "-") {
            a = "-";
            otvet.innerText = a;
        }
    }

    if (a == "" && op == "+") {
        a += "+";
        otvet.innerText = a;
    } else {
        if (a == "-" && op == "+") {
            a = "";
            otvet.innerText = a;
        }
    }

}




function rovno() {
    if (b != "") {
        primer.innerText = a + x + b;
        switch (x) {
            case "*":
                otvetNum = parseFloat(a * b);
                otvet.innerText = otvetNum;
                break;
            case "-":
                otvetNum = parseFloat(a - b);
                otvet.innerText = otvetNum;
                break;
            case "+":
                otvetNum = parseFloat(a) + parseFloat(b);
                otvet.innerText = otvetNum;
                break;
            case "/":
                otvetNum = parseFloat(a / b);
                otvet.innerText = otvetNum;
                break;
        }
    }

}

function getDot() {

    if (otvetNum == "") {
        if (x == " ") {
            if (a.length < 8 && dota) {
                dota = false;
                a += ".";
                otvet.innerText = a;
            }
        } else {
            if (b.length < 8 && dotb) {
                dotb = false;
                b += ".";
                otvet.innerText = b;
            }
        }
    } else { location.reload(); }



}