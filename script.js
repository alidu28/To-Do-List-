document.addEventListener("DOMContentLoaded", function() {
    const addTodoBtn = document.getElementById("addTodoBtn");
    const newTodoInput = document.getElementById("newToDoInput");
    const todoList = document.getElementById("todoList");

    // Function to create a new to-do item
    function createTodoItem(todoText) {
        const li = document.createElement("li");
        li.textContent = todoText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-todo-btn");
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }

    // Event listener for adding a new to-do item
    addTodoBtn.addEventListener("click", function() {
        const todoText = newTodoInput.value.trim();
        if (todoText !== "") {
            createTodoItem(todoText);
            newTodoInput.value = "";
        } else {
            alert("Please enter a valid to-do item.");
        }
    });

    // Optional: Allow pressing Enter key to add a new to-do item
    newTodoInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTodoBtn.click();
        }
    });
});
