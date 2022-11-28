const URL = "https://jsonplaceholder.typicode.com/posts"; 

function sendRequest(method, URL) { 
    return new Promise(function(resolve,reject){ 
        const xhr = new XMLHttpRequest(); 
        xhr.open(method, URL); 
        xhr.onload = () => { 
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response); 
            }else{ 
                reject(new Error("Something went wrong")); 
            }

        }

        xhr.onerror = function(){ 
            reject(new Error("Something went wrong")); 
        }
        
        xhr.send();
    }); 
}

sendRequest("GET",URL)
    .then(response => { 
        const data = JSON.parse(response);
        console.log(data); 
        return data; 
    })
    .then(data=>{ 
        const id = data[3].id; 
        return id; 
    })
    .then(id=>{ 
        const url = `${URL}/${id}`; 
        console.log(url); 
        return sendRequest("GET",url);
    })
    .then(response => { 
        const data2 = JSON.parse(response); 
        console.log(data2); 
    })
    .catch(error => { 
        console.log("something went wrong!!");
    })