// loop <-> Iterate Elements

// get multiple elements using getElements by class name ⬇️
// let navItems = document.getElementsByTagName("a"); 
// console.log(navItems); // HTMLCollection(3) [a, a, a]

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
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems)); // True
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff"; 
//     navItem.style.color = "blue";
//     navItem.style.fontWeight = "bold";    
// }); // changes can be seen into the webpage

// for each loop
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff"; 
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";    
// }); // Uncaught TypeError: navItems.forEach is not a function

// get multiple items using querySelectorAll ⬇️

// let navItems = document.querySelectorAll("a");
// console.log(navItems); // NodeList(3) [a, a, a]
// here we get a NodeList 
// In a NodeList we can use all iterative methods: Simple for loop, for each loop and for of loop

// Simple for loop
// for(let i=0;i<navItems.length;i++){
//     const navItem = navItems[i]; 
//     navItem.style.backgroundColor = "#fff"; 
//     navItem.style.color = "blue";
//     navItem.style.fontWeight = "bold";
// } // will run perfectly 

// for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff"; 
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// } // will run perfectly 

// for each loop
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff"; 
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";    
// }); // changes can be seen into the webpage

// we also can change NodeList into an array using Array.from() as same as in HTMLCollection


/* innerHTML */
// HTML which is written inside a particular tag can be said as inner HTML of that tag
const headLine = document.querySelector(".headline"); 
// console.log(headLine); // <div class="headline">…</div>
// ... part comes under inner HTML of headline

console.log(headLine.innerHTML);
/* <h2 id="main-heading">Manage your task<span style="display: none;"> hello</span></h2>
<button class="btn btn-headline">Learn more</button> */

headLine.innerHTML = "<h1>Inner HTML changed</h1>"
headLine.innerHTML += "<button class=\"btn\">Learn More</button>"
console.log(headLine.innerHTML); // <h1>Inner HTML changed</h1><button class="btn">Learn More</button>
