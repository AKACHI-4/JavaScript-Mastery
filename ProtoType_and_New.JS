// JavaScript function === function + object

// function hello(){ 
//     console.log('hello world'); 
// }

// console.log(hello.name); // hello  

// we can add our own properties in function 
// remember hello is function here but I am using it as object

// hello.myOwnProperty = "very unique value"; 
// console.log(hello.myOwnProperty); // very unique value

// name property -> tells function name

// function provides more usefull properties 

// function provides us free space 
/*
    In actual, nothing like free space exist. Here this term is used for understand empty object only
*/

// free space -> object -> prototype

// what is prototype ??
// it is a object or an empty object which is given to us for our use as free space in JS
// or if we want add any key value pair of function so we can add that in prototype

// console.log(hello.prototype);
/* 
    {constructor: ƒ}
        constructor : ƒ hello()
        [[Prototype]] : Object
*/

// we can say constructor for function 

// if(hello.prototype)
//     console.log("prototype is present!!")
// else
//     console.log("prototype is not present!!");

// every functions provide prototype property 

// if hello will object, array and anything else so above expression displays "prototype is not present" into the screen

// hello.prototype.abc = 'abc'
// hello.prototype.xyz = 'xyz'
// hello.prototype.sind = () => {
//     return 'la la laa la la laa'; 
// }

// console.log(hello.prototype); // {abc: 'abc', xyz: 'xyz', sind: ƒ, constructor: ƒ}
// console.log(hello.prototype.sind()); // la la laa la la laaa


// USE OF PROTOTYPE ⏬

// const userMethods = { 
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing : function(){ 
//         return 'dhum tana nana ta'; 
//     }
// }
// function createUser(firstName,lastName,email,age,address){
//     // const user = Object.create(userMethods); // {}
//     const user = Object.create(createUser.prototype); // {}
//     user.firstName = firstName; 
//     user.lastName = lastName; 
//     user.email = email; 
//     user.age = age; 
//     user.address = address; 
//     return user;
// }

// // As every function has prototype so there also should be prototype of createUser function 
// // console.log(createUser.prototype); // {constructor: ƒ}

// // and As prototype is empty space so we can use it to store Methods instead of creating those method in seprate object

// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`
// }; 
// createUser.prototype.is18 = function(){
//     return this.age >= 18;
// };
// createUser.prototype.sing = function(){ 
//     return 'dhum tana nana ta'; 
// };

// // But What exactly its benefits is - 
// // 

// const user1 = createUser('A','R','A@gmail.com',1,'XA');
// const user2 = createUser('B','R','B@gmail.com',2,'XB');
// const user3 = createUser('C','R','C@gmail.com',3,'XC');
// console.log(user1.about()); 
// console.log(user2.sing()); 
// console.log(user3.is18()); 

/* new Keyword */

// function createUser(firstName, age){
//     // this = {} ( done by new keyword )
//     this.firstName = firstName; 
//     this.age = age; 
// }
// createUser.prototype.about = function(){ 
//     console.log(this.firstName, this.age);
// }

// const user1 = new createUser('Adarsh', 18);

// new keyword is doing three thing here - 
/*
    1. empty object ( this = {} )
    2. return this 
    3. proto relation is established by new keyword itself ( new will do the work of this line - "Object.create(object_name)" by himself ) value of proto will be equal to function's prototype
    
*/

// console.log(user1); 
/*
    createUser {firstName: 'Adarsh', age: 18}
        age : 18
        firstName : "Adarsh"
        [[Prototype]] : Object
*/

// user1.about(); // Adarsh 18

// constructor function - as it is construting object for us
// function CreateUser(firstName,lastName,email,age,address){
//     // const user = Object.create(createUser.prototype); // {}
//     this.firstName = firstName; 
//     this.lastName = lastName; 
//     this.email = email; 
//     this.age = age; 
//     this.address = address; 
//     // return this; // as new keyword return itself
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`
// }; 
// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// };
// CreateUser.prototype.sing = function(){ 
//     return 'dhum tana nana ta'; 
// };

// here if we declare these all users using new keyword wo we don't need to declare prototype as proto in createuser function seprately 
// and can accessed by this

// const user1 = new CreateUser('A','R','A@gmail.com',1,'XA');
// const user2 = new CreateUser('B','R','B@gmail.com',2,'XB');
// const user3 = new CreateUser('C','R','C@gmail.com',3,'XC');
// console.log(user1);
// createUser {firstName: 'A', lastName: 'R', email: 'A@gmail.com', age: 1, address: 'XA'}
// console.log(user1.about()); // A is 1 years old.

// There are a convention in JS if we are using new keyword so use function first letter CAPITA

// 

// for(let key in user1)
//     console.log(key); 
// all keys outputed.

// it is bringing all keys means also from its proto but what if we don't want its proto's keys
// to do that we use hasOwnProperty(key_name) method 
// which returns true if key_name is its own property otherwise false

// on using hasOwnProperty() 
// for(let key in user1){
//     if(user1.hasOwnProperty(key))
//         console.log(key);
// }
// only returns keys of user1 not from its prototype


/* MORE ABOUT PROTOTYPE ⏬ */

// let numbers = [1,2,3]; 
// here we can use lots of methods into this array These all methods are actually in its prototype 
// but as we read that prototype is only of functions So why is it so
// prototype --- function 

/*
    Interanlly Array is created as: 
    let numbers = new Array(1,2,3); 
    ( it also can be considered as 2nd method )
    and all array method are in this function -> Array
    That's why we all are able to use it in normal declaration as well
*/
// console.log(numbers); // (3) [1, 2, 3]

// console.log(Array.prototype);
// [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
// console.log(Array.isArray(Array.prototype)); // true


// Proto of numbers can also be seen by this method 
// console.log(Object.getPrototypeOf(numbers));
// [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]

// But why it is like an Array and as we read that prototype is an  object, So why is it so??

// by default we get prototype as object but it changes accordingly its surrounding and data or methods of particular data acceoptor in JS

// function hello() { 
//     console.log('hello'); 
// }
// console.log(hello.prototype); // {constructor: ƒ}
// console.log(Array.isArray(hello.prototype)); // false
// hello.prototype = []; 
// console.log(hello.prototype); // []
// console.log(Array.isArray(hello.prototype)); // true
// means prototype can be changed 

// so here we get that type of prototype in JS is not fixed it can vary

