// Project: Calculator

const display = document.querySelector('.display');
const nums = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');



//Parts of the calculator operation
let displayValues = '';
let a;
let op = '';
let b;
let finalTotal;
let result;


//Add event listener to all the buttons with a class of nums.
nums.forEach((button) => {
     
    button.addEventListener('click', () => {
         
        if ( op === '') {
            a += button.textContent;
            display.textContent = a;
        }else {
            b += button.textContent;
            display.textContent = b;
        }
             
       
    });
})



//Event listners for operator buttons
let operations = function () {
    
    operators.forEach((operation) => {
        
        operation.addEventListener('click', () => {


            op = operation.textContent;
            display.textContent = op
            // display.textContent = displayValues;
            // finalTotal = operate( displayValues);
            // op  = operation.textContent; 
            // displayValues += operation.textContent; 
            
        })
    })
}
operations();



const equalsBtn = function (){
equals.addEventListener('click', () => {
    
    finalTotal = operate( displayValues );
    display.textContent = finalTotal;

    
    
})
}

equalsBtn();



clear.addEventListener('click', () => {
    display.textContent = '';
    displayValues = '';
    op = '';
    
})




//Add function
const add = function ( [a,b] ) 
{
    return displayValues = ([a,b].reduce((total, current) => total + current, 0)).toString();
}

//Subtract function
const subtract = function ( [a,b] ) 
{
    return displayValues = ([a,b].reduce((total, current) => total - current )).toString();
}

//Multiply function 
const multiply = function ( [a, b] ) 
{
    return displayValues = ([a,b].reduce((total, current) => current * total, 1 )).toString();
}

//Divide function 
const divide = function( [a, b] ) 
{
    return displayValues = ([a,b].reduce((total, current) => total / current)).toString();
}



//Operate function
const operate = function ( equation ) {

    let str = equation.split(" ")

    a = +str[0];
    op = str[1];
    b = +str[2];
        
    if (op === "+") return add ([a,b]);
    if (op === "-") return subtract([a,b]); 
    if (op === "*") return multiply([a,b]); 
    if (op === "/") return divide([a,b]); 
    
    
}
