// DOM

// document object model 

// 1. overview
// 2. how to use
// 3. deep study

// Human reabable version
// console.log(window.document);
// How JS sees document object
// console.dir(window.document);


// Select a element 
// Lots of methods to select

// 1. 
// select element using get element by ID
// console.log(document.getElementById("main-heading")); // <h2 id="main-heading">Manage your task</h2> 
// console.dir(document.getElementById("main-heading")); // h2#main-heading 
// console.dir(typeof document.getElementById("main-heading")); // object 
// hey its a object Actually what browser does that it makes object of every element and store it into the document object
// So also can be said that document is a object and there are lots of other object inside this document object ~ object in object 


// 2.
// Select element using query selector 
// query selector can work for element, classes etc. 

// query of ID
// const mainheading = document.querySelector("#main-heading"); // query selected as we select class and ids for CSS
// console.log(mainheading); // <h2 id="main-heading">Manage your task</h2>

// query of tag-name
// const header = document.querySelector("header"); 
// console.log(header); // <header>…</header>

// query of class
// const navItem = document.querySelector(".nav-item");
// console.log(navItem); // <li class="nav-item">…</li>
// As there are three nav-item but it is returning only first one. so ya it returns only first nav-item or we can say where it hits first to nav-item class
// but what if I want all of them we can use querySelectorAll() for such cases -> see below 

// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem); // NodeList(3) [li.nav-item, li.nav-item, li.nav-item]

// About NodeList -> It is similar to an array but not an array
