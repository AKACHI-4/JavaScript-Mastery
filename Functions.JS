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
// const myvar = "value1";
// function myapp(){
//     const myvar = "value2";
//     function myfun(){
//         const myvar = "value3";
//         const myfun1 = () => {
//             console.log("inside myfun2 ", myvar);
//         }
//         console.log("inside myfun", myvar); 
//         // print value1 when myvar commented or value0 when myvar not commented 
//     }
//     // const myfunc = function(){}
//     // const myfunc2 = () => {}
//     console.log(myvar);
//     myfun();
// }
// myapp(); 



// Block Scope vs function Scope

// let and const are block scope 
// var is function scope

// {
//     let firstName = "Adarsh";
// }
// console.log(firstName); // error

// { 
//     let firstName = "AKACHI"; 
//     console.log(firstName); // AKACHI; 
// }

// {
//     let firstName = "GOOD"; 
//     console.log(firstName); // GOOD; 
// }
// In case of const type, Results will be same 
// different scope different values 

// {
//     var firstName = "Adarsh";
// }
// console.log(firstName); // Adarsh

// { 
//     var firstName = "AKACHI"; 
//     console.log(firstName); // AKACHI; 
// }

// {
//     var firstName = "GOOD"; 
//     console.log(firstName); // GOOD; 
// }

// Default Parameters 

// function addtwo(a,b){
//     return a+b;
// }


// const ans = addtwo(4); 
// console.log(ans); // NaN because b is undefined there 

// if I want that default value of b should be 1 SOO

// // way-1
// function addtwo(a,b){
//     if(typeof b==="undefined")
//         b = 0;
//     return a+b;
// }
// const ans = addtwo(4); 
// console.log(ans); 4

// way-2 : using default parameters 
// function addtwo(a,b=0){
//     return a+b
// }
// const ans = addtwo(5); 
// console.log(ans); 5


// Rest Parameters 
// function myfunc(a,b,...c){
//     console.log(`a is ${a}\nb is ${b}\nc is`, c); 
// }

// myfunc(3,4,5,6,7,8,9,1);

// function addall(...numbers){
//     let ans = 0; 
//     for(let val of numbers){
//         console.log(val); // val 
//         ans += val; 
//     }
//     return ans;
// }

// console.log(addall(1,2,3,4,5,6,7)); // 28

// param destructuring 

// used with object
// widely used in REACT JS

// const person = {
//     firstName: "Adarsh",
//     gender: "male",
// }

// function printdetails({firstName,gender,age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age); // undefined
// }

// printdetails(person);

// Call-back Functions

// myfunc2 = () => { 
//     console.log("Happy Coding!!");
// }
// myfunc2 = function() { 
//     console.log("Happy Coding!!");
// }
// function myfunc2() { 
//     console.log("Happy Coding!!");
// }

// function myfunc1(a){
//     console.log(a); // returns full myfunc2 function as an output 
// }

// function myfunc1(callback){
//     callback(); // Happy Coding!!
// }
// after taking myfunc2 function as an argument and call it inside myfunc1 function so it generally called as callback function and decalred as same 
// myfunc1(myfunc2); 


// func2 = (name) => { 
//     console.log(`My name is ${name}`);
// }
// func1 = (callback) => { 
//     console.log("Hola people");
//     callback("Adarsh"); 
//     console.log("Happy to have you here!!");
// }
// func1(func2);

// function returning function 

// function myfunc(){ 
//     function func2(){ 
//         return "HOLA";
//     }
//     return func2;
// // }
// function myfunc(){ 
//     return function(){ 
//         return "HOLA everyone";
//     };
// }
// fun = myfunc();
// console.log(fun); // display full func2 function 
// fun(); // HOLA if console.log in func2 
// console.log(fun()); // HOLA if func2 is returning something

// if a function taking function as input working on the inputted function and returning a function so these type of function is called higher order function