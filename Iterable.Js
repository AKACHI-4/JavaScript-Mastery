// Sets ⏬

// it is an iterable
// store data
// sets also have its own methods
// No index-based access 
// Order is not guaranteed 
// unique items only ( no duplicate allowed )

// syntax : 
// const numbers = new Set([1,1,2,4]); // output -> {1,2,4}
// // const numbers = new Set("aabc"); // output -> {a,b,c}
// // const numbers = new Set(); // output -> {size: 0}
// console.log(numbers); // no duplicate allowed or ignore duplicate
// // index base access is not possible 
// // console.log(numbers[2]); // undefined 
// // order can be different it is not guaranteed that order will be same 
// // numbers.add(5); // To insert a new element in numbers 
// console.log(numbers); // {1,2,4,5}
// const items = ['items1','items2','items3']; 
// // numbers.add(items); 
// // numbers.add(items); // ignore this one 
// // console.log(numbers); // {1,2,4,5,Array(3)}
// numbers.add(['item1','item2']);
// numbers.add(['item1','item2']);
// // now it will not ignore any of the one
// // both included into numbers set bcz both array have different memory section sooo
// // To check for presence of particular element in Set 
// numbers.has(['item1','item2']); // return nothing but can used in if condition 
// if(numbers.has(1)){ 
//     console.log("1 is Present");
// }else{ 
//     console.log("1 is not Present");
// }
// // adding elements in set
// numbers.add(5);
// numbers.add(6);
// numbers.add(7);
// numbers.add(8);
// numbers.add(9);
// numbers.add(10);
// numbers.add(11);
// numbers.add(12);
// numbers.add(13);
// // applying for loop on sets as it is an iterable
// for(let number of numbers){
//     console.log(number);
// }
// console.log(numbers); // {1,2,4,5,Array(3),Array(2),Array(2)}

// // when should we use Set -> when we have duplicate values and we want that each value shouldn't appear more than one time 

// const myArray = [1,2,4,5,2,5,4,6]; 
// const newSet = new Set(myArray); 
// newSet length -> 5
// myArray length -> 8 
// console.log(newSet); // Set(5) {1, 2, 4, 5, 6}
// console.log(newSet.length); // undefined we can't find length of newSet other possible way is using for of loop
// console.log(myArray); // (8) [1, 2, 4, 5, 2, 5, 4, 6]

// Map ⏬

// map is an iterable 
// store data in ordered fashion 
// store key-value pair (like object)
// duplcate keys are not allowed like objects
// maps and objects are not completely same 
// Objects can only have string or symbol as key 
// In maps, we can use anything as key like array, number, string

// // object prerequsities 
// // object literals 
// // IN JavaScript
// // key -> string
// // key -> symbol 
// const person = {
//     firstName : "Adarsh", 
//     age : 7,
//     1 : "one",
// }
// // all keys converted into string as per the property of JavaScript 
// console.log(person.firstName); // Adarsh
// console.log(person["firstName"]); // Adarsh
// console.log(person[1]); // 1 converted into '1' and then return corresponding value 
// for(let key in person){
//     console.log(typeof key); 
// } // 3 string

// const person = new Map();
// console.log(person); // Map(0) {size: 0}
// // .set() - To set key-value pair in Map 
// person.set('firstName','Adarsh');
// person.set('age',19);
// person.set(1,'one'); // now key 1 is number nd will not convert into string
// person.set([1,2,3],'onetwothree'); 
// person.set({1:'one'},{2:'two'});
// console.log(person); // Map(2) {'firstName' => 'Adarsh', 'age' => 19}
// console.log(person.firstName); // undefined
// console.log(person['firstName']); // undefined
// // To obtain a particular value from Map by using its key - To Do So we use get() function 
// console.log(person.get('firstName')); // Adarsh
// console.log(person.get('age')); // 19

// applying for of loop in Maps
// for(let key of person){
//     console.log(key); // (2) [ key, value ]
//     console.log(typeof key); // object
//     console.log(Array.isArray(key)); // true
// }

// As it is an Array So we also can destructure it 
// for(let [key,value] of person){
//     console.log(key, value);
// }

// ordered fashion but in Object unordered fashion followed.

// Declaration of Map using Array 
// const person = new Map([['firstName', 'Adarsh'],['age',19],[1,'one']]); 
// console.log(person); // Map(3) {'firstName' => 'Adarsh', 'age' => 19, 1 => 'one'}

// const person1 = {
//     id: 101, 
//     firstName: 'Adarsh'
// }
// const person2 = {
//     id: 102, 
//     firstName: 'Eva'
// }

// // I've store extra information for object but not in person1 somewhere else using map 
// const extraInfo = new Map(); 
// extraInfo.set(person1,{age: 18, gender: "male"});
// extraInfo.set(person2,{age: 7, gender: "female"});

// // console.log(extraInfo); // Map(1) {{…} => {…}}
// // console.log(person1.id); // 101
// // console.log(extraInfo.get(person1)); // {age: 8, gender: 'male'}
// console.log(extraInfo.get(person1).gender); // male
// console.log(extraInfo.get(person2).gender); // female

// Clone using Object assign 

// object stored in heap memory and obj and obj2 have its stored address
// more clearly we can say that obj and obj2 have address of same object

// const obj = {
//     key1 : "value1",
//     key2 : "value2"
// }

// const obj2 = obj;

// console.log (obj); // {key1: 'value1', key2: 'value2'}
// console.log (obj2); // {key1: 'value1', key2: 'value2'}

// obj2.key3 = "value3"; 
// // change will reflect in obj as well as object is same and obj and obj2 have its address stored

// // change in obj2 will reflect in obj
// console.log (obj); // {key1: 'value1', key2: 'value2', key3: 'value3'}
// console.log (obj2); // {key1: 'value1', key2: 'value2', key3: 'value3'}

// But if we want two seprate object or we can say clone of obj in obj2 to do so we use spread operators see below - 

// cloning method-1
// const obj2 = {...obj}; // spreading of obj in obj2 known as cloning
// obj2.key3 = "value3"; 
// // now here changes in obj2 will not reflect in obj as obj2 have clone of obj So..
// console.log(obj); // {key1: 'value1', key2: 'value2'}
// // no change in obj 
// console.log(obj2); // {key1: 'value1', key2: 'value2', key3: 'value3'}

// // cloning method-2
// const obj2 = Object.assign({},obj); // old method but needs to be remembered 
// obj2.key3 = "value3"; 
// // changes will not reflect
// console.log(obj); // {key1: 'value1', key2: 'value2'}
// // no change in obj 
// console.log(obj2); // {key1: 'value1', key2: 'value2', key3: 'value3'}

// Optional Chaining ⏬

// const user = {
//     firstName: "Adarsh", 
//     address: {houseNumber: '1234'}
// }

// console.log(user.firstName); // Adarsh
// console.log(user.address); // {houseNumber: '1234'}
// console.log(user.address.houseNumber); // '1234'

// Currently property is not existing in our object but after few seconds it comes as property of object.... on such cases we use optional chaining
// and to do so we use ?. which display undefined first and in future get change accordingly

// without using ?. 

// const user = {
//     firstName: "Adarsh", 
//     // address: {houseNumber: '1234'}
// }
// console.log(user.firstName); // Adarsh
// console.log(user.address.houseNumber); // error

// with using ?.

// const user = {
//     firstName: "Adarsh", 
//     // address: {houseNumber: '1234'}
// }
// console.log(user.firstName); // Adarsh
// console.log(user.address?.houseNumber); // no error now -> undefined

