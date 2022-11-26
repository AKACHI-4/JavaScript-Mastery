// Promise ⚠️

console.log("script start!!");
const bucket = ['coffee','chips','vegetables','salt','rice']; 

const friedricePromise = new Promise((resolve,reject)=>{ 
    if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")){
        resolve("Fried rice"); 
    }else{ 
        reject("Couldn't do it");
    }
}); 

// produce


// consume
// how to consume
// friedricePromise.then(
//     // jab promise resolve hoga
//     (myFriedRice)=>{ 
//         console.log("Lets eat",myFriedRice); 
//     },
//     // jab promise reject hoga 
//     (error)=>{
//         console.log(error); 
//     }
// );

// NO NEED TO ADD TWO CALLBACK FUNCTION 
friedricePromise.then(
    // jab promise resolve hoga
    (myFriedRice)=>{ 
        console.log("Lets eat",myFriedRice); 
    },
).catch((error)=>{ console.log(error); });

// THIS COMPLETE TASK IS ASYNCHRONOUS
// Proof
setTimeout(()=>{ 
    console.log("Hare Krishna"); 
},0)
for(let i=0;i<=100;i++){
    console.log(Math.random(),i);
}

console.log("script end!!");