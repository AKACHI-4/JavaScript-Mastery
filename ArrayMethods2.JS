// sort method 
// ASCAII value

// (	40	left parenthesis
// )	41	right parenthesis
// *	42	asterisk
// +	43	plus sign
// ,	44	comma
// -	45	hyphen
// .	46	period
// /	47	slash

// 0	48	digit 0
// 1	49	digit 1
// 2	50	digit 2
// 3	51	digit 3
// 4	52	digit 4
// 5	53	digit 5
// 6	54	digit 6
// 7	55	digit 7
// 8	56	digit 8
// 9	57	digit 9

// :	58	colon
// ;	59	semicolon
// <	60	less-than
// =	61	equals-to
// >	62	greater-than
// ?	63	question mark
// @	64	at sign

// A	65	uppercase A
// B	66	uppercase B
// C	67	uppercase C
// D	68	uppercase D
// E	69	uppercase E
// F	70	uppercase F
// G	71	uppercase G
// H	72	uppercase H
// I	73	uppercase I
// J	74	uppercase J
// K	75	uppercase K
// L	76	uppercase L
// M	77	uppercase M
// N	78	uppercase N
// O	79	uppercase O
// P	80	uppercase P
// Q	81	uppercase Q
// R	82	uppercase R
// S	83	uppercase S
// T	84	uppercase T
// U	85	uppercase U
// V	86	uppercase V
// W	87	uppercase W
// X	88	uppercase X
// Y	89	uppercase Y
// Z	90	uppercase Z

// [	91	left square bracket
// \	92	backslash
// ]	93	right square bracket
// ^	94	caret
// _	95	underscore
// `	96	grave accent

// a	97	lowercase a
// b	98	lowercase b
// c	99	lowercase c
// d	100	lowercase d
// e	101	lowercase e
// f	102	lowercase f
// g	103	lowercase g
// h	104	lowercase h
// i	105	lowercase i
// j	106	lowercase j
// k	107	lowercase k
// l	108	lowercase l
// m	109	lowercase m
// n	110	lowercase n
// o	111	lowercase o
// p	112	lowercase p
// q	113	lowercase q
// r	114	lowercase r
// s	115	lowercase s
// t	116	lowercase t
// u	117	lowercase u
// v	118	lowercase v
// w	119	lowercase w
// x	120	lowercase x
// y	121	lowercase y
// z	122	lowercase z

// sort method ⏬

// string sorting
// const userNames = ['Max Park','Feliks Zemdegs','cubelelo','Tingman','erricto'];
// userNames.sort(); // sort actual array means array is changed now 
// console.log(userNames); // (5) ['Feliks Zemdegs', 'Max Part', 'Tingman', 'cubelelo', 'erricto']
// work fine for same type-style string (either uppercase of lowercase) but it will not work for random type-style words and produce weird answer

// 6,3,2,8,1
// const numbers = [5,3,1200,400,3000];
// numbers.sort(); // sort actual array means array is changed now 
// console.log(numbers); // [1200, 3, 3000, 400, 5]
 
// why this weird answer ? 
// because when we sort in JS so it doesn't sort values as numbers but it takes values as string and then sort them, ans string sorted with the help of ASCII CODE
// Actual array - [5,3,1200,400,3000]
// while process of sorting - ["5","3","1200","400","3000"]
// As per ASCII code - [53, 51, 49, 52, 51] now JS solve it
// In case of 2 or more digit number JS compiler only take ASCII of first digit and sort according them that's why we are getting weird answer But this method will efficiently work for single digit number  
// [49, 51, 51, 52, 53] according to JS now our array is sorted 
// [1200, 3, 3000, 400, 5]

// Conclusion -> sort method sort values as per their ASCII codes

// Solution: 
// we can use callback into sort method so values will sort by our choice 
// const numbers = [5,400,1200,9,3000];
// numbers.sort((a,b)=>{
//     return a-b; 
// }); // ascending sort -> (5) [5, 9, 400, 1200, 3000]
// numbers.sort((a,b)=>a-b); // concise writing pattern
// numbers.sort((a,b)=>{
//     return b-a; 
// }); // descending sort -> (5) [3000, 1200, 400, 9, 5]
// console.log(numbers); 

// How callback works? 

// a=1200, b=410 -> a-b = 790
// a-b -> positive(greater than 0)
// so a and b swapped their position in array -> 410,1200

// a=200, b=410 -> a-b = -210
// if a-b -> negative
// so a and b will not swap their position in array -> 200,410

