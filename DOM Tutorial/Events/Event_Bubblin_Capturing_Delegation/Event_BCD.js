// Event Bubbling ~ Event Propagation
// Event Capturing
// Event Delegation

console.log("Hare krishna"); 

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// EVENT CAPTURING 👇
// Capturing event -> I am capturing event here by using boolean-true as a third argument of addEventListener
// child.addEventListener("click",()=>{ 
//     console.log("Capture !!! child"); 
// }, true);
// child will go for root and check whether we are capturing there or not if yes so it returns accordingly then child come to 1 level down and same check for capture then process continues ~ Same happens with all other event as well
// parent.addEventListener("click",()=>{ 
//     console.log("Capture !!! parent"); 
// }, true);
// grandparent.addEventListener("click",()=>{ 
//     console.log("Capture !!! grandparent"); 
// }, true);
// Capturing done from root to child

// EVENT BUBBLING 👇
// Un-Capturing event -> here third argument of addEventListener is false by Default 

/* NOTE: same happen in bubbling as in Capturing check for bubble and then come to one level down and other process are same */

// child.addEventListener("click",()=>{ 
//     console.log("bubbled !!! child"); 
// }) // you clicked on child
// parent.addEventListener("click",()=>{ 
//     console.log("bubbled !!! parent"); 
// }) 
// On clicking child -> you clicked on child new-line you clicked on parent
// On clicking parent -> you clicked on parent
// grandparent.addEventListener("click",()=>{ 
//     console.log("bubbled !!! grandparent"); 
// }) 
// On clicking child -> you clicked on child new-line you clicked on parent new-line you clicked on grandparent
// On clicking parent -> you clicked on parent new-line you clicked on grandparent
// On clicking grandparent -> you clicked on grandparent

// This behavioue of JS is called as event bubbling when callback to one event get reason to callback of multiple event as per their relation tree of DOM tree

// Bubbling will done from child to root

// Actually There is a cycle from root to child(current) during capturing and then child(current) to root during bubbling 
// we can understand it by this 
// On clicking child here we get result 👇🏻
/* Hare krishna
Capture !!! grandparent 
Capture !!! parent
Capture !!! child
bubbled !!! child
bubbled !!! parent
bubbled !!! grandparent
*/

// EVENT DELEGATION 👇

grandparent.addEventListener("click",(e)=>{ 
    console.log(e.target);
})
// now on clicking child it will display above text but why because process of event bubbling is occuring here so 
// So on clicking child event it will call for grandParent Parent also 
// But what if I only want for child only 
// Here we use event object's target property 

// There are a project on event delegation you can see it in Todo list in DOM 

