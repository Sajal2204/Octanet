document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var todoInput = document.getElementById('todo-input');
    var todoList = document.getElementById('todo-list');
  
    if (todoInput.value !== '') {
        var todoItem = document.createElement('li');
        var todoText = document.createTextNode(todoInput.value);
        todoItem.appendChild(todoText);
  
        var deleteBtn = document.createElement('span');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>;';
  
        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(todoItem);
        });
  
        todoItem.appendChild(deleteBtn);
  
        todoItem.addEventListener('click', function() {
            this.classList.toggle('completed');
        });
  
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
});
