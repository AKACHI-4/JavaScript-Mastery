// objects -> reference type 

// arrays are good but not sufficient for real world data
// objects store key value pairs
// objects don't have index

// how to create objects 

// key of objects also called as properties 

// const person = {
//     name:"Harshit",
//     age:20,
//     hobbies: ['coding','singing','exploring']
// }; // object literal
// const person = {
//     "name": "Harshit",
//     "age": 20,
//     "person hobbies": ['coding','singing','exploring']
// }; // object literal
// const person = {
//     `name`:"Harshit",
//     `age`:20,
//     `person hobbies`: ['coding','singing','exploring']
// }; // object literal
// console.log(person); 
// console.log(typeof person); 

// how to access data from objects
// console.log(person[`name`]);
// console.log(person.name);  
// console.log(person.age);  
// console.log(person.hobbies);  

// how to add key value pair to objects
// person.gender = 'male'; 
// console.log(person); 
// person['gender'] = 'male'; 
// console.log(person); 
// console.log(person["person hobbies"]);

// const key = "email"; 
// const person = {
//     "name": "Harshit",
//     "age": 20,
//     "person hobbies": ['coding','singing','exploring']
// }; 

// person[key] = "Adarshrawat@gmail.com"; 
// console.log(person);

// Traversing in Objects
// const person = {
//     "name": "Harshit",
//     "age": 20,
//     "person hobbies": ['coding',' singing',' exploring']
// }; 

// 1. for-in loop
// for(let key in person){
//     // console.log(key,person.key); // gives undefined bcz it check for key (declared in let key) not for actual keys 
//     // console.log(key,person[key]);
//     // console.log(`${key} : ${person[key]}`);
//     // console.log(key,":",person[key]);
// }

// 2. Objects.keys
// console.log(Object.keys(person)); // give all the keys of person object in form of an array
// const val = Array.isArray(Object.keys(person)); // to check that given entity is array of not
// console.log(val); // display whether true or false
// for(let key of Object.keys(person)){
//     console.log(`${key} : ${person[key]}`);
// }

// computed properties 

// const key1 = "objkey1";
// const key2 = "objkey2";

// const val1 = "myval1";
// const val2 = "myval2";

// const obj = { 
//     key1 : val1,
//     key2 : val2
// }
// console.log(obj); // key1 : "myval1", key2 : "myval2"

// const obj = { 
//     [key1] : val1,
//     [key2] : val2
// }   // [key] -> it is called computed properties 
// console.log(obj); // "objkey1" : "myval1", "objkey2" : "myval2"

// const obj = {}; 
// obj[key1] = val1; 
// obj[key2] = val2; 
// console.log(obj); // "objkey1" : "myval1", "objkey2" : "myval2"


// spread operator 
// only iterable types are able to spread other doesn't 

// spread in Objects
const obj1 = { 
    key1 : "val1",
    key2 : "val2",
};
// same property can not come up more than two times counted 1 
// always last value overwrite first one
const obj2 = { 
    key1 : "val11",
    key4 : "val4",
    key5 : "val5",
};

// const newOb = {...obj1, ...obj2};
// console.log(newOb); // { "key1": "val11", "key2": "val2", "key4": "val4", "key5": "val5" }
// console.log(obj1)

// const newOb = {...obj2, ...obj1};
// console.log(newOb); // { "key1": "val1", "key2": "val2", "key4": "val4", "key5": "val5" }

