// Methods ⏬
// function inside object 

// const person = { 
//     firstName: "ADARSH", 
//     age: 18,
//     // Right way to use this operator 
//     // about : function(){ 
//     //     console.log("Hello, My name is", this.firstName, "and my age is", this.age);
//     // }
//     This : function(){ 
//         console.log(this);
//     },
//     about : function(){ 
//         console.log(`Hello, My name is ${this.firstName} and my age is ${this.age}`);
//     } // will execute fine 

//     // we can't do this with using string template to do so it will return error 
//     // about : function(){
//     //     console.log(`Hello, My name is ${firstName} and my age is ${age}`); // Termination .. can be considered as error
//     // }
// }

// // What is this operator ❓❓
// // value of this declared in runtime( when program executes ) not in compile time( when we write )
// // this is an object which calls its parent
// person.This(); // {firstName: 'ADARSH', age: 18, This: ƒ, about: ƒ}
// // more clearly, `This` keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, `this` references the global object.
// // 

// person.about(); // Hello, My name is ADARSH and my age is 18

// now Method is declared outside of object but it is still part of objects 
// function PersonInfo(){ 
//     console.log(`Hello, My name is ${this.firstName} and my age is ${this.age}`);
// }

// const person1 = { 
//     firstName: "ADARSH", 
//     age: 18,
//     about : PersonInfo, 
// } 
// const person2 = { 
//     firstName: "AKACHI", 
//     age: 18,
//     about : PersonInfo, 
// } 
// const person3 = { 
//     firstName: "IICHI", 
//     age: "infinite",
//     about : PersonInfo, 
// } 

// // Reason behind this is so we can say understand this keyword

// person1.about(); // Hello, My name is ADARSH and my age is 18
// person2.about(); // Hello, My name is AKACHI and my age is 18
// person3.about(); // Hello, My name is IICHI and my age is infinite

// return window object which actually is global object of JS
// which consist lots of methods provided by JS
// console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// we also write it as 
// console.log(window); // result will be same 

// myFunc as a method exists in window object
// some properties of myFunc()
// function myFunc() {
//     console.log("Happy Coding!!");
// }
// myFunc(); // Happy Coding!!
// window.myFunc(); // Happy Coding!!
// // It shows that myFunc is object of window object

// function myFunc() { 
//     console.log(this);
// }
// myFunc();
// window.myFunc();
// Result will be same for both 
// Result -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// *but it can create problem for us to avoid this we use "use strict inside" myFunc 
// we can use strict mode either starting of file or inside function

// function myFunc(){
//     "use strict"
//     console.log(this);
// }
// myFunc(); // undefined

// more clearly we can say that myFunc called as default function of window object 

// IMPORTANT ❗❗

// Call() Method ⏬

// With the call() method, we can write a method that can be used on different objects.
// function hello(){
//     console.log("happy Coding!!");
// }
// hello.call(); // happy Coding!!

// about function outside 
// function about(hobby, favmusic){
//     console.log(this.firstName, this.age, hobby, favmusic);
// } 
// const user1 = { 
//     firstName : "Adarsh",
//     age: 18, 

//     // about function inside 
//     // about : function(hobby, favmusic){
//     //     console.log(this.firstName, this.age, hobby, favmusic);
//     // } 
// }
// const user2 = { 
//     firstName : "Athrav",
//     age: 2,
// }

// // for inside about function 
// // user1.about(); // Adarsh 18
// // user1.about.call(); // undefined undefined
// // user1.about.call(user2); // Athrav 2
// // user1.about.call(user2,"playing","babablacksheep"); // Athrav 2 playing babablacksheep

// // about function also can be declared outside object 
// // for outside about function 
// about.call(user1,"Coding","Rasiya"); // Adarsh 18 Coding Rasiya
// about.call(user2,"playing","babablacksheep"); // Athrav 2 playing babablacksheep

// apply() Method ⏬
// instead of sending value arguments sepreately we will send all value argument in a List (list means array) this is the only difference in apply and call
// about.apply(user1,["coding","rasiya-reprise"]); // Adarsh 18 coding rasiya-reprise

// bind() Method ⏬
// about.bind(user2,"playing","BaBaBlackSheep"); // [Empty](nothing will be returned)
// actually bind returns a function which I can use in future. 
// const func = about.bind(user2,"playing","BaBaBlackSheep");
// func(); // Athrav 2 playing BaBaBlackSheep


// const user1 = {
    //     firstName : "AdarsH",
    //     age: "18", 
    //     about : function(){
//         console.log(this.firstName, this.age);
//     }
// }

// // THINGS NOT SHOULD DO here ❌

// // user1.about(); // AdarsH 18
// // const myFunc = user1.about; 
// // myFunc(); // undefined undefined bcz as global object of this is window object here so it returns undefined undefined

// // Line 155 : reference storing first( so binding of this will not happen ) and then fucntion call takes place and as this is global (window) there so return undefined  

// // To avoid this we use bind function
// const myFunc = user1.about.bind(user1); 
// myFunc(); // AdarsH 18


// Arrow Functions Realted ⏬

// const user1 = {
//     firstName : "AdarsH",
//     age: "18", 
//     about : () => {
//         console.log(this.firstName, this.age);
//     }
// }

// user1.about.call(user1); // undefined undefined
// user1.about(); // undefined undefined
// arrow function hasn't its own `this` it takes `this` from surrounding 
// Reason - As it takes `this` from surrounding so window `this` will be used as `this` here 


// arrow function this apne surrounding me 1 level up se lega 

// BONUS GYAN

// const user1 = {
//     firstName : "AdarsH",
//     age: "18", 
//     about : function(){
//         console.log(this.firstName, this.age);
//     }
// }
// const user1 = {
//     firstName : "AdarsH",
//     age: "18", 
//     about(){
//         console.log(this.firstName, this.age);
//     }
// }
// Both are same as about is method of user1 
// user1.about(); // AdarsH 18