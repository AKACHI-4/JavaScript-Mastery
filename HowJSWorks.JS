// Compilation 
// code execution 

// why compilation 

// How javaScript code executes??

// what is global execution context ?
// what is local execution context ?

// closures

// Early error checking & Appropriate variable determination ⏬
{
    // console.log(this); 
    // console.log(window); 
    // console.log(firstName);
    // // var firstName = ."Adarsh"; // error : unexpected token `.` -> This thing is happening because of early error checking 
}

// Global Execution Context ⏬

// Hoisting - pre declaration of variable in global memory as first process during global execution context

// console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// console.log(window); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// console.log(myFunction); // ƒ myFunction(){ .. }
// console.log(fullName); // undefined

// // function declaration  
// // function myFunction(){ 
// //     console.log("This is my Function");
// // }

// var firstName = "Adarsh"; 
// var lastName = "Rawat"; 
// var fullName = firstName + " " + lastName; 
// console.log(fullName); // Adarsh Rawat


// console.log(myFunction); // undefined

// function expression
// var myFunction = function(){ 
//     console.log("This is my Function");
// }

// console.log(myFunction); 
// ƒ (){ 
//     console.log("This is my Function");
// }

// Q. Are let and const are hoisted?? 

// console.log(firstName); // error -> Uncaught ReferenceError: Cannot access 'firstName' before initialization
// let firstName = "AdarsH"; 
// console.log(firstName);

// let lastName = "Rawat"; 
// console.log(lastName); // Rawat

// TDZ - Temporal dead zone

// For better understanding of let and const  

// 1.
// let firstName; 
// console.log(firstName); // undefined

// 2.
// const firstName; // Uncaught SyntaxError: Missing initializer in const declaration
// console.log(firstName); 

// 3.
// let firstName = ""; 
// console.log(firstName); // 
// firstName = "Adarsh";
// console.log(firstName); // Adarsh

// 4. 
// const firstName = ""; 
// console.log(firstName); //  
// firstName = "Adarsh"; 
// console.log(firstName); // Uncaught TypeError: Assignment to constant variable.

// 5.
// console.log(typeof firstName); // ReferenceError
// let firstName; 

// 6.
// console.log(typeof firstName); // undefined

// console.log("Happy Coding"); 
// let firstName = "Adarsh"; 
// let lastName = "Rawat"; 

// // function expression 
// const myFunction = function(){ 
//     let var1 = "First Variable"; 
//     let var2 = "second Variable"; 
//     console.log(var1); 
//     console.log(var2); 
// }

// Function Execution Context ⏬

// let foo = "foo"; 
// console.log(foo); // foo
// function getFullName(firstName, lastName){ 
//     console.log(arguments); // Arguments(2) ['AdarsH', 'Rawat', callee: ƒ, Symbol(Symbol.iterator): ƒ]
//     console.log(arguments.length); // 2
//     let myVar = "var inside func"; 
//     console.log(myVar); // var inside func
//     const fullName = firstName + " " + lastName; 
//     return fullName; 
// }

// const personName = getFullName("AdarsH", "Rawat"); 
// console.log(personName); // AdarsH Rawat


// Lexical Environment, Scope chain 

// const lastName = "Rawat"; 

// const printName = function(){ 
//     const firstName = "Adarsh"; 
//     function myFunction(){ 
//         console.log(firstName); // Adarsh
//         console.log(lastName); // Rawat
//     }
//     myFunction();
// }
// printName(); 

// L.E. - Lexical environment, FEC - Function execution context & GEC - Global Execution context
// Here L.E. of firstName is printName FEC and L.E. of lastName is GEC 

// Intro to Closures ⏬

// closures - function can return functions 

// closure examples  

// 1.
// function outerFunction(){ 
//     function innerFunction(){ 
//         console.log("Happy Coding");
//     }
//     return innerFunction; 
// }
// const ans = outerFunction(); 
// console.log(ans); // ƒ innerFunction(){ .... }
// ans(); // Happy

// 2.
// function printFullName(firstName, lastName){ 
//     function printName(){ 
//         console.log(firstName, lastName);
//     }
//     return printName; 
// }
// const ans = printFullName("Adarsh","Rawat"); 
// ans(); // Adarsh Rawat

// 3. 
// function hello(x){
//     const a = "varA"; 
//     const b = "varB"; 
//     return function(){ 
//         console.log(a,b,x);
//     }
// }
// const ans = hello("arg"); 
// ans(); // varA varB arg

// 4. 
// function myFunc(power){
//     return function(number){
//         return number ** power;
//     }
// }
// const myFunc = power => number => number**power
// const power = myFunc(7);
// const ans = power(3);
// console.log(ans); // 2187

// 5. 
function func(){
    var callCount = 1; 
    return function(){
        console.log("function_callno - ", callCount);  
        callCount++;       
    }
}

const ans = func(); 
ans(); // function_callno -  1
ans(); // function_callno -  2
ans(); // function_callno -  3
