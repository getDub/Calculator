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




//Number input
nums.forEach((button) => {
     
    button.addEventListener('click', () => {
         
        if ( op === '') {
            firstNum += button.textContent;
            display.textContent = firstNum;
        }else {
            secondNum += button.textContent; //I think a call to Equals should be done after second number?
            display.textContent = secondNum; 
        }
             
    });
})



//Operator input
let operations = function () {
    
    operators.forEach((operation) => {
        
        operation.addEventListener('click', () => {

            if( secondNum !== '') {
                total = operate[op](firstNum, secondNum)
                display.textContent = total;
            }
            
            if (op !== '' && secondNum === '') {
                secondNum += firstNum;
                total = operate[op](firstNum, secondNum);
                display.textContent = total;
            }

            op = operation.textContent;
            
            
        })
    })
}
operations();



//Equals
const equalsBtn = function (){

equals.addEventListener('click', () => {
    
     total = operate[op](firstNum, secondNum);
     display.textContent = total;
    
})
}

equalsBtn();



//Clear
clear.addEventListener('click', () => {
    display.textContent = '';
    displayValues = '';
    firstNum = '';
    op = '';
    secondNum = '';
    total = '';
    
})



//Operate function
const operate = {

    //loop over keys in obj and execute value for matching keys.
//    a: firstNum,
//    b: secondNum,
    
    "+" ( a,b ) 
    {
        firstNum = [Number(a),Number(b)].reduce((total, current) => total + current, 0);
        op = '';
        secondNum = '';
        return firstNum;
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
    }
    
    
}
