// Synchronous programming vs asynchronous programming 
// synchronous programming 

// Example :-
// console.log("script start");
// for(let i=1;i<=10;i++)
//     console.log("inside for loop | Count=", i);
// console.log("script end");
 
// Synchronous :-
// synchronous mtlb jb tk ek kaam khtm ni hoga tb tk dusra suru ni hoga 
// Mtlb saari lines ek dusre k saath sync m h in terms of execution
// `JavaScript` is a `Synchronous` programming language where we have single thread and that executes our code .. So also can be said that `JavaScript` is a `SingleThreaded` Programming language
// So How `Asynchronous` programming is possible in `JavaScript` 

// Pre-requisties - setTimeout function()
// syntax - setTimeout(function, After how long we have to call function(in ms) also can be said as minimum Time delay)

// console.log("script start");
// setTimeout(()=>{ 
//     console.log("inside setTimeOut");
// },1000);
// console.log("script end");

// 2. setTimeOut with 0 seconds
// console.log("script start");
// setTimeout(()=>{ 
//     console.log("inside setTimeOut");
// },0);
// for(let i=0;i<10;i++){  
//     console.log("---");
// }
// console.log("script end");

// This is called Asynchronous JavaScript 

// In return setTimeOut gives us ID 
// But what is this ID??
// The returned `timeoutID` is a positive integer value which identifies the timer created by the call to `setTimeout()`. This value can be passed to `clearTimeout()` to cancel the timeout.
// console.log("script start");
// const ID = setTimeout(()=>{ 
//     console.log("inside setTimeOut");
// },1000);
// console.log("setTimeOut ID is", ID); // Returned id
// console.log("Clearing timeOut"); 
// clearTimeout(ID);
// console.log("script end");