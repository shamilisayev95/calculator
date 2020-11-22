(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation");
let decimalBtn = document.getElementById("decimal");
let clearBtns = document.querySelectorAll(".clear-btn");
let display = document.getElementById("display");
let sqrtBtn = document.getElementById("sqrt");
// let powBtn = document.getElementById(("pow"))
let memoryCurrentNumber = 0;
let memoryNewNumber = false;
let memoryWaitingOperation = "";
//Adding events for my buttons
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener("click", (e) => {
        numberPress(e.target.textContent);
    })
}


for (let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener("click", (e) => {
        operation(e.target.textContent);

    })
}


for (let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener("click", (e) => {
        clear(e.srcElement.id)
    })
}


decimalBtn.addEventListener("click", decimal);
sqrtBtn.addEventListener("click", mySqrt);




function numberPress(number) {

    if (memoryNewNumber) {
        display.value = number;
        memoryNewNumber = false;
    } else {
        if (display.value === "0.00") {
            display.value = number;
        } else {
            display.value += number;
        }
    }

}


function operation(symbol) {

    if (memoryNewNumber && memoryWaitingOperation !== "=") {
        display.value = memoryCurrentNumber;
    } else {
        memoryNewNumber = true;
        if (memoryWaitingOperation === "+") {
            memoryCurrentNumber = parseFloat(memoryCurrentNumber) + parseFloat(display.value);

        } else if (memoryWaitingOperation === "-") {
            memoryCurrentNumber -= parseFloat(display.value);
        } else if (memoryWaitingOperation === "x") {
            memoryCurrentNumber *= parseFloat(display.value);
        } else if (memoryWaitingOperation === "/") {
            memoryCurrentNumber /= parseFloat(display.value);
        } else if (memoryWaitingOperation === "%") {
            memoryCurrentNumber = (parseFloat(memoryCurrentNumber) / 100) * parseFloat(display.value);
        } else {
            memoryCurrentNumber = display.value
        }

        display.value = memoryCurrentNumber;
        memoryWaitingOperation = symbol;
    }
}


function clear(id) {

    if (id === "ce") {
        display.value = "0";
        memoryNewNumber = true;
    } else if (id === "c") {
        display.value = 0;
        memoryNewNumber = true;
        memoryCurrentNumber = 0;
        memoryWaitingOperation = "";
    }
}


 function decimal() {
    let localDecimalMemory = display.value;

    if (memoryNewNumber) {
        localDecimalMemory = "0.";
        memoryNewNumber = false;
    } else {
        localDecimalMemory += ".";
    }
    display.value = localDecimalMemory
 }


function mySqrt () {

    if (memoryNewNumber) {
        memoryCurrentNumber = Math.sqrt(parseInt(display.value))
    }
    display.value = memoryCurrentNumber;
}




},{}]},{},[1]);
