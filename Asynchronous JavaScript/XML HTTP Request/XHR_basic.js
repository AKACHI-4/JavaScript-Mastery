const URL = "https://jsonplaceholder.typicode.com/posts"; 
// Mistakely, If I write write URL wrong so in DevTools network section status code get changed and green signal get red which means we are unable to fetch request from the given URL
// Particular status code shows different responses:-
// Informational responses (100 – 199) - the request was received, continuing process
// Successful responses (200 – 299) -  the request was successfully received, understood, and accepted
// Redirection messages (300 – 399) - further action needs to be taken in order to complete the request
// Client error responses (400 – 499) -  the request contains bad syntax or cannot be fulfilled
// Server error responses (500 – 599) - the server failed to fulfil an apparently valid request

const xhr = new XMLHttpRequest(); 
// console.log(xhr); 

// now I have to configure my Request using xhr object 

// console.log(xhr.readyState); // 0 - UNSET(Client has been created. open() not called yet)

// Step-1 : use OPEN method
// .opne("which type of request","request from where")
xhr.open("GET",URL); // Task will done Asynchronoulsy

// console.log(xhr.readyState); // 1 - OPENED(open() has been called)

// so this thing will done by browser in background

// browser will call this function when ready state of xhr will change
// xhr.onreadystatechange = function(){ 
//     if(xhr.readyState === 4){
//         // console.log(typeof xhr.response); 
//         // As response is JSON but its type is string now I want to convert it in JS Object
//         // To do so we parse the response
        
//         // Conversion of Response into JS object 
//         const response = xhr.response; 
//         const data = JSON.parse(response)
//         console.log(typeof data); // now it is a JS object
        
//         // console.log(xhr.response); 
//     }
//     // console.log(xhr.readyState); 
// } // also Asynchronous as done by browser in background
// readyState :- 
// 2 - HEADERS_RECEIVED(send() has been called, and headers and status are available.)
// 3 - LOADING(Downloading; responseText holds partial data.)
// 4 - DONE(The operation is complete)

xhr.onload = function(){ 
    console.log(xhr.readyState);
    const response = xhr.response; 
    const data = JSON.parse(this.response); 
    console.log(data);
} // 4


xhr.send()


