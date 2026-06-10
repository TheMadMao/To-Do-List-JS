let toDoList = [];
const input = document.querySelector('input');
const add_button = document.querySelector('#add_btn');
const delete_button = document.querySelector('#delete_btn');
const ul = document.querySelector('ul');

add_button.addEventListener('click', () => {
    if (input.value === '') {
        alert('Please enter a task!');
        return;
    } else {
        const newTask = input.value;
        toDoList.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(toDoList));

        taskCreator();
    }
});

function taskCreator(taskText) {
    const new_task = document.createElement('li');
    const delete_task = document.createElement('button');
    delete_task.addEventListener('click', () => {
        const taskToDelete = delete_task.parentElement;
        ul.removeChild(taskToDelete);
    });
    delete_task.textContent = 'Delete';
    delete_task.type = 'button';
    delete_task.classList.add('delete');
    new_task.textContent = input.value;
    ul.appendChild(new_task);
    new_task.appendChild(delete_task);
    input.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    storedTasks.forEach(task => {
        input.value = task;
        taskCreator();
    });
});