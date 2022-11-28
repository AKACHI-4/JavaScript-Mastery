// Async Await 

// we can remove chaining means (.then__.then__.then) by using Async Await Syntactically 

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//     .then(response => { 
//         return response.json();     
//     })
//     .then(data=>{ 
//         console.log(data);
//     })
//     // This .then__.then thing can be avoided by creating a function 

// function here
// after appending async into the start of the function make this function special that it will return promises from now
async function getPosts(){ 
    // appending await into the start will make the fetch till it not get solved
    // Just remember `await` means wait till process will not get finished
    const response = await fetch(URL); // This fetch will return promises
    console.log(response); // Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}

    if(response.ok){
        throw new Error("Error Occured!!");
    }
    
    const data = await response.json(); 
    console.log(data); // (100) [{…},...,{…}]
    return data; // even data is object form but as async is there so it will return promise only To avoid this what we can do is -- checkout line 31 
}

// for arrow function async will return after paranthses
// const getPosts = async () => { }

// const returned = getPosts(); 
// console.log(returned); // Promise {...}
 
getPosts()
    .then(myData => { 
        console.log(myData);  // (100) [{…},...,{…}]
    })
    .catch(error=>{ 
        console.log(error);
    })

// This Whole process is going asynchronously 
