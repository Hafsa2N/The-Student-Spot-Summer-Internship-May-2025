function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') return;
  
    const li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span>
                    <button onclick="editTask(this)">Edit</button>
                    <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);
  
    saveTasks();
    taskInput.value = '';
  }
  
  function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
    saveTasks();
  }
  
  function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const newTask = prompt('Edit task:', span.textContent);
    if (newTask !== null && newTask.trim() !== '') {
      span.textContent = newTask;
      saveTasks();
    }
  }
  
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li span').forEach(span => {
      tasks.push(span.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${task}</span>
                      <button onclick="editTask(this)">Edit</button>
                      <button onclick="deleteTask(this)">Delete</button>`;
      document.getElementById('taskList').appendChild(li);
    });
  }
  
  window.onload = loadTasks;
  