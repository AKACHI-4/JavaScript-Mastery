// ClassList , add and remove and toggle classes

// we will go with one of the section class from html file

// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo); // <section class="section-todo container">…</section>

// ClassList is a property which gives us no. of classese an element tag(sectionTodo) have

// console.log(sectionTodo.classList) // DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']
// returns DOMTokenList

// now I have to add one more class in section todo in JS
// sectionTodo.classList.add("bg-dark")

// Now what if I want to remove a class from section todo 
// sectionTodo.classList.remove("bg-dark");

// To check that particular class exist in tag or not
// console.log(sectionTodo.classList.contains("container")) // true

// Toggle Class 
// sectionTodo.classList.toggle("bg-dark");
// what toggle does that actually if argument class is exist so it get remove if not exist so it get add
// means will toggle for both cases

// const header = document.querySelector(".header")
// console.log(header.classList) // DOMTokenList ['header', value: 'header']
// header.classList.add("bg-dark") 
// console.log(header.classList) // DOMTokenList(2) ['header', 'bg-dark', value: 'header bg-dark']

