// piece(block) of code 

// binary Serach using BinSearch function 

// converted into function expression
// const BinSearch = function(arr,l,r,key){
//     while(l<r){
//         mid = l + (r-l)/2; 

//         if(arr[mid]==key) return mid; 
//         else if(arr[mid]>key) r = mid-1;
//         else l = mid+1; 
//     }
//     return -1; 
// }

// const arr = [1,3,4,5,6,7,8];
// const key = prompt("Enter key value : "); 

// let idx = BinSearch(arr,0,arr.length-1,key);
// console.log(idx); 

// function expression - assign a function into a variable
// const sayhi = function(){
//     console.log("Hey!!");
// }
// sayhi(); // Hey!!
// console.log(typeof sayhi); // function 

// Arrow Functions -> mostly used in REACT
// Remove function key word from syntax and use an arrow ("=>") after small braces or we can say argument block 

// function expression
// const sayhi = function(){
//     console.log("Hey!!");
// }
// it should be closed if not so it will show redeclaration error
// arrow function 
// when function have one parameter so we can remove small braces and directly write parameter while using arrow function
// if function have only single body statement so we can remover curly braces and return from body and cocise function's code 
// const sayhi = () => {
//     console.log("Hey!!");
// }
// sayhi(); // Hey!!
// console.log(typeof sayhi); // function

/* HOISTING */

// hello(); 

// function hello(){
//     console.log("Hello world!!"); 
// } // Hello world!!
// var hello = function(){
//     console.log("Hello world!!"); 
// } // error for all types (var, let and const)
// var hello = () => {
//     console.log("Hello world!!"); 
// } // error for all types (var, let and const)

// console.log(val); // undefined
// var val = "abc";
// console.log(val); // abc

// console.log(val); // error for let and const
// const val = "abc";
// console.log(val); // abc

// function inside function 
// const app = () => { 
//     const myfun = () => {
//         console.log("hello from myfunc");
//     }

//     const sum = (a,b) => {
//         return a + b; 
//     }

//     const mul = (a,b) => { 
//         return a * b; 
//     }

//     console.log("inside app");
//     myfun();
//     console.log(sum(1,2)); 
//     console.log(mul(1,2)); 
// }
// app(); 


// Lexical Scope
function myapp(){
    const myvar = "value1";
    function myfun(){
        const myvar = "value0";
        console.log("inside myfun", myvar); 
        // print value1 when myvar commented or value0 when myvar not commented 
    }
    // const myfunc = function(){}
    // const myfunc2 = () => {}
    console.log(myvar);
    myfun();
}
myapp(); 
