// Project: Calculator

const display = document.querySelector('.display');
const nums = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');


//Parts of the calculator operation
let displayValues = '';
let a;
let operator = '';
let b;



//Add event listener to all the buttons with a class of nums.
nums.forEach((button) => {
    
    button.addEventListener('click', () => {
        
        
        let input = display.textContent = button.textContent //when number button is pressed it shows that number in the '.display' div.
        displayValues += input; //Adds number presses to the displayValues string.
        display.textContent = displayValues;
        
                
    });
})




//Event listners for operator buttons
operators.forEach((operation) => {
    operation.addEventListener('click', () => {
        
        let subTotal = operate( displayValues ); //Call function to reduce a and b to its sub total.
        display.textContent = subTotal; // Display sub total.
        operator  = operation.textContent; // Registers operator from elements text Content.
    //    console.log(operator)
        displayValues += operator; // Pushes operator to displayValues variable.
        // console.log(displayValues)
        
        
    })
    
})


equals.addEventListener('click', () => {
    
    let finalTotal = operate( displayValues );
    console.log(finalTotal);
    displayValues += finalTotal;
    return display.textContent = finalTotal;
})



clear.addEventListener('click', () => {
    display.textContent = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
})




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





