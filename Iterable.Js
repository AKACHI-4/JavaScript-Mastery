// Sets ( is iterable )
// store data
// sets also have its own methods
// No index-based access 
// Order is not guaranteed 
// unique items only ( no duplicate allowed )

// syntax : 
const numbers = new Set([1,1,2,4]); // output -> {1,2,4}
// const numbers = new Set("aabc"); // output -> {a,b,c}
// const numbers = new Set(); // output -> {size: 0}
console.log(numbers); // no duplicate allowed or ignore duplicate
// index base access is not possible 
// console.log(numbers[2]); // undefined 
// order can be different it is not guaranteed that order will be same 
// numbers.add(5); // To insert a new element in numbers 
console.log(numbers); // {1,2,4,5}
const items = ['items1','items2','items3']; 
// numbers.add(items); 
// numbers.add(items); // ignore this one 
// console.log(numbers); // {1,2,4,5,Array(3)}
numbers.add(['item1','item2']);
numbers.add(['item1','item2']);
// now it will not ignore one both included into numbers set 
console.log(numbers); // {1,2,4,5,Array(3),Array(2),Array(2)}
