document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');
  const taskCount = document.getElementById('taskCount');
  const toggleDarkModeBtn = document.getElementById('toggleDarkMode');

  // Load saved tasks
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => createTaskElement(task.text, task.completed));

  updateTaskCount();

  function createTaskElement(text, completed = false) {
    const listItem = document.createElement('li');
    listItem.textContent = text;

    if (completed) listItem.classList.add('completed');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remover';
    deleteBtn.addEventListener('click', () => {
      listItem.style.opacity = '0';
      setTimeout(() => {
        taskList.removeChild(listItem);
        saveTasks();
        updateTaskCount();
      }, 300);
    });

    listItem.addEventListener('click', () => {
      listItem.classList.toggle('completed');
      saveTasks();
    });

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
  }

  function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
      tasks.push({
        text: li.firstChild.textContent.trim(),
        completed: li.classList.contains('completed')
      });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateTaskCount();
  }

  function updateTaskCount() {
    const total = document.querySelectorAll('#taskList li').length;
   taskCount.textContent = total + " tarefa" + (total !== 1 ? "s" : "");
  }

  function addTask() {
    const text = taskInput.value.trim();
    if (text === '') {
      alert('Digite uma tarefa!');
      return;
    }

    createTaskElement(text);
    saveTasks();
    taskInput.value = '';
  }

  addTaskBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') addTask();
  });

  toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
});