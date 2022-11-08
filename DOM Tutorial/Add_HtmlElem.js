// Add new HTML element to page 

// innerHTML to add HTML element

// const todolist = document.querySelector(".todo-list")
// console.log(todolist.innerHTML) // newline + space ... <li>todo 1</li>
// will change completely
// todolist.innerHTML = "<li>New TODO</li>"
// But what if I want to add something in previous one
// todolist.innerHTML += "<li>Todo 2</li>"
// todolist.innerHTML += "<li>Todo 3</li>"


// when you should use it, when you should not

// we should not use this innerHTML method bcoz of the performance issue 

// How and what performance issue?? -> bcoz every time here when we were adding some new list item browser renders older one as well and as much element will get added one by one browser have to be render all of them one by one which makes performance down...
// so we should not use innerHTML

// now when we have to use it 
// we can use when we have to change complete inner HTML in this case older one get removed and get not in render and new one will be there as replacement of older one

// Some better method to add new element 

// document.createElement()
// append
// prepend
// remove

// const newTodoItem = document.createElement("li"); 
// console.log(newTodoItem) // <li></li>

// way-1
// const newTodoItemText = document.createTextNode("Todo 2")
// newTodoItem.appendChild(newTodoItemText); 

// way-2
// newTodoItem.textContent = "Todo 2"

// console.log(newTodoItem) // <li>Todo 2</li>

// can be seen in console but not in web page to seen it in web page we will only use append and in corresponded tag

// const todoList = document.querySelector(".todo-list")
// todoList.append(newTodoItem) // can be seen in web page 
// // appendChild also can be used as it works same In internet explorer appendChild is used not append 
// console.log(todoList) // <ul class="todo-list">…</ul>

// todoList.prepend(newTodoItem) // add in starting

// now when I have to remove one
// const todo1 = document.querySelector('.todo-list li')
// todo1.remove(); 

// console.log(todo1) // <li>todo 1</li>


// More insertion methods - before, after

// before

// const newTodoItem = document.createElement("li")
// newTodoItem.textContent = "Todo 2"

// const todoList = document.querySelector(".todo-list")
// todoList.before(newTodoItem)

// // Todo 2 can be seen in web page but without styling why not styling because it adds before ul tag

// todoList.after(newTodoItem) // get add after ul tag

// insert Adjacent Element 🔽

// elem.insertAdjacentHTML(where, html)

// beforebegin; 
// afterbegin; 
// afterend; 

// const todoList = document.querySelector(".todo-list")
// here we don't need to create html element we can directly insert HTML 
// beforeend -> just before end 
// todoList.insertAdjacentHTML("beforeend", "<li>Todo 2</li>")
// afterbegin -> just after begin
// todoList.insertAdjacentHTML("afterbegin", "<li>Todo 2</li>")
// afterbegin -> just before begin
// todoList.insertAdjacentHTML("beforebegin", "<li>Todo 2</li>")
// afterbegin -> just after end
// todoList.insertAdjacentHTML("afterend", "<li>Todo 2</li>")

// bonus tip - avoid to use it as we are directly writing HTML here so it is tidious to select here so use before after instead of this

// Bonus Topic 🔽

// Clone Nodes ⬇️

// const ul  = document.querySelector(".todo-list")
// const li = document.createElement("li")

// li.textContent = "Todo 2";
// const li1 = li.cloneNode(true);
// ul.append(li); 
// ul.prepend(li1); // but now background will appear but text content get hidden to solve this we use true as argument in cloneNode

// what true does that it also read its childnode as argument

// here problem is first it append at last then as prepend call so it get add in first as result we get li added in first but what if I want to do to add in first and last both
// To solve this we use clone which gives us clone of li node

// Some old methods to support poor IE ⬇️

// const ul = document.querySelector(".todo-list")

// new element
// const li = document.createElement("li")
// li.textContent = "Dummy Todo"

// referenceNode
// const referenceNode = document.querySelector(".first-todo")

// appendChild
// ul.appendChild(li)

// insertBefore
// ul.insertBefore(li, referenceNode)

// replaceChild 
// ul.replaceChild(li, referenceNode);

// removeChild
// ul.removeChild(referenceNode)
