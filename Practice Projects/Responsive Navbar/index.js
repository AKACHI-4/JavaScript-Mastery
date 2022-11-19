const navToggle = document.querySelector(".toggle"); 
const links = document.querySelector(".links"); 

navToggle.addEventListener("click", function() { 
    links.classList.toggle("show-links");
});

