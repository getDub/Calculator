let numbers = [ 1, 2, 3, 4, 5 ];
let numbers2 = [ 5, 2 ];
let numbers3 = [ 15, 32 ];
let numbers4 = [ 5, 4, 3, 2, 1 ];

//Parts of the calculator operation
let firstNumber;
let operator;
let secondNumber;

//Add function
const add = function ( arr ) {
    return arr.reduce((total, number) => total + number,0);
}

console.log( add( numbers4 ) );

//Subtract function
const subtract = function ( arr ) {
    return arr.reduce((total, currentNo) => total - currentNo);
}

console.log( subtract( numbers4 ) );

//Multiply function 
const multiply = function ( arr ) {
    return arr.reduce((total, currentNo) => total * currentNo, 1);
}

console.log( multiply( numbers4 ) );

//Divide function 
const divide = function( arr ) {
    return arr.reduce((total, currentNo) => total / currentNo);
}

console.log( divide( numbers4 ) );