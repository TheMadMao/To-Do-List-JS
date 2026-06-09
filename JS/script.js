const input = document.querySelector('input');
const add_button = document.querySelector('#add_btn');
const delete_button = document.querySelector('#delete_btn');
const ul = document.querySelector('ul');
const new_task = document.createElement('li');

add_button.addEventListener('click', () => {
    if (input.value === '') {
        alert('Please enter a task!');
        return;
    } else {
        new_task.textContent = input.value;
        ul.appendChild(new_task);
        input.value = '';
    }
});

delete_button.addEventListener('click', () => {
    if (ul.children.length === 0) {
        alert('No tasks to delete!');
        return;
    } else {
        ul.removeChild(ul.lastElementChild);
    }
});