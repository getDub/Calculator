// Project: Calculator

const display = document.querySelector('.display');
const nums = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
// const deci = document.querySelector('button').value='.';

//Parts of the calculator operation
let firstNum = '';
let op = '';
let secondNum = '';
let total = '';
const divideByZeroError = 'really?';
let test = 'Yay';


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

    // decimalPoint()
    // {
    //     if(firstNum.includes('.'))
    //     {
    //         point.value = '';
    //     }
          
    //     if (secondNum.includes('.'))
    //     {
    //         point.value = '';
    //     } 
       
    // },

    displayOnScreen (btnInputs)
    {
        display.value = btnInputs;
    },

    equalsBtn () 
    {
        //If statement is for pressing the same operator repeatedly and getting the total to update.
        if (op !== '' && secondNum === '') 
        {
         secondNum += firstNum;
         total = operate[op](firstNum, secondNum);
         operate.displayOnScreen(total);
        }
        if (op === '/' && secondNum === "0"){
            operate.displayOnScreen(divideByZeroError)
            firstNum = NaN;
        } else {
        total = operate[op](firstNum, secondNum);
        operate.displayOnScreen(total);
        }
    },

    allClear () 
    {
        display.value = '';
        firstNum = '';
        op = '';
        secondNum = '';
        total = '';
        
        
    },

    divideByZero (){
        if (op === '/' &&  secondNum[0] === "0") 
        {
            operate.displayOnScreen(divideByZeroError)
            
        }
    },
}


//Numbers
nums.forEach((button) => {
    
    button.addEventListener('click', () => {

        if (op === '' && firstNum.length <= 8) 
        {
            firstNum += button.value;
            operate.displayOnScreen(firstNum)
            if(firstNum.includes('.') && button.value === '.') button.value = '';
        }
        
        if (op != '' && secondNum.length <= 8) 
        {  
            //Below adds the attribute value back to '.'
            if(!secondNum.includes('.') && button.value === '') button.value = '.';
            secondNum += button.value;
            operate.displayOnScreen(secondNum)
            if(secondNum.includes('.') && button.value === '.') 
            {
                button.value = '';
            }
            else if ( button.value === '')
            {
                button.value = '.';
            }
        
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

        op = operation.value
    });
    
    });


//Equals
equals.addEventListener('click', operate.equalsBtn)


//Clear
clear.addEventListener('click', operate.allClear);
