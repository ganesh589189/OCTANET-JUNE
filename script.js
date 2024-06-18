document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const prioritySelect = document.getElementById('priority-select');
    const categorySelect = document.getElementById('category-select');
    const dueDateInput = document.getElementById('due-date');

    if (taskInput.value.trim()) {
        addTask(taskInput.value, prioritySelect.value, categorySelect.value, dueDateInput.value);
        taskInput.value = '';
        prioritySelect.value = 'low';
        categorySelect.value = 'work';
        dueDateInput.value = '';
    }
});

function addTask(task, priority, category, dueDate) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${task} - ${priority} - ${category} - ${dueDate}</span>
        <div>
            <button class="complete-btn" onclick="markComplete(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    taskList.appendChild(taskItem);
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.style.animation = 'fadeOut 0.5s ease';
    taskItem.addEventListener('animationend', function() {
        taskItem.remove();
    });
}

function markComplete(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
}
