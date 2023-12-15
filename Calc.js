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
        op = '';
        secondNum = '';
        return firstNum;
    },

    "*" ( a, b ) 
    {
        firstNum = [Number(a),Number(b)].reduce((total, current) => current * total, 1 );
        op = '';
        secondNum = '';
        return firstNum;
    },

    "/" ( a, b ) 
    {
        firstNum = [Number(a),Number(b)].reduce((total, current) => total / current);
        op = '';
        secondNum = '';
        return firstNum;
    },
    
    displayValue (btnInputs)
    {
        display.textContent = btnInputs;
    },

    // operations ()
    // {
    //     if( secondNum !== '') {
    //         total = operate[op](firstNum, secondNum);
    //         operate.displayValue(total);
    //     }
        
    //     if (op !== '' && secondNum === '') {
    //         secondNum += firstNum;
    //         total = operate[op](firstNum, secondNum);
    //         operate.displayValue(total);
    //     }

    //     op = this.operation.textContent
    // },

    equalsBtn () 
    {
        if (op !== '' && secondNum === '') 
        {
         secondNum += firstNum;
         total = operate[op](firstNum, secondNum);
         operate.displayValue(total);
        }
        
        total = operate[op](firstNum, secondNum);
        operate.displayValue(total);
    },

    allClear () 
    {
        display.textContent = '';
        firstNum = '';
        op = '';
        secondNum = '';
        total = '';
    },
}


//Numbers
nums.forEach((button) => {
    
    button.addEventListener('click', () => {
        
        if ( op === '') {
            firstNum += button.textContent;
            operate.displayValue(firstNum)
        }else {
            secondNum += button.textContent; 
            operate.displayValue(secondNum)
        }
             
    });
})



//Operators
operators.forEach((operation) => {
        
    operation.addEventListener('click', () => {

        if( secondNum !== '') {
            total = operate[op](firstNum, secondNum);
            operate.displayValue(total);
        }
        
        if (op !== '' && secondNum === '') {
            secondNum += firstNum;
            total = operate[op](firstNum, secondNum);
            operate.displayValue(total);
        }

        op = operation.textContent
    });
    
    });


//Equals
equals.addEventListener('click', operate.equalsBtn)


//Clear
clear.addEventListener('click', operate.allClear);
