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



//Add event listener to all the buttons with a class of nums.
nums.forEach((button) => {
     
    button.addEventListener('click', () => {
        
        displayValues += button.textContent; //Adds number presses to the displayValues string.
        a = display.textContent = displayValues; //when number button is pressed it shows that number in the '.display' div.
        // display.textContent = input;
    });
})




//Event listners for operator buttons
let operations = function () {
    
    operators.forEach((operation) => {
        
        operation.addEventListener('click', () => {
            
            display.textContent = a;
            console.log(a)
            let subTotal = operate( displayValues ); //Call function to reduce a and b to its sub total.
            display.textContent =  subTotal; // Display sub total.
            op  = operation.textContent; // Registers operator from elements text Content.
            displayValues += op; // Pushes operator to displayValues variable.
            
        })
        
    })
}
operations();



const equalsBtn = function (){
equals.addEventListener('click', () => {
    
    finalTotal = operate( displayValues );
    console.log(finalTotal);
    
    displayValues += finalTotal;
    display.textContent = finalTotal;
    
})
}
equalsBtn();


clear.addEventListener('click', () => {
    display.textContent = '';
    firstNumber = '';
    op = '';
    secondNumber = '';
})




//Add function
const add = function ( [a,b] ) 
{
    return displayValues = [a,b].reduce((total, current) => total + current, 0)
}

//Subtract function
const subtract = function ( [a,b] ) 
{
    return displayValues = [a,b].reduce((total, current) => total - current )
}

//Multiply function 
const multiply = function ( [a, b] ) 
{
    return displayValues = [a,b].reduce((total, current) => current * total, 1 )
}

//Divide function 
const divide = function( [a, b] ) 
{
    return displayValues = [a,b].reduce((total, current) => total / current)
}



//Operate function
const operate = function ( equation ) {

    let str = equation.split(" ")
    console.log(str)
    a = +str[0];
    op = str[1];
    b = +str[2];
    console.log(`a ${a}`)
    console.log(`op ${op}`)
    console.log(`b ${b}`)
    
    if (op === "+") return add ([a,b]);
    if (op === "-") return subtract([a,b]); 
    if (op === "*") return multiply([a,b]); 
    if (op === "/") return divide([a,b]); 
    
    
}






