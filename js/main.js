const getEle = (id) => document.getElementById(id);

import Task from './models/task.js';
import TaskList from './models/taskList.js';

const taskList = new TaskList();

const render = (taskList, divId) => {
  let content = '';
  taskList.map((task) => {
    content += `
    <li >
      <p class="task">${task.name}</p>
      <div class="buttons">
        <button class="remove far fa-trash-alt" onclick="removeTaskHandler('${task.id}')"></button>
        <button class="complete far fa-check-circle" onclick="finishTaskHandler('${task.id}')"></button>
        <button class="complete fas fa-check-circle"></button>
      </div>
    </li>
  `;
  });

  getEle(divId).innerHTML = content;
};

const renderTask = (taskList) => {
  const todoTasks = taskList.arr.filter((task) => task.status === 'todo');
  const completedTask = taskList.arr.filter((task) => task.status === 'completed');
  render(todoTasks, 'todo');
  render(completedTask, 'completed');
};

getEle('addItem').onclick = () => {
  const taskName = getEle('newTask').value;
  const newTask = new Task(taskName, 'todo');
  taskList.addTask(newTask);
  renderTask(taskList);
};

window.removeTaskHandler = (id) => {
  taskList.removeTask(id);
  renderTask(taskList);
};

window.finishTaskHandler = (id) => {
  const selectedTask = taskList.arr.find((task) => task.id === id);
  selectedTask.status = 'completed';
  renderTask(taskList);
};

window.sortTaskHandler = (sortOrder) => {
  const sortedList = new TaskList();
  sortedList.arr = taskList.sortTask(sortOrder);
  renderTask(sortedList);
};
