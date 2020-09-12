"use strict"
var operand;
let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

function inputNumber() {
    var inputCurrent = document.getElementsByClassName("numbers").onclick;
    document.getElementsById("current").innerText = "wrwer";
};

function clean() {
    document.getElementById("current").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}

function delLastChar() {
    var inputCurrent = document.getElementById("current").textContent;
    var result = inputCurrent.substr(0, inputCurrent.length - 1);
    document.getElementById("current").innerHTML = result;
}

function changeSign() {
    var inputCurrent = document.getElementById("current").textContent;
    var result = Number(inputCurrent) * (-1);
    document.getElementById("current").innerHTML = result;
}

function insert(num) {
    var result;
    var inputCurrent = document.getElementById("current").innerHTML;
    result = inputCurrent + num;
    document.getElementById("current").innerHTML = result;
}

function insertComma() {
    var result;
    var inputCurrent = String(document.getElementById("current").innerHTML);
    var searchForComma = String(inputCurrent.indexOf("."));
    if (inputCurrent.length == 0) {
        document.getElementById("current").innerHTML = inputCurrent;
    } else if (inputCurrent.length > 0 && searchForComma == -1) {
        result = inputCurrent + ".";
        document.getElementById("current").innerHTML = result;
    } else {
        document.getElementById("current").innerHTML = inputCurrent;
    }
}

function insertOperand(operand) {
    var inputCurrent = document.getElementById("current").innerHTML;
    var lastChar = inputCurrent[inputCurrent.length - 1];
    var firstChar = inputCurrent[0];
    if (lastChar == "*" || lastChar == "/" || lastChar == "+" || lastChar == "-" ||
        inputCurrent == "") {
        inputCurrent = inputCurrent;
    } else {
        switch (operand) {
            case 1:
                document.getElementById("current").innerHTML = inputCurrent + "/";
                break;
            case 2:
                document.getElementById("current").innerHTML = inputCurrent + "*";
                break;
            case 3:
                document.getElementById("current").innerHTML = inputCurrent + "-";
                break;
            case 4:
                document.getElementById("current").innerHTML = inputCurrent + "+";
                break;
            case 5:
                if (firstChar == 0) {
                    inputCurrent = inputCurrent.substr(1, inputCurrent.length - 1)
                    document.getElementById("result").innerHTML = eval(String(inputCurrent));

                } else {
                    document.getElementById("result").innerHTML = eval(String(inputCurrent));
                }
                break;
            default:
                document.getElementById("current").innerHTML = inputCurrent;
                alert("error");
        }
    }
}