console.log("Hare krishna");

const todoForm = document.querySelector(".form-todo")
const todoInput = document.querySelector(".form-todo input[type='text']")

// todoForm.addEventListener("submit",(e)=>{ 
//     e.preventDefault(); /* VERY IMPORTANT */
//     console.log(todoInput.value); // display inputted value of input field 
//     todoInput.value = ""; // clear value from input field 
// })
// In HTML "Add Todo" have submit type so it can be use to submit form but whenever I submit my form so site get reloaded or page get refreshed and because of that scroll bar get at the top to avoid this we can use 
// preventDefault() -> widely widely used so never forget
// after using this page will not get loaded


/* Now I want that on input something in input field it get added into li items */
const todoList = document.querySelector(".todo-list"); 

todoForm.addEventListener("submit",(e)=>{ 
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newli = document.createElement("li"); 
    const newliinnerHTML = 
    `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`
    newli.innerHTML = newliinnerHTML;
    todoList.append(newli);
    todoInput.value = ""; 
})

// Now we work on done or remove button of listitem by using EVENT DELEGATION
todoList.addEventListener("click",(e)=>{
    // check if user clicked on done
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling; 
        console.log(liSpan);
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        const targetLi = e.target.parentNode.parentNode;
        console.log(targetLi);
        targetLi.remove();
    }

});