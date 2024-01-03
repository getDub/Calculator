// Project: Calculator

const display = document.querySelector('.display');
const nums = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const back = document.querySelector('.bkSpace');

//Parts of the calculator operation
const divideByZeroError = 'really?';
let firstNum = '';
let op = '';
let secondNum = '';
let total = '';


//Operate object
const operate = {
    
    
    
    "+" ( a,b ) 
    {
        secondNum = [Number(a),Number(b)].reduce((total, current) => total + current, 0);
        secondNum = Math.round(secondNum * 10000000) / 10000000;
        op = '';
        firstNum = '';
        return secondNum.toString().split('').slice(0,9).join('');
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
        // if(display.value.length >= 9) return btnInputs = '';
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
        //Msg displayed when trying to divide by zero.
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

    backspace()
    {
        if (firstNum !== '' && secondNum === '')
        {
            
            let backSp = firstNum.toString().split('').slice(0,-1).join('');
            firstNum = backSp
            operate.displayOnScreen(firstNum);
            op = "";
            // total = '';
        } 
        if (op !== '' && secondNum !== '')
        {
            let backSp2 = secondNum.split('').slice(0,-1).join('');
            secondNum = backSp2
            operate.displayOnScreen(secondNum);
            // total = '';
        }
    },
}


//Numbers
nums.forEach((button) => {
    
    button.addEventListener('click', () => 
    {     
        if(firstNum.includes('.') && button.value === '.')return
        firstNum.length < 9 ? firstNum += button.value : button.value = '';
        operate.displayOnScreen(firstNum);
        
        // if (op === '' || total !== '' && secondNum === '' && firstNum.length <= 8) 
        // {
        // if(!firstNum.includes('.') && button.value === '') button.value = '.';
        //     firstNum += button.value;
        //     operate.displayOnScreen(firstNum)
        //     if (firstNum.includes('.') && button.value === '.') button.value = '';
        // }
        
        // if (op != '' /*&& total === ''*/ && secondNum.length <= 8) 
        // {  
        //     //Below changes the attribute value back to '.'
        //     if(!secondNum.includes('.') && button.value === '') button.value = '.';
        //     secondNum += button.value;
        //     operate.displayOnScreen(secondNum)
        //     if (secondNum.includes('.') && button.value === '.') 
        //     {
        //         button.value = '';
        //     }
        // } 

    });
});


//Operators
operators.forEach((operation) => {
        
    operation.addEventListener('click', () => 
    {
        
        if(secondNum !== '' && firstNum !== '') {
            operate[op](firstNum, secondNum); //trigger sum method
            operate.displayOnScreen(secondNum) //display sum answer
        }
        secondNum += firstNum;
        firstNum = '';
        if(op !== "") firstNum += secondNum; //pressing op twice
        op = operation.value
        // if( secondNum !== '') {
        //     total = operate[op](firstNum, secondNum);
        //     operate.displayOnScreen(total);
        // }

        
        // if (op !== '' && secondNum === '') {
        //     secondNum += firstNum;
        //     total = operate[op](firstNum, secondNum);
        //     operate.displayOnScreen(total);
        // }

    });
    
    });


//Backspace
back.addEventListener('click', operate.backspace)

//Equals
equals.addEventListener('click', operate.equalsBtn)


//Clear
clear.addEventListener('click', operate.allClear);
