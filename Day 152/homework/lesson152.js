class TodoApp {
  constructor() {
    this.tasks = [];
    this.list = document.getElementById('taskList');
    this.input = document.getElementById('taskInput');

    this.modal = document.getElementById('modal');
    this.editInput = document.getElementById('editInput');
    this.currentIndex = null;

    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.addTask();
    });
  }

  addTask() {
    const text = this.input.value.trim();
    if (text === '') {
      return;
    }

    this.tasks.push(text);
    this.input.value = '';
    this.render();
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.render();
  }

  openEdit(index) {
    this.currentIndex = index;
    this.editInput.value = this.tasks[index];
    this.modal.style.display = 'flex';
    this.editInput.focus();
  }

  saveEdit() {
    const text = this.editInput.value.trim();
    if (text === '') {
      return;
    }

    this.tasks[this.currentIndex] = text;
    this.closeModal();
    this.render();
  }

  closeModal() {
    this.modal.style.display = 'none';
  }

  render() {
    this.list.innerHTML = '';

    this.tasks.forEach((task, i) => {
      const li = document.createElement('li');

      li.innerHTML = `
        <span class="task-text">${task}</span>
        <div class="actions">
          <button class="edit" onclick="todo.openEdit(${i})">Edit</button>
          <button class="delete" onclick="todo.deleteTask(${i})">X</button>
        </div>
      `;

      this.list.appendChild(li);
    });
  }
}

const todo = new TodoApp();
