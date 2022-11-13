const btn = document.querySelector(".btn"); 
const body = document.body; 
const ColorName = document.querySelector(".ColorName");

let color = ['silver','gray','white','maroon','red','purple','fuchsia','green','lime','olive','yellow','navy','blue','teal','aqua']; 
const n = color.length;

btn.addEventListener("click",()=>{ 
    const randomColor = color[Math.floor(Math.random()*n)]; 
    body.style.backgroundColor = randomColor; 
    ColorName.textContent = randomColor;
})
