const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const tasksDiv = document.getElementById('tasks');
const progress = document.getElementById('progress');
const emptyText = document.getElementById('emptyText');

const modal = document.getElementById('modal');
const editInput = document.getElementById('editInput');
const cancelBtn = document.getElementById('cancelBtn');
const saveBtn = document.getElementById('saveBtn');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let currentEditIndex = null;

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateStats() {
  const completed = tasks.filter((task) => task.completed).length;

  progress.textContent = `${completed}/${tasks.length}`;

  if (tasks.length === 0) {
    emptyText.style.display = 'block';
  } else {
    emptyText.style.display = 'none';
  }
}

function renderTasks() {
  tasksDiv.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const left = document.createElement('div');
    left.className = 'task-left';

    const check = document.createElement('div');
    check.className = 'check';

    if (task.completed) {
      check.classList.add('completed');
    }

    check.addEventListener('click', () => {
      tasks[index].completed = !tasks[index].completed;

      saveTasks();
      renderTasks();
    });

    const text = document.createElement('div');
    text.className = 'task-text';
    text.textContent = task.text;

    if (task.completed) {
      text.classList.add('completed');
    }

    left.appendChild(check);
    left.appendChild(text);

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const editBtn = document.createElement('button');
    editBtn.innerHTML = '✎';

    editBtn.addEventListener('click', () => {
      modal.style.display = 'flex';

      editInput.value = task.text;

      currentEditIndex = index;

      editInput.focus();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑';

    deleteBtn.addEventListener('click', () => {
      tasks.splice(index, 1);

      saveTasks();
      renderTasks();
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    taskDiv.appendChild(left);
    taskDiv.appendChild(actions);

    tasksDiv.appendChild(taskDiv);
  });

  updateStats();
}

function addTask() {
  const text = taskInput.value.trim();

  if (text === '') {
    return;
  }

  tasks.push({
    text: text,
    completed: false,
  });

  taskInput.value = '';

  saveTasks();
  renderTasks();
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

saveBtn.addEventListener('click', () => {
  const newText = editInput.value.trim();

  if (newText !== '') {
    tasks[currentEditIndex].text = newText;

    saveTasks();
    renderTasks();

    modal.style.display = 'none';
  }
});

cancelBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

renderTasks();
