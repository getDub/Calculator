// Project: Calculator




const display = document.querySelector('.display');
const nums = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');


//Add event listener to all the buttons with a class of nums.
nums.forEach((button) => {
    
    button.addEventListener('click', () => {
        
        
        let input = display.textContent = button.textContent
        displayValues += input;
                
    });
})




//Event listners for operator buttons
operators.forEach((operation) => {
    operation.addEventListener('click', () => {
        
        console.log(operate( displayValues ));
        operator = display.textContent = operation.textContent;
        displayValues += operator;
        console.log(displayValues)
        
        
    })
    
})



clear.addEventListener('click', () => {
    display.textContent = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
})

//Parts of the calculator operation
let displayValues = '';
let firstNumber = '';
let operator = '';
let secondNumber = '';


//Add function
const add = function ( [a,b] ) {
    
    return displayValues = [a,b].reduce((total, current) => total + current, 0)
    
}

//Subtract function
const subtract = function ( [a, b] ) {
    return displayValues = [a - b].reduce((total, current) => total - current, 0);
}

//Multiply function 
const multiply = function ( a, b ) {
    return a * b;
}

//Divide function 
const divide = function( a, b ) {
    return a / b;
}



//Operate function
const operate = function ( equation ) {

    let str = equation.split(" ")
    console.log(str)
    a = +str[0];
    op = str[1];
    b = +str[2];

if (op === "+") return add ([a,b]);
if (op === "-") return subtract([a,b]); 
if (op === "*") return multiply([a,b]); 
if (op === "/") return divide([a,b]); 


}





