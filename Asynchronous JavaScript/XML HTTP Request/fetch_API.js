// Fetch 

// what fetch actually does that it will done all the work itself. 

const URL = "https://jsonplaceholder.typicode.com/posts"; 

// fetch() is an in built function in javascript which does all open and send thing itself without doing all such things seperately as we done into the XML Http request and it returns promise
fetch(URL, 
    {
        method: 'POST', // here method is POST so data created 
        // below is data which we want to create
        // JSON.stringify wll convert inner object into JSON
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        // this can be said as meta data which actually are telling about data of the data
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }) 
// const whatisthis = fetch(URL); 
// console.log(whatisthis); // Promise {<pending>}
// as fetch is returning promise so i can use .then() on fetch()
    .then(response =>{ // Let's check what response it gives s
        console.log(response); // Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
        // !!But it is not returning data 
        // exactly data will not appeared now 
        // So how exactly we can access that data
        // we have to use json method on response to take our step further to get data
        // Usually JSON will parse the response and returns a promise
        // console.log(response.json()); // Promise {<pending>}

        // ⚠️ here In case of syntax error {ok} property of response will get false 
        // So I can do further like thiss
        if(response.ok)
            return response.json(); 
        else 
            throw new Error("Something went wrong!!"); // Error: Something went wrong!! at fetch_API.js:27:19   
    })
    .then(data => { 
        console.log(data); // (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] 
        // now I will get the data which I want 
    })
    .catch(error => { 
        console.log("Inside Catch!!"); 
        console.log(error);
    }) // even on error it will not come inside here in .catch()

    /* ⚠️
        Here is a CLICK!! 
        REMEMBER REMEMBER REMEMBER
        fetch() only rejects if there are some network related issue otherwise on syntax alike issue it will not come inseide .catch() actually on these cases .then() will work and just only ok property false there reference is above
    */
