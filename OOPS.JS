// Hot Topics of OOPS here: proto, prototype, class ....

// const user = {
//     firstName : "AdarsH",
//     lastName : "Rawat",
//     email : "Adarshrawat8304@gmail.com",
//     age: 18, 
//     address: "House Number, Colony, pincode, state", 
//     about: function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }

// If I want more no. of users having same details so it will be tidious task to create seprate object for each user 
// To resolve this we create a function which asks for data values and will return a object
/* function (
1. function creates object
2. add key value pair
3. will return object
) */

// As a solve of Limitations 
// const userMethods = { 
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }

// function createUser(firstName,lastName,email,age,address){
//     const user = {}; 
//     user.firstName = firstName; 
//     user.lastName = lastName; 
//     user.email = email; 
//     user.age = age; 
//     user.address = address; 

//     // Limitaitions keys: 
//     // user.about = function(){
//     //     return `${this.firstName} is ${this.age} years old.`
//     // },
//     // user.is18 = function(){
//     //     return this.age >= 18;
//     // }

//     // Limitations solve:
//     user.about = userMethods.about; 
//     user.is18 = userMethods.is18; 
//     // here I am coding reference or address of both methods not there real copy 
//     // means when it executes JS will go to its address and then call the Method

//     return user;
// }

// now we create object using createUser function 

// const user1 = createUser('Adarsh','Rawat','AdarshRawat8304@gmail.com',18,'Dehradun');
// const user2 = createUser('Akachi','Uchicha','AdarshRawat8304@gmail.com',20,'japan');
// const user3 = createUser('IICHI','PC','AdarshRawat8304@gmail.com','infinite','Dehradun');

// console.log(user1); 
// {firstName: 'Adarsh', lastName: 'Rawat', email: 'AdarshRawat8304@gmail.com', age: 18, address: 'Dehradun', …}

// console.log(user1.about()); // Adarsh is 18 years old.
// console.log(user1.is18()); // true


// Limitations here -
/*  
    For each new user seprate method will create which means if we create millions of new user so millions of methods will create and fill into the memory 

    But if we see closly to the method so we will get that methods are working same for each user object so it means we need only one copy of method not millions of
*/
/*
    To resolve this problem we store methods seprately in an object in memory so it will not get mulipilied in millions
    ans store only there referecne in main createUser function 
*/

// console.log(user1.about()); // Adarsh is 18 years old.
// console.log(user2.about()); // Akachi is 20 years old.

// But some new problem is still there 

// Let's discuss about that
// If no. of methods in userMethods will increase ( let millions of methods ) so no. of  reference in createUser function will also get increase which can cause typo in references
/*  To Solve this -   


*/

// Basic but important 🔽 
{
    const obj1 = { 
        key1 : 'value1', 
        key2 : 'value2'
    }

    // const obj2 = { 
    //     key3 : 'value3',
    // }

    // new ( for me ) to create empty object in JS
    const obj2  = Object.create(obj1);
    // here, obj1 is declared as a proto of obj2
    // also called as proto-chaining 

    console.log(obj2); // {}
    obj2.key3 = 'value3'; 

    // but it seems 

    // As we try to access key1 in obj2 so it will through undefined 
    // console.log(obj2.key1); // undefined
    // But what if I want that JS check key in obj1 if key is not in obj2
    // To do so we have to create obj2 using obj1 after do this JS first check in obj2 then it will check for key in obj1 

    // Syntax - Object.create(object_name)

    console.log(obj2.key2); // value2

    // How this is happening?
    console.log(obj2); 
    /*
        {key3: 'value3'}
            key3 : "value3"
            [[Prototype]] : Object
    */
    // if we closly see here so we get that "[[Prototype]] : Object"(will called as proto) has written 
    // proto can be considered as object inside object means if any key is not present in current object so JS will go with its proto and search there. 
    // and to creakte prototype we have to take help from Object.create(object_name)

    // Official ecmascript documentataion
    // __proto__, [[prototype]] -> both are same

    console.log(obj2.__proto__); // {key1: 'value1', key2: 'value2'}
    // which means obj1 is proto of obj2

    // dunder proto -> object_name.__proto__
}

// AGAIN 🔽

// const user = {
//     firstName : "AdarsH",
//     lastName : "Rawat",
//     email : "Adarshrawat8304@gmail.com",
//     age: 18, 
//     address: "House Number, Colony, pincode, state", 
//     about: function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }

const userMethods = { 
    about : function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){ 
        return 'dhum tana nana ta'; 
    }
}

function createUser(firstName,lastName,email,age,address){
    const user = Object.create(userMethods); 
    // here proto of user is userMethods or we can say proto is reference of userMethods 
    // proto is creating a bond between object and proto object also can be considered as chaining
    user.firstName = firstName; 
    user.lastName = lastName; 
    user.email = email; 
    user.age = age; 
    user.address = address; 
    return user;
}

const user1 = createUser('Adarsh','Rawat','AdarshRawat8304@gmail.com',18,'Dehradun');
const user2 = createUser('Akachi','Uchicha','AdarshRawat8304@gmail.com',20,'japan');
const user3 = createUser('IICHI','PC','AdarshRawat8304@gmail.com','infinite','Dehradun');

console.log(user1.about()); 
console.log(user2.is18()); 
console.log(user3.sing()); 