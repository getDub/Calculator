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
let displayNum;

//Operate object
const operate = {
    
    
    
    "+" ( a,b ) 
    {
        secondNum = [Number(a),Number(b)].reduce((total, current) => total + current, 0);
        // secondNum = Math.round(secondNum * 10000000) / 10000000;
        operate.rounding();
        op = '';
        firstNum = '';
        // return secondNum = secondNum.toString().split('').slice(0,9).join('');
    },

    "-" ( a,b ) 
    {
        secondNum = [Number(a),Number(b)].reduce((total, current) => current - total );
        // secondNum = Math.round(secondNum * 10000000) / 10000000;
        operate.rounding();
        op = '';
        firstNum = '';
        // return secondNum = secondNum.toString().split('').slice(0,9).join('');
    },

    "*" ( a, b ) 
    {
        secondNum = [Number(a),Number(b)].reduce((total, current) => current * total, 1 );
        operate.rounding();
        op = '';
        firstNum = '';
        

    },

    "/" ( a, b ) 
    {
        secondNum = [Number(a),Number(b)].reduce((total, current) => current / total);
        operate.rounding();
        op = '';
        firstNum = '';
       
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
        if (op !== '' && secondNum === '') 
        {
         secondNum += firstNum;
         total = operate[op](firstNum, secondNum);
         operate.displayOnScreen(total);
        }
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
        total = '';
        displayNum = '';
                
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
            operate.displayOnScreen(displayNum) //display sum answer
        }
        secondNum += firstNum;
        firstNum = '';
        if(op !== "") {
            firstNum += secondNum; //pressing op twice
            operate[op](firstNum, secondNum); //trigger sum method
            operate.displayOnScreen(displayNum)
        }
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
