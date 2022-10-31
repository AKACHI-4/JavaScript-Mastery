// 2015 / ES6 : class keyword included 
// class is a collection of data and method which is reusable 

// In JS, classes are fake because internally process is same as we are cureently code

// class CreateUser{
//     // used to declare object of classes 
//     constructor(firstName,lastName,email,age,address){ 
//         console.log('Construtor called');
//         this.firstName = firstName; 
//         this.lastName = lastName; 
//         this.email = email; 
//         this.age = age; 
//         this.address = address;
//     }
    
//     // Methods of Classes
//     about(){
//         return `${this.firstName} is ${this.age} years old.`
//     }
//     is18(){
//         return this.age >= 18;
//     }
//     sing(){
//         return 'dhum tana nana ta';
//     }
// }

// without new keyword we can't envoke class keyword
// without new object we can not create classes in JS
// const user1 = new CreateUser('A','R','A@gmail.com',1,'XA');

// console.log(user1); 
// // CreateUser {firstName: 'A', lastName: 'R', email: 'A@gmail.com', age: 1, address: 'XA'}
// console.log(user1.about()); // A is 1 years old.

// console.log(Object.getPrototypeOf(user1)); // {constructor: ƒ, about: ƒ, is18: ƒ, sing: ƒ}


// Animal Class

// MainClass / base Class / Parent Class
// class Animal { 
//     constructor(name,age){
//         this.name = name; 
//         this.age = age;
//     }

//     eat(){ 
//         return `${this.name} is eating`; 
//     }
//     isSupercute(){ 
//         return this.age <= 1; 
//     }
//     isCute(){
//         return true;
//     }
// }

// const animal1 = new Animal("tom",2);
// console.log(animal1); // Animal {name: 'tom', age: 2}
// console.log(animal1.eat()); // tom is eating
// console.log(animal1.isSupercute()); // false
// console.log(animal1.isCute()); // true

// extends means that Dog class also can use Methods and constructor of Animal Class accordingly

// SubClass / derived Class
// and Sub class makes on extending parent class
// class Dog extends Animal{ 
//     // we also can add new method and constructor here
//     constructor(name,age,speed){
//         // super is parent class or we can say call to base or parent class
//         super(name,age); // it sends name and age property to constructor of parent class / base class
//         this.speed = speed; 
//     }

//     // Method 
//     run(){ 
//         return `${this.name} is running at ${this.speed}.`;
//     }

//     // Same Method ( in terms of Parent class ) in Sub Class ✨
//     eat(){ 
//         return `Modified Eat : ${this.name} is eating.`
//     }

//     // one more thing here prototype of Dog is Animal [[Prototype]] : Animal 
// }

// Object also called as instance in other programming languages 

// MUST MUST 
// JavaScript first search properties or method in Sub class if nothing related is there then it go for base or parent class

// const tommy = new Dog("tommy",3,45); 
// let 45 is running speed of tommy 
// console.log(tommy); // Dog {name: 'tommy', age: 3, speed: 45}
// console.log(tommy.isCute()); // true
// console.log(tommy.run()); // tommy is running at 45.
// console.log(tommy.eat()); // Modified Eat : tommy is eating.


// GETTER AND SETTER ✨

// class Person{
//     // Constructor 
//     constructor(firstName, lastName, age){
//         this.firstName = firstName; 
//         this.lastName = lastName; 
//         this.age = age; 
//     }
//     // Method

//     // now using this get if I call fullname as property so it gives us same result as its method form were giving. 
//     // It is called as Getters
//     get fullname(){ 
//         return `${this.firstName} ${this.lastName}`; 
//     }

//     // setName(firstName, lastName){
//     //     this.firstName = firstName; 
//     //     this.lastName = lastName; 
//     // }


//     set fullname(fullname){ 
//         const [firstName, lastName] = fullname.split(" "); // it splits fullname in firstname and lastname using space between them
//         // result of above line - ["ADARSH", "RAWAT"]
//         this.firstName = firstName; 
//         this.lastName = lastName; 
//     }
// }

// const person1 = new Person("Adarsh","Rawat",18); 
// console.log(person1); // Person {firstName: 'Adarsh', lastName: 'Rawat', age: 18}
// console.log(person1.fullname()); // Adarsh Rawat

// I want to use method fullname as property or without small parenthesis means if I write it as -- Object_name.fullname -- so it returns same as it is returning with small parenthesis

// console.log(person1.fullname); // Adarsh Rawat
// now after applying get their I can't call fullname in Method form 
// console.log(person1.fullname()); // error


// const person1 = new Person("adarsh","rawat",18); 

// console.log(person1.firstName); // adarsh
// console.log(person1.lastName); // rawat

// Way-1
// person1.setName("ADARSH","RAWAT"); // setName Method Called
// Way-2
// person1.firstName = "ADARSH";
// person1.lastName = "RAWAT"; 

// I want to change first and last Name with just doing this 
// person1.fullname = "ADARSH RAWAT"; 
// but how it will possible -- actually it is possible by using set method

// console.log(person1.firstName); // ADARSH
// console.log(person1.lastName); // RAWAT


// STATIC METHODS AND PROPERTIES ✨

// As we can see all Methods are related to object but I also can create such methods which actually related to class directly without accessing any object

class Person{
    // Constructor
    constructor(firstName, lastName, age){
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.age = age; 
    }
    // static Method - These methods are related to class and can directly accessed by class
    static classinfo(){ 
        return `this is person class`;
    }

    // same we have static properties 
    // static properties - accessed by class directly 
    static desc = "I am a static property";
    // Method - all these methods are related to objects and can't directly accessed by class 
    get fullname(){ 
        return `${this.firstName} ${this.lastName}`; 
    }
    set fullname(fullname){ 
        const [firstName, lastName] = fullname.split(" ");
        this.firstName = firstName; 
        this.lastName = lastName; 
    }
    eat(){ 
        return `${this.name} is eating`; 
    }
    isSupercute(){ 
        return this.age <= 1; 
    }
    isCute(){
        return true;
    }
}

const person1 = new Person('Adarsh','Rawat',18); 
// console.log(person1.classinfo()); // error as it is static method and only can accessed by class not objects
console.log(Person.classinfo()); // this is person class
console.log(person1.desc); // undefined
console.log(Person.desc); // I am a static property
