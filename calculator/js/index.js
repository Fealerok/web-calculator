let array = []
let result = []
let sum = 0;
let num = 0;
let index2;
const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let isMultiply = false;
let isDivision = false;
let length_str = 0;

let resultSpan = document.getElementById("result");

document.addEventListener("click", function(event){
    if (event.target.value == "reload"){
        location.reload();
    }
    length_str++;
    if (length_str < 16){
        if (values.includes(event.target.value)){
            result.push(event.target.value)
            resultSpan.textContent = result.join("");
            console.log(result);
        }
    }

    if (event.target.value == "+"){
        length_str = 0;
        array.push(result.join(""))
        result = []
        array.push("+")
    }

    if (event.target.value == "+" && array.length == 1){
        length_str = 0;
        array.shift()
        result.splice(1, 1)
    }

    if (event.target.value == "-"){
        length_str = 0;
        array.push(result.join(""))
        array.push("-")
        result = []
    }

    if (event.target.value == "-" && array.length == 1){
        length_str = 0;
        result.splice(1, 1)
        array.shift()
    }

    if (event.target.value == "*"){
        length_str = 0;
        array.push(result.join(""))
        array.push("*")
        result = []
    }

    if (event.target.value == "*" && array.length == 1){
        length_str = 0;
        result.splice(1, 1)
        array.shift()
    }

    if (event.target.value == "/"){
        length_str = 0;
        array.push(result.join(""))
        array.push("/")
        result = []
    }

    if (event.target.value == "/" && array.length == 1){
        length_str = 0;
        result.splice(1, 1)
        array.shift()
    }

    if (event.target.value == "clear"){
        length_str = 0;
        result = []
        sum = 0;
        num = 0;
        isMultiply = false;
        isDivision = false;
        array = []
        resultSpan.textContent = 0;
    }

    if (event.target.value == "="){
        length_str = 0;
        array.push(result.join(""))
        result = []

        for (let j = 0; j < array.length; j++){

            //Проверка на наличие оператора умножения или деления для того, что бы выполнить с ним действия первыми.
            for (let x = 0; x < array.length; x++){
                if (array[x] != "*"){
                    num += 1;
                    isMultiply = false;
                }
                else{
                    num = 0;
                    isMultiply = true;
                    break;
                }
        
                if (array[x] != "/"){
                    num += 1;
                    isDivision = false;
                }
                else{
                    num = 0;
                    isDivision = true;
                    break;
                }

            }

            //выполнение вычислений, если нет операторов умножения или деления
            if (isMultiply == false && isDivision == false){
                for (let x = 0; x < 3; x++){

                    if (array[x] == "+"){
                        result[0] = String(Number(array[x-1]) + Number(array[x+1]))
                        for (let y = 0; y < 3; y++){
                            array.shift()
                        }
                        array.unshift(result[0])
                    }
                }
            
                for (let x = 0; x < 3; x++){
                    if (array[x] == "-"){
                        result[0] = String(Number(array[x-1]) - Number(array[x+1]))
                        for (let y = 0; y < 3; y++){
                            array.shift()
                        }
                        array.unshift(result[0])
                    }
                }
            }
        
            //вычисление чисел между знаком умножения
            if (isMultiply == true){
                for (let x = 0; x < array.length; x++){
                    if (array[x] == "*"){
                        result[1] = String(Number(array[x-1]) * Number(array[x+1]))
                        array[x] = result[1]
                        array.splice(x-1, 1)
                        array.splice(x, 1)
                        isMultiply = false
                        break;
                    }
                }
            }
        
            //вычисление чисел между знаком деления
            if (isDivision == true){
                for (let x = 0; x < array.length; x++){
                    if (array[x] == "/"){
                        result[1] = String(Number(array[x-1]) / Number(array[x+1]))
                        array[x] = result[1]
                        array.splice(x-1, 1)
                        array.splice(x, 1)
                        isDivision = false
                        break;
                    }
                }
            }

        }
        //показ результата
        resultSpan.textContent = array[0].substring(0, 15);
        array.shift()

        if (array.length == 3){
            if (array[1] == "+"){
                resultSpan.textContent = String(Number(array[0]) + Number(array[2])).substring(0, 5);
            }
        }

        if (array.length == 3){
            if (array[1] == "-"){
                resultSpan.textContent = String(Number(array[0]) + Number(array[2])).substring(0, 5);
            }
        }

    }
})
