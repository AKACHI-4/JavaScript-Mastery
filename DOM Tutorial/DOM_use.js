// Change text ⬇️
// text content and innertext

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent); // Manage your task

// mainHeading.textContent = "This is something else"; 
// console.log(mainHeading.textContent); // This is something else
// and this change will get appear into web page

// use of innertext
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent); // Manage your task hello 
// textContent also returning hidden text 
// But what if I don't want hidden text here we use innertext

// const mainHeading = document.getElementById("main-heading"); 
// console.log(mainHeading.innerText); // Manage your task


// Change the style of elements ⬇️

// const mainHeading = document.querySelector("div.headline h2");

// console.log(mainHeading); // <h2 id="main-heading">…</h2>
// console.log(mainHeading.style); // CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
// returns all style which can be applied into that element and Ya style is object itself and I can add any CSS property in style

// mainHeading.style.fontStyle = "italic"; 
// mainHeading.style.textDecoration = "underline"; 


// get and set attributes ⬇️

// const inputElement = document.querySelector(".form-todo input"); 
// console.log(inputElement.getAttribute("type")); // text

// const link = document.querySelector("a"); 
// console.log(link); // <a href>Home</a> -> object

// console.log(link.getAttribute("href")); // #Home
// console.log(link.getAttribute("href").slice(1)); // Home

// // now this href attirbute also can be changed 

// link.setAttribute("href", "https://codprog.com");
// console.log(link.getAttribute("href")); // https://codprog.com

// get multiple elements using getElements by class name ⬇️

// const navItems = document.getElementsByClassName("nav-item"); 
// console.log(navItems); // HTMLCollection(3) [li.nav-item, li.nav-item, li.nav-item]
// // here HTMLCollection is an array-like-object
// // array like object means we can do indexing here but I can't use all array methods. 
// console.log(navItems[0]); // <li class="nav-item">…</li>
// console.log(navItems[1]); // <li class="nav-item">…</li>
// console.log(navItems[2]); // <li class="nav-item">…</li>
// don't confuse all are different

// get multiple items using querySelectorAll ⬇️

// const navItems = document.querySelectorAll(".nav-item")
// console.log(navItems); // NodeList []
// console.log(typeof navItems); // object
// // NodeList is also an array-like object. will discuss deeply later
// console.log(navItems[1]); // <li class="nav-item">…</li>
