// Run code after the page loads
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove task when button is clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append remove button and li to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Allow adding task by pressing Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
