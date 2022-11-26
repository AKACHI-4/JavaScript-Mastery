// we will use promises here to make work efficient and easy
const heading1 = document.querySelector(".heading1"); 
const heading2 = document.querySelector(".heading2"); 
const heading3 = document.querySelector(".heading3"); 
const heading4 = document.querySelector(".heading4"); 
const heading5 = document.querySelector(".heading5"); 
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function changeTxt(element, text, color, time){
    return new Promise((resolve,reject)=>{ 
        setTimeout(()=>{ 
            if(element){
                element.textContent = text; 
                element.style.color = color; 
                resolve();
            }else{
                reject("element not found"); 
            }
        },time);
    }) 
}

changeTxt(heading1,"one","red",1000)
    .then(()=> changeTxt(heading2,"two","purple",1000))
    .then(()=> changeTxt(heading3,"three","green",2000))
    .then(()=> changeTxt(heading4,"four","blue",1000))
    .then(()=> changeTxt(heading5,"five","violet",1000))
    .then(()=> changeTxt(heading6,"six","yellow",1000))
    .then(()=> changeTxt(heading7,"seven","pink",1000))
    .then(()=> changeTxt(heading8,"eight","gray",1000))
    .then(()=> changeTxt(heading9,"nine","cyan",1000))
    .then(()=> changeTxt(heading10,"ten","orange",1000))
    .catch((error)=>{ alert(error) })

// if one of the changeTxt will face reject so it get terminated directly to .catch() 