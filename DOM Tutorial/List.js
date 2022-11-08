// static list vs live list 👇

// querySelectorAll gives us static list ~ NodeList
// while getElementsbySomething gives us live list ~ HTMLCollection

// by querySelectorAll
// const listItems = document.querySelectorAll(".todo-list li")
// console.log(listItems); // NodeList(5) [li, li, li, li, li]

// by getElementsbySomething
// const ul = document.querySelector(".todo-list")
// const listItems = ul.getElementsByTagName("li")

// const li6 = document.createElement("li") 
// li6.textContent = "Item 6"

// const ul = document.querySelector(".todo-list")
// ul.append(li6);

// On using queryselector
// console.log(listItems) // NodeList(5) [li, li, li, li, li]

// On using getElementsby...
// console.log(listItems) // HTMLCollection(6) [li, li, li, li, li, li]

// In web page there will be six li's but NodeList still have only 5 li's because of NodeList is static so changes will not reflect in NodeList
// Now we can see difference clearly that NodeList is staticList while HTML Collection is a liveList

// Mostly querySelector is used instead of HTMLCollection coz it takes less space 


// How to get the dimension of element 👇
// height width 

const sectionTodo = document.querySelector(".section-todo")
const info = sectionTodo.getBoundingClientRect(); // gives us an object which have height width all such dimensional details
console.log(info) // changes as you scroll down or up the page with respect to current window 