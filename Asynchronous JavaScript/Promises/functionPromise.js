// function returning promise 🔽
// function ricePromise(){ 
//     const bucket = ['coffee','chips','vegetables','salt','rice']; 
//     return new Promise((resolve,reject)=>{ 
//         if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")){
//             resolve("Fried rice"); 
//         }else{ 
//             reject("Couldn't do it");
//         }
//     })
// }

// we use parantheses here after ricePromise as ricePromise is a function not an ordinary value 
// ricePromise().then(
//     // jab promise resolve hoga
//     (myFriedRice)=>{ 
//         console.log("Lets eat",myFriedRice); 
//     },
// ).catch((error)=>{ console.log(error); });


// Promises && SetTimeOut 🔽

// I want to resolve / reject promise after 2 seconds 
// function myPromise(){ 
//     return new Promise((resolve,reject)=>{ 
//         const value = true; 
//         setTimeout(()=>{ 
//             if(value){
//                 resolve(); 
//             }else{ 
//                 reject();
//             }
//         },2000); 
//     })
// }

// myPromise()
//     .then(()=>{console.log("resolved")})
//     .catch(()=>{console.log("rejected")})


// Promise resolve and Promise chaining 🔽

// const myPromise = Promise.resolve(5); 
// myPromise.then(value=>{ 
//     console.log(value); 
// })

// then() - it always returns a promise

function myPromise(){ 
    return new Promise((resolve,reject)=>{ 
        resolve("foo"); 
    })
}
// Promise chaining
myPromise()
    .then(value=>{ 
        console.log(value); 
        value += "bar"; 
        return value; // Internally it will not return a value but return a promise here 
        // means it is returning same as 
        // return Promise.resolve(value);
        // If I will not write return here so by default it will return undefined 
    })
    .then((value)=>{ 
        console.log(value); 
        value += "baaz"; 
        return value; 
    })
    .then(value=>{ 
        console.log(value);   
    })
