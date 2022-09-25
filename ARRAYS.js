// intro to arrays -> reference type 
// ordered collection of items

// let fruits = ["apple", "mango", "grapes"];
// let obj = {}; // object literal
// console.log(fruits);
// console.log(fruits[1]);
// console.log(fruits[2]);
// let mixed = [1,2,4.4,5,"Adarsh",null,undefined]; 
// console.log(mixed); 
// fruits[1] = "papaya"; 
// console.log(fruits); 

// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));

// fruits.push("guava"); // "guava" got pushed into the Array
// console.log(fruits);
// console.log("popped fruit is",fruits.pop()); // last one get popped
// fruits.pop() -> return last fruit having one extra space in start
// console.log(fruits);
// To add in starting -> unshift
// fruits.unshift("banana"); 
// fruits.unshift("Litchi"); 
// console.log(fruits);
// To remove from starting -> shift
// fruits.shift(); 
// console.log(fruits);

// push pop is fast as compare to shift and unshift 
// because push pop operation performed from the end 
// while shift unshift operation performed from the start
// so we need to shift all the element first into the 
// array and then perform add or remove as per choice

// primitive vs reference data types 
// let num1 = 6; 
// let num2 = num1; 
// console.log("value of num1 is " + num1);
// console.log("value of num2 is " + num2);
// num1++; 
// console.log("After incrementing by 1: "); 
// console.log("value of num1 is " + num1);
// console.log("value of num2 is " + num2);

// referenced type 
// array
// let array1 = ["item1","item2"];
// let array2 = array1;
// console.log("array1: ", array1);
// console.log("array2: ", array2);
// array1.push("item3"); 
// console.log("After push 3 into the array1:- ")
// console.log("array1: ", array1);
// console.log("array2: ", array2);


// clone array
// let arr1 = ["item1","item2"]; 
// way-1
// let arr2 = ["item1","item2"];
// two different values
// way-2
// let arr2 = arr1.slice(0);
// a same new array will be created and assigned to arr2
// way-3
// let arr2 = [].concat(arr1);
// .concat -> as a member function of empty array concatenate value of arr1 into empty array of arr2 
// [] -> empty array in JS  
// new way :-
// Spread operator
// let arr2 = [...arr1]; // value of arr1 get spreaded into arr2 : [...array_name] -> here ... is spread operator 
// Here slice method is fast but spread method is widely used. 
// cloning with concatenation 
// let arr2 = [...arr1].concat("list3","list4","list5");
// let arr2 = [...arr1,"list3","list4","list5"];
// let arr3 = ["list3","list4","list5"];
// let arr2 = [...arr1,...arr3];
// console.log(arr1===arr2); 
// arr2.push("item3");
// console.log(arr1);
// console.log(arr2);


// let fruits = ["apple", "mango", "grapes","banana","litchi"];
// let fruits2 = []; 
// console.log(fruits.length);
// for(i=0;i<fruits.length;i++){
//     fruits2.push(fruits[i].toUpperCase()); 
// }
// console.log(fruits2);

// use const for creating array 

// heap memory -> ["apple","Guava"]

// const fruits = ["apple","Guava"];
// fruits = ["mango","litchi"]; // error as u are changing whole array means address when it is const
// fruits.push("mango"); // easily pushed without error
// console.log(fruits);
// Q. On using const, Is it possible to push element into the fruits array? 
// Ans. yes, bcz address which fruits pointing is not changing it is still same so there will be no error but if you change entire array it will give you error bcz u are trying to change into address
// bonus tip -> most of the developers used const in place of let just to insure that past data will not be get changed whether it is ok to push new data.

// For-of Loop -> widely used bcz easy and meaningful to implement -> give value directly

// const fruits = ["apple", "mango", "grapes","banana","litchi"];
// for(let fruit of fruits){
//     console.log(fruit.toUpperCase());
// }

// for-in Loop -> give index instead of value
// const fruits = ["apple", "mango", "grapes","banana","litchi"];
// let fruits2 = [];
// for(let index in fruits){
//     fruits2.push(fruits[index].toUpperCase());
// }
// console.log(fruits2);

// - Array Destructuring
const myArr = ["val1","val2","val3","val4","val5"]; 
// Normal Way 
// let var1 = myArr[0];
// let var2 = myArr[1];
// console.log("value of myArr[0]:",var1);
// console.log("value of myArr[1]:",var2);

// But there are a shortcut way in JS which is called Array Destructuring
let [v1,,,v4] = myArr;
console.log("value of myArr[0]:",v1);
console.log("value of myArr[3]:",v4);
let [var1,var2,...myNewArr] = myArr; 
// here var1 will assign with myArr[0] and var2 will assign with myArr[1]
console.log("value of myArr[0]:",var1);
console.log("value of myArr[1]:",var2);

console.log(myNewArr);