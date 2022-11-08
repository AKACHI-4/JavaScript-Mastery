// Click event on multiple buttons 👇

// const allButtons = document.querySelectorAll(".my-buttons button"); 
// console.log(allButtons); // NodeList(3) [button#one, button#two, button#three]
// allButtons.addEventListener("click", function(){ 
//     console.log("you Click me");
// }); // TypeError: allButton.addEventListener is not a function at Events_Adv.js:5:11

// can use any of the loop

// for of loop
// for(let button of allButtons){
//     button.addEventListener("click", function(){ 
//         console.log(this); // button tag 
//         console.dir(this); // button#ID_Name
//         console.log(this.textContent); // text content of each button
//     })
// }

// same for simple for loop 

// for each loop 
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){ 
//         console.log(this.textContent); 
//     })
// })


// EVENT OBJECT 👇

// const firstButton = document.querySelector("#one"); 
// #101
// firstButton.addEventListener("click", function(eventObject){ 
    //     console.log(eventObject); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    // })
    
    // when I add eventListener in any of the event so browser Process ( JS engine + Some extra features )
    // we have a JS engine --- executes code line by line 
    // browser --- JS enginer + WebApi 
    
    // jab browser ko pta chla ki user ne event perform kia jo hum listen kar rhe hai to browser(actually webApi's of browser) do kaam krega 
    // 1.) callback function JS engine ko dega 
    // 2.) callback function ke sath browser(actually webApi's of browser) jo event hua h uski information bhi dega 
    
    // Talking about point-2 -> information will provided to us in the form of object and we can recieve it as a argument during eventListenter -- see #101
    // This eventObject is created by browser itself 
    
    // so Browser gives us an event object and we can access it in different way
// In this object we have two very important property 1.) currentTarget -> In which event we attached eventListener 2.) Target -> Who triggers my event

// const allButtons = document.querySelectorAll(".my-buttons button"); 

// for(let button of allButtons){
//     button.addEventListener("click",(e)=>{ 
//         console.log(e.currentTarget);
//         // console.log(e.target);
//     })
// }

// EVENTS Behind The Scene 👇

// console.log("Script Start!!")

// const allButtons = document.querySelectorAll(".my-buttons button")

// allButtons.forEach((button)=>{ 
//     button.addEventListener("click",(e)=>{
//         // I want that callback function take some time then process further
//         let num = 0; 
//         for(let i = 0; i<= 100000000; i++){
//             num += i;
//         }
//         console.log(e.currentTarget.textContent, num);
//     })
// })
// let outerVar = 0; 
// for(let i = 0; i<= 100000000; i++){
//     outerVar += i;
// }

// Just for a bit learn we add some loops to increase time of process 
// actual motive is to know how event calls are going on in backend 
// So, Let's learn -- provided in NOTES

// console.log("value of outer variable is ", outerVar);
// console.log("Script end!!")