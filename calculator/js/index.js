let firstNumber = "";
let secondNumber = "";
let action = "";
let firstIsWrote = false;

let result = document.getElementById("result");

document.addEventListener("click", function(event){

    if (event.target.value != undefined 
        && event.target.value != "+" 
        && event.target.value != "-" 
        && event.target.value != "*" 
        && event.target.value != "/"
        && event.target.value != "clear"
        && event.target.value != "="){
            if (firstIsWrote == false){
                addFirstNumber(event.target.value)
            }
            else{
                addSecondNumber(event.target.value)
            }
    }

    if (event.target.value == "+" 
        || event.target.value == "-" 
        || event.target.value == "*"
        || event.target.value == "/"){
            addAction(event.target.value);
    }

    if (event.target.value == "="){
        result.textContent = Equally();
        firstIsWrote = false;
        firstNumber = "";
        secondNumber = "";
        action = "";
    }

    if (event.target.value == "clear"){
        clearAll()
    }
})

function addFirstNumber(valueNum){
    firstNumber += valueNum
    result.textContent = firstNumber;
}

function addAction(value){
    action = value
    result.textContent = 0;
    firstIsWrote = true;
}

function Equally(){
    switch(action) {
        case "+":
            return Number(firstNumber) + Number(secondNumber)
        case "-":
            return Number(firstNumber) - Number(secondNumber)
        case "*":
            return Number(firstNumber) * Number(secondNumber)
        case "/":
            return Number(firstNumber) / Number(secondNumber)
    }
}

function clearAll(){
    firstNumber = "";
    secondNumber = "";
    action = "";
    result.textContent = 0;
}

function addSecondNumber(valueNum){
    secondNumber += valueNum
    result.textContent = secondNumber;
}