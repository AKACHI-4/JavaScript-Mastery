const countEl = document.querySelector(".currCount");
const btns = document.querySelectorAll(".btn"); 

btns.forEach((btn)=>{ 
    btn.addEventListener('click',(e)=>{ 
        const Class = e.target.classList;
        let val = countEl.textContent; 
        if(Class.contains('dec')){
            val--; 
        }else if(Class.contains('inc')){
            val++; 
        }else{
            val = 0; 
        }
        countEl.textContent = val; 
    });
});

