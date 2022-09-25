"use strict";

// hello world
// console.log("Happy Coding!!");

// Intro to variable
// var firstname = "Adarsh";
// console.log(firstname);
// firstname = "ADARSH"
// console.log(firstname);

// var value1 = 5; 
// console.log(value1 ** 3);

// var first_name = "Harshit"; // snake case writing
// var firstName = "Ram"; // Camel case writing

// convention
// start with small letter and use camel case

// let keyword 
// decalre varibale using let keyword

// let firstName = "Adarsh"; 
// firstName = "Akachi";
// console.log(firstName);

// advantage above var keyword -> block scope or function scope 

// declare constants

// const pi = 3.14;
// unchagable further ( pi = 3.5 -> will show error ) 
// console.log(pi);

// String indexing 

// let firstName = "Adarsh"; 

// A d a r s h
// 0 1 2 3 4 5

// console.log(firstName[4]); // random index
// console.log(firstName.length); // string length
// console.log(firstName[firstName.length-1]); // last character of string

// Useful string methods 

// trim()
// toUpperCase()
// toLowerCase()
// slice

// let firstName = "    Adarsh    ";
// console.log(firstName.trim()); // trim spaces from string

// let first_name = "adarsh"; 
// console.log(first_name.toUpperCase());
// console.log(first_name.toLowerCase());

// let firstName = first_name.slice(1,4);
// console.log(firstName);
// let firstName = first_name.slice(1,-2);
// console.log(firstName);
// let firstName = first_name.slice(-3);
// console.log(firstName);
// -ve index value considerd from last

// typeof operator 
// data type : primitive
// string -> "Adarsh"
// number -> 1,2,3,5,6
// booleans
// undefined
// null -> object
// BigInt
// Symbol

// let age = 22; 
// let firstName = "Ram";
// console.log(typeof age);
// console.log(typeof firstName);
// console.log(typeof "Adarsh");
// console.log(typeof @); // error

// convert number to string
// let num = 123456;
// console.log(typeof (num + ""));

// // convert string to number
// let mystr = +"123456";
// console.log(typeof mystr)

// let age = 19; 
// age = String(age);
// console.log(typeof age);
// age = Number(age); 
// console.log(typeof age);

// String concatenation 
// let str1 = "Adarsh"; 
// let str2 = "Rawat";
// let fullName = str1 + " " + str2; 
// console.log(fullName);

// let str1 = +"78"; 
// let str2 = +"89";
// let fullName = str1 + str2; 
// console.log(fullName);


/* TEMPLATE STRING */

// let age = 24; 
// let firstName = "Adarsh rawat";

// Tidious Task :- 
// "Hello everyone, my name is adarsh rawat"; 
// let aboutMe = "hello everyone, my name is " + firstName; 

// Let's make it easy 
// let aboutMe = `hello everyone, my name is ${firstName} and my age is ${age}`;

// console.log(aboutMe);

// let firstName; 
// console.log(typeof firstName); // undefined; 
// firstName = "Adarsh"; 
// console.log(typeof firstName, firstName);

// const firstName; 
// console.log(typeof firstName); // error: 'const' declarations must be initialized 

// let myVar = null; // null means nothing
// console.log(myVar); 
// myVar = "AKACHI"; 
// console.log(typeof myVar); 


// console.log(typeof null); // object
// bug error in JS 
// actually a good bug bcoz if they into this so they need to change into numerous number of libraries which is hard task so they (TC39) leave it as it is 

// BigInt  
// let myNumber = 123; 
// console.log(myNumber); 
// there are a limit to store no. in JS
// console.log(Number.MAX_SAFE_INTEGER); // shows limit 

// but if i want to store no. having large value than this limit so then we use BigInt

// let myNum = BigInt(9007199254740991123456578987894565);
// console.log(myNum);

// let num1 = BigInt(12); // way 1 
// let num2 = 123n; // way 2
// console.log(num1); 
// console.log(num2); 
// console.log(num1 + num2);

// we cann't mix BigInt with other data type on do so it shows explicit conversion error
// perform operation between same type means BigInt operation BigInt

// Boolean and comparison operator

// boolean -> true or false
// let num1 = 3, num2 = 4; 
// console.log(num1<num2);

// == or === 
// let num1 = 3, num2 = "3"; 
// console.log(num1==num2); // true

// let num1 = 3, num2 = "3"; 
// console.log(num1===num2); // false

// let num1 = 3, num2 = 3; 
// console.log(num1==num2); // true

// != or !==
// let num1 = 3, num2 = "3"; 
// console.log(num1!=num2); // false

// let num1 = 3, num2 = "4"; 
// console.log(num1!=num2); // true

// let num1 = 3, num2 = "3"; 
// console.log(num1!==num2); // true

// let num1 = 3, num2 = 3; 
// console.log(num1!==num2); // false

// Truthy and Falsy Values 

// false values
// false
// ""
// null
// undefined
// 0


// if else condition 
// let age = 18; 

// if(age>=18){
//     console.log("User can play PUBG"); 
// }else{
//     console.log("User can play Pokemon");
// }

// let num = 4; 
// if(num%2) console.log("odd");
// else console.log("even");


// ternary operator / conditional operator 
// let age = 2; 
// let drink = age >= 5 ? "coffee" : "milk"; 
// console.log(drink);


// `and` `or` operator

// if(12 || null)
//     console.log("atleast one of them are truthy value"); 
// else console.log("both are falsy values"); 

// if(12 && null)
//     console.log("both are falsy values"); 
// else console.log("atleast one of them are truthy value"); 

// Nested-ifelse 

// let winningnum = 19; 
// let usrguess = prompt("Guess a number : ");
// console.log(typeof usrguess, usrguess); // string, 12
// usrguess = +usrguess; 
// console.log(typeof usrguess, usrguess); // number 12

// if(usrguess === winningnum)
//     console.log("Write Guess, User win!!"); 
// else{
//     if(usrguess<winningnum)
//         console.log("Low Guess!!"); 
//     else    
//         console.log("High Guess!!");
// }

// switch case 

// while loop example 

// let total = 0, i = 0; 
// let n = 10; 
// while(i<=n){
//     total += i; 
//     i++; 
// }
// console.log(total); 
// total = (n*(n+1))/2; 
// console.log(total);

// for loop : same

// break or continue keyword : same 

// do while loop : same

