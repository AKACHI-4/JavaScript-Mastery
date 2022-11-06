// loop <-> Iterate Elements

// get multiple elements using getElements by class name ⬇️
const navItems = document.getElementsByTagName("a"); 
console.log(navItems); // HTMLCollection(3) [a, a, a]

// forEach loop can not be used with HTMLCollection we only can use simple for & for of loop here in terms of made change on all elements of collection 
 
// Simple for loop
// for(let i=0;i<navItems.length;i++){
//     const navItem = navItems[i]; 
//     navItem.style.backgroundColor = "#fff"; 
//     navItem.style.color = "blue";
//     navItem.style.fontWeight = "bold";
// }

// for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff"; 
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// What if I have to change from HTMLCollection to Array 

// for each loop
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff"; 
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";    
// }); // Uncaught TypeError: navItems.forEach is not a function

// get multiple items using querySelectorAll ⬇️

// const navItems = document.querySelectorAll(".nav-item")
// console.log(navItems); 