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
