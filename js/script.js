$(function(){
    $("h1").typed({
      strings: ["Eter your TODO.", "Enter your TODO."],
      typeSpeed: 0
    });
});


var todoInput = document.getElementById("todo-input");
var addTodoBtn = document.getElementById("add-todo");
var removeAllBtn = document.getElementById("remove-all");
var todoList = document.getElementById("todo-list");

removeAllBtn.onclick = function() {
    todoList.innerHTML = "";
}

addTodoBtn.onclick = function() {
    var todo = todoInput.value;
    addTodo(todo);
    todoInput.value="";
    todoInput.focus();
}

function addTodo(todo) {
    var todoListItem = document.createElement("li");
    var todoTextNode = document.createTextNode(todo + " ");
    var removebtn = document.createElement("button");
    removebtn.className = "btn btn-sm btn-danger"
    removebtn.innerHTML = "&times;"
    removebtn.setAttribute("onclick", "removeMe(this)");
    todoListItem.appendChild(todoTextNode);
    todoListItem.appendChild(removebtn);
    todoList.appendChild(todoListItem);
}

function removeMe(item) {
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}
