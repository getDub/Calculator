// Project: Calculator

const display = document.querySelector('.display');
const nums = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');


//Parts of the calculator operation
let firstNum = '';
let op = '';
let secondNum = '';
let total = '';
const divideByZeroError = 'really?';



//Operate object
const operate = {
    
    
    "+" ( a,b ) 
    {
        firstNum = [Number(a),Number(b)].reduce((total, current) => total + current, 0);
        firstNum = Math.round(firstNum * 10000000) / 10000000;
        op = '';
        secondNum = '';
        return firstNum.toString().split('').slice(0,9).join('');
    },

    "-" ( a,b ) 
    {
        firstNum = [Number(a),Number(b)].reduce((total, current) => total - current );
        firstNum = Math.round(firstNum * 10000000) / 10000000;
        op = '';
        secondNum = '';
        return firstNum.toString().split('').slice(0,9).join('');
    },

    "*" ( a, b ) 
    {
        firstNum = [Number(a),Number(b)].reduce((total, current) => current * total, 1 );
        firstNum = Math.round(firstNum * 10000000) / 10000000;
        op = '';
        secondNum = '';
        return firstNum.toString().split('').slice(0,9).join('');
    },

    "/" ( a, b ) 
    {
        firstNum = [Number(a),Number(b)].reduce((total, current) => total / current);
        firstNum = Math.round(firstNum * 10000000) / 10000000;
        op = '';
        secondNum = '';
        return firstNum.toString().split('').slice(0,9).join('');
    },
    
    displayOnScreen (btnInputs)
    {
        display.value = btnInputs;
    },

    equalsBtn () 
    {
        //If statement is for pressing the operator repeatedly and getting the total to update.
        if (op !== '' && secondNum === '') 
        {
         secondNum += firstNum;
         total = operate[op](firstNum, secondNum);
         operate.displayOnScreen(total);
        }
        
        total = operate[op](firstNum, secondNum);
        operate.displayOnScreen(total);
    },

    allClear () 
    {
        display.value = '';
        firstNum = '';
        op = '';
        secondNum = '';
        total = '';
    },
}


//Numbers
nums.forEach((button) => {
    
    button.addEventListener('click', () => {

        if (op === '' && firstNum.length <= 8) {
            firstNum += button.textContent;
            operate.displayOnScreen(firstNum)

        } else if (firstNum.length === 8){
            button.textContent = null
        }
        
        if (op === '/' && button.textContent === "0") 
        {
            operate.displayOnScreen(divideByZeroError)

        } else if (op != '' && secondNum.length <= 8) 
        {
            secondNum += button.textContent; 
            operate.displayOnScreen(secondNum)
        }
        
    });
})



//Operators
operators.forEach((operation) => {
        
    operation.addEventListener('click', () => {

        if( secondNum !== '') {
            total = operate[op](firstNum, secondNum);
            operate.displayOnScreen(total);
        }
        
        if (op !== '' && secondNum === '') {
            secondNum += firstNum;
            total = operate[op](firstNum, secondNum);
            operate.displayOnScreen(total);
        }

        op = operation.textContent
    });
    
    });


//Equals
equals.addEventListener('click', operate.equalsBtn)


//Clear
clear.addEventListener('click', operate.allClear);