// Flipkart Website: Price -> i. LowToHigh ii. HighToLow
// const products = [
//     {productID: 1, productName: "p1", price: 569},
//     {productID: 2, productName: "p1", price: 150},
//     {productID: 3, productName: "p1", price: 74},
//     {productID: 4, productName: "p1", price: 1254},
//     {productID: 5, productName: "p1", price: 789},
// ]
 
// and they have to sort in LowToHigh
// products.sort(({price:a},{price:b})=>{
//     return a-b;
// });
// products.sort((a,b)=>{
//     return a.price-b.price;
// });

// but here it is changing complete product-list but I don't want to do so 
// const ProductLowToHigh = products.slice(0).sort((a,b)=>{
//     return a.price-b.price;
// });
// now Product-list remain same and stored in a new object in low to high manner
// for(let pro of ProductLowToHigh)
//     console.log(pro); 
// print products as per their price from low to high


// find Method ⏬

// const myArr = ["Hello","cat","dog","lion"];

// call back function
// const Is3Length = (string) => string.length === 3;
// console.log(Is3Length("cat")); // true

// console.log(myArr.find((string) => string.length===3));

// find() method use callback function
// console.log(myArr.find(Is3Length));

// const Users = [
//     {userID: 1, userName: "tingboy"},
//     {userID: 2, userName: "max"},
//     {userID: 3, userName: "feliks"},
//     {userID: 4, userName: "cubic"},
//     {userID: 5, userName: "olar"},
// ]
 
// // out task is to find person having 4 userId

// // const ans = Users.find( ({userID:ID,}) => ID===4);
// // const ans = Users.find( (user) => user.userID===4); 
// console.log(ans);

// every Method ⏬

// const numbers = [2,4,6,8,10];
// goal -> to check that in given array every element is even or not 
// it also use callback function as argument 

// console.log(numbers.every((number)=>number%2===0)); // true
// callback function return true or false according to condition 
// every method is also return true or false

// const products = [
//     {productID: 1, productName: "p1", price: 569},
//     {productID: 2, productName: "p2", price: 150},
//     {productID: 3, productName: "p3", price: 74},
//     {productID: 4, productName: "p4", price: 1254},
//     {productID: 5, productName: "p5", price: 789},
// ]
// goal -> to check that every product's price < 1500

// console.log(products.every(({price:val}) => val<1500));
// console.log(products.every((product) => product.price<700));

// Some Method ⏬

// const numbers = [3,5,11,9]; 
// kya ek bhi number esa hai jo even hai 

// const ans = numbers.some((number)=>number%2===0);
// if any one of the case function is true so it will return true otherwise false
// console.log(ans);

// const products = [
//     {productID: 1, productName: "p1", price: 56900},
//     {productID: 2, productName: "p2", price: 150000},
//     {productID: 3, productName: "p3", price: 74000},
//     {productID: 4, productName: "p4", price: 125400},
//     {productID: 5, productName: "p5", price: 7890},
// ]


// fill method ⏬
// value, start, end

// UseCase - to fill array with same value under specific length array can be either filled or unfilled
// const myArray = new Array(10).fill(-1); 
// console.log(myArray);

// const myArray = [1,2,3,4,5,6,7,8,9]; 
// myArray.fill(0,2,5);
// console.log(myArray);


// Splice method ⏬
// start, delete, insert 

// used to insert and delete a specific length from array 

// const myArray = ['item1','item2','item3','item4','item5'];

// // for delete
// // myArray.splice(1,1);
// // console.log(myArray);

// // On deletion we also can print deleted items in form of an array
// const deleteditems = myArray.splice(1,2);
// console.log("deleted items: ", deleteditems);

// // To insert
// myArray.splice(1,0,'item2','item3');
// console.log(myArray);

// // Insert and delete together/simultaneously
// const deletedItems = myArray.splice(1,2,'inserted item1','inserted item2'); 
// console.log('deleted items: ', deletedItems);
// console.log(myArray);

// Iterables ⏬
// Jispe for of loop laga sakein -> string, array are iterable ex. Array, string are iterable.
// object is not iterable
 
// const firstName = "Adarsh"; 
// for(let char of firstName){
//     console.log(char); 
// } // return all individual character as name sequence

// const items = ['item1','item2','item3','item4']; 
// for(let item of items){ 
//     console.log(item); 
// } // return all element of array items

// const users = {'key1':'value1','key2':'value2'};
// for(let item of users){
//     console.log(item);
// } // error - users is not iterable


// Array Like objects ⏬
// jinke pas length property hoti hai 
// aur jinko hum index se access kar sakte hain 
// ex - string 

// const firstName = "Adarsh"; 
// console.log(firstName.length); 
// console.log(firstName[2]); 
