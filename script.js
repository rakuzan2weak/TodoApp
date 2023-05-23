const newTask = document.querySelector('#new-task');
const todoList = document.querySelector('#todo-list');

function addTask(e) {
  e.preventDefault();

  // Create task element
  const task = document.createElement('li');
  task.innerText = newTask.value;

  // Create delete button
  const deleteBtn = document.createElement('span');
  deleteBtn.innerHTML = '&times;';
  deleteBtn.classList.add('delete-btn');

  // Append delete button to task element
  task.appendChild(deleteBtn);

  // Append task element to todo list
  todoList.appendChild(task);

  // Clear input field
  newTask.value = '';

  // Add event listener to delete button
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(task);
  });
}

document.querySelector('form').addEventListener('submit', addTask);
