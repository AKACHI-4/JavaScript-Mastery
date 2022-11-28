const URL = "https://jsonplaceholder.typicode.com/posts"; 
const xhr = new XMLHttpRequest(); 
xhr.open("GET",URL); 
xhr.onload = () => {
    if(xhr.status>=200 && xhr.status<300){
        const data = JSON.parse(xhr.response);
        console.log(data); 
        const id = data[3].id;
        // console.log(id);   
        const xhr2 = new XMLHttpRequest(); 
        const URL2 = `${URL}/${id}`; 
        console.log(URL2);
        xhr2.open("GET",URL2);  
        xhr2.onload = () => { 
            const data2 = JSON.parse(xhr2.response);
            console.log(data2); 
        }
        xhr2.send(); 
        // As we can see here callback hell is using which can make it tidious to understand let's Promisify it.
    }else{ 
        console.log("Something went Wrong"); 
    }
}

// Below one method will run if u get network error
xhr.onerror = () => {
    console.log("Network error");
}

// 
xhr.send()
