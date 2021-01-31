// Programming Paradigms => Procedural Programming
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let symbol = document.querySelector("#symbol");
let equal = document.querySelector("#equal");
let ans = document.querySelector("#ans");
let err = document.querySelector("#error");
let res;

function calculation(){
    if(num1.value == ""){
        err.innerText = "Please enter num 1!";
    }else{
        if(num2.value == ""){
            err.innerText = "Please enter num 2!";
        }else{
            err.innerText = "";
            switch(symbol.value){
                case '+':
                    res = parseInt(num1.value) + parseInt(num2.value);
                    break;

                case '-':
                    res = parseInt(num1.value) - parseInt(num2.value);
                    break;

                case 'x':
                    res = parseInt(num1.value) * parseInt(num2.value);
                    break;

                case '/':
                    res = parseInt(num1.value) / parseInt(num2.value);
                    break;

                case '%':
                    res = parseInt(num1.value) % parseInt(num2.value);
                    break;

                default:
                    res = "error";
                    break;
            }
            ans.innerText = res;
        }
    }
}

equal.addEventListener("click", calculation);

// Programming Paradigms
// - Procedural Programming
// - Functional Programming
// - Object-Oriented Programming (OOP)
// - Logical Programming
// - Declarative Programming
// - Imprative Programming
// - Structured Programming
// - so on

// Global Variable

// Local Variable
