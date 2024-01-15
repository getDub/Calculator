// Project: Calculator

const display = document.querySelector('.display');
const nums = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const back = document.querySelector('.bkSpace');
const neg = document.querySelector('.neg');


//Parts of the calculator operation
const divideByZeroError = 'really?';
let firstNum = '';
let op = '';
let secondNum = '';
let total = '';
let displayNum;

//Operate object
const operate = 
{
    "+" ( a,b ) 
    {
        secondNum = [Number(a),Number(b)].reduce((total, current) => total + current, 0);
        operate.rounding();
        op = '';
        firstNum = secondNum.toString();
        secondNum = "";
    },

    "-" ( a,b ) 
    {
        secondNum = [Number(a),Number(b)].reduce((total, current) => current - total );
        operate.rounding();
        op = '';
        firstNum = secondNum.toString();
        secondNum = "";
    },

    "*" ( a, b ) 
    {
        secondNum = [Number(a),Number(b)].reduce((total, current) => current * total, 1 );
        operate.rounding();
        op = '';
        firstNum = secondNum.toString();
        secondNum = "";
    },

    "/" ( a, b ) 
    {
        secondNum = [Number(a),Number(b)].reduce((total, current) => current / total);
        operate.rounding();
        op = '';
        firstNum = secondNum.toString();
        secondNum = "";
    },

    rounding(){
        displayNum = secondNum;
        displayNum = Math.round(secondNum * 10000000) / 10000000;
        displayNum = displayNum.toString()
        if (displayNum.includes("e") && displayNum.length > 9){
        displayNum = NaN;
        }else if (displayNum.length >= 9 && !displayNum.includes(".")){
           displayNum =  Number(secondNum)
           displayNum = displayNum * 10000000000
        return displayNum = displayNum.toString().split('').slice(0,9).join('');
        }
    },

    displayOnScreen (btnInputs)
    {
        display.value = btnInputs;
    },

    equalsBtn () 
    {
        //Msg displayed when trying to divide by zero.
        if (op === '/' && firstNum === "0"){
            operate.displayOnScreen(divideByZeroError)
            firstNum = NaN;
        } else {
        operate[op](firstNum, secondNum);
        operate.displayOnScreen(displayNum);
        }
    },

    allClear () 
    {
        display.value = '';
        firstNum = '';
        op = '';
        secondNum = '';
        displayNum = '';
        total = "";
                
    },

    // divideByZero (){
    //     if (op === '/' &&  firstNum[0] === "0") 
    //     {
    //         operate.displayOnScreen(divideByZeroError)
            
    //     }
    // },

    backspace()
    {
        if (firstNum !== "")
        {
            let backSp = firstNum.toString().split('').slice(0,-1).join('');
            firstNum = backSp
            operate.displayOnScreen(firstNum);
        } 
    },

    negative() 
    {
        if (firstNum.includes("-") && neg.value === "-") {
            let removeNeg = firstNum.split("")
            removeNeg.shift()
            firstNum = removeNeg.join("")
            operate.displayOnScreen(firstNum)
        }else if (!firstNum.includes("-") && neg.value === "-"){
            let addNeg = firstNum.split("")
            addNeg.unshift(neg.value)
            firstNum = addNeg.join('')
            operate.displayOnScreen(firstNum)
        }
    },
}


//Numbers
nums.forEach((button) => {
    
    button.addEventListener('click', () => 
    {     
        // if (op === '/' && button.value === "0") 
        // {
        //     operate.displayOnScreen(divideByZeroError)
        // }
        if (firstNum === "0" && button.value === "0") return //Zero can only be pressed once if no other number on screen
        if(firstNum.includes('.') && button.value === '.')return //Decimal can only be pressed once.
        firstNum.length < 9 ? firstNum += button.value : button.value = '';
        operate.displayOnScreen(firstNum);
    });
});


//Operators
operators.forEach((operation) => 
{
    operation.addEventListener('click', () => 
    {
        if(secondNum !== '' && firstNum !== '') {
            operate[op](firstNum, secondNum); //trigger sum method
            operate.displayOnScreen(displayNum) //display sum answer
        }
        secondNum += firstNum;
        firstNum = '';
        if(op !== "") {
            firstNum += secondNum; //pressing operators twice
            operate[op](firstNum, secondNum); //trigger sum method
            operate.displayOnScreen(displayNum)
        }
        op = operation.value
    });
});


//Backspace
back.addEventListener('click', operate.backspace)

//Equals
equals.addEventListener('click', operate.equalsBtn)

//Clear
clear.addEventListener('click', operate.allClear);

//Plus minus toggle
neg.addEventListener('click', operate.negative);