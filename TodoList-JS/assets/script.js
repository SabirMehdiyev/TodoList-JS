let taskInput = document.getElementById('taskInput');
let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskList');


function addTask() {
    let taskText = taskInput.value;

    let listItem = document.createElement('li');
    listItem.textContent = taskText;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';

    listItem.appendChild(deleteBtn);

    taskList.appendChild(listItem);
    taskInput.value = '';

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });
}

addTaskBtn.addEventListener('click', addTask);

