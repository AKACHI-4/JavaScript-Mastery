// // important array method

// // for each
// // map
// // filter
// // reduce

// // const numbers = [1,2,3,4,5,6,7,8,9,10];

// // function mulby2(number, idx){
// //     console.log(`index: ${idx} value*2: ${number*2}`)
// // }

// // for(i=0;i<numbers.length;i++){
// //     mulby2(numbers[i],i);
// // }
// // we can substitute this whole process just by using single foreach member function it will operated as same and take all elements one be one in sequential manner

// // For each method ⏬

// // numbers.forEach(mulby2); // for-each take callback as an input 
// // const num = prompt("which table you want: ");
// // // using anonymous function 
// // numbers.forEach(function(value){
// //     console.log(`${num}*${value} = ${value*num}`)
// // }) 
 
// // const users = [ 
// //     {firstName: "Adarsh", age: 18},
// //     {firstName: "Anita", age: 19},
// //     {firstName: "Akachi", age: 17},
// //     {firstName: "Eva", age: 20},
// // ];

// // users.forEach(({firstName,age})=>{
// //     console.log("Name:", firstName + ", Age:", age);
// // })

// // map method ⏬

// const numbers = [3,4,6,1,8];
// // const square = (number) => {
// //     console.log(number*number); 
// // }
// // numbers.forEach(square);

// // but what if I want to store this all values in another array efficiently 
// // so we use numbers.map() and also we need to take care that function should return value while using map function 

// // I am going to use anonymous function
// // const mapnums = numbers.map(value => {
// //     console.log(value*value);
// // });
// // console.log(mapnums); // (5) [undefined, undefined, undefined, undefined, undefined] while using console.log
// // const mapnums = numbers.map(value => {
// //     return value*value;
// // });
// // console.log(mapnums); // (5) [9, 16, 36, 1, 64] // returning

// const users = [ 
//     {firstName: "Adarsh", age: 18},
//     {firstName: "Anita", age: 19},
//     {firstName: "Akachi", age: 17},
//     {firstName: "Eva", age: 20},
// ];
// const username = users.map(({firstName}) => {
//     return firstName;
// });
// const userage = users.map(({age:i}) => {
//     return i;
// });
// console.log(username);
// console.log(userage);

// filter method ⏬

// const numbers = [1,2,3,5,6,7,8];
// const even = numbers.filter((number) => { 
//     return number%2==0; 
// });
// console.log(even);

// Reduce Method

// const numbers = [1,2,3,4,5];

// aim : To understand reduce we have to do sum of all the numbers in the array

// const sum = numbers.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue; 
// },1);
// we can pass declare intial value of accumulator just write 
// value as 2nd agrument of callback function in reduce call
//  accumulator  currentValue  return 
//       1            2          3
//       3            3          6
//       6            4          10
//       10           5          25
// and finally it returns 25

// so we can say that reduce function returning a reduced value from array which is actually the sum of all array elements as per its functionality 

// console.log(sum);

// const usercart = [
//     {productID: 1, productName: "mobile", price: 15000},
//     {productID: 3, productName: "laptop", price: 43000},
//     {productID: 3, productName: "tv", price: 74000},
//     {productID: 4, productName: "earbuds", price: 1500},
//     {productID: 5, productName: "trousers", price: 500},
// ]

// const totalPrice = usercart.reduce((accumulator,{price:currVal})=>{
//     return accumulator + currVal; 
// },0); // default parameter used here. 

// console.log(totalPrice);