const closeBtn = document.querySelector(".close-btn"); 
const toogle = document.getElementById("sidebar-toggle"); 
const sidebar = document.querySelector(".sidebar"); 

toogle.addEventListener("click",function(){ 
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click",function(){ 
    sidebar.classList.remove("show-sidebar");
}); 