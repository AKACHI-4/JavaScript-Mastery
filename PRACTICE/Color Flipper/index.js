const btn = document.querySelector(".btn"); 
const body = document.body; 
const ColorName = document.querySelector(".ColorName");

function colorGenreator(){ 
    const red = Math.floor(Math.random()*256); 
    const blue = Math.floor(Math.random()*256); 
    const green = Math.floor(Math.random()*256); 
    return `rgb(${red},${blue},${green})`; 
}; 

btn.addEventListener("click",()=>{ 
    const randomColor = colorGenreator(); 
    console.log(randomColor);
    body.style.backgroundColor = randomColor; 
    ColorName.textContent = randomColor;
})
