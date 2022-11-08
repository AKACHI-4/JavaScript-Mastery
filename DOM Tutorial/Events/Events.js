// Intro to Events 

{
// work done in a process 
// like user click into a button and some operation get performed
// here pressing the button is an event
// Some other events like - mouse, keyboard event etc. 
// most used event - click event
}

// Click 👇

// I want to make learn more button active means on clicking that button some action will perform 

const btn = document.querySelector(".btn-headline");

// 3 ways to add event 

// way-1
// give it directly in HTML file using onclick attribute which syntax is: 
// onclick = "script code"
// script code is what action will be done after clicking
// But it is not used as it is an old way 

// way-2
// btn.onclick = function(){ 
//     console.log('You Click Me!!');
// } this way also can not be used as I can not assign onclick more than one here 

// way-3 : Best One 
// we have a method --- addEventListener
// function clickMe(){
//     console.log("Hey, you click Me");
// }
// btn.addEventListener("click",clickMe);

// TO do more clear we can use arrow function for eventListener
// btn.addEventListener("click",()=>{
//     console.log("arrow click");
// })

// this keyword 👇

// const btn = document.querySelector(".btn-headline");

// In case of normal function 
// btn.addEventListener("click", function(){
//     console.log("You click me"); // You click me
//     console.log("value of this", this); //value of this <button class="btn btn-headline">Learn more</button>
// })

// In case of arrow function
// btn.addEventListener("click", ()=>{
//     console.log("You click me"); // You click me
//     console.log("value of this", this); //value of this Window {window: Window, self: Window, document: document, name: '', location: Location, …} 
// })
