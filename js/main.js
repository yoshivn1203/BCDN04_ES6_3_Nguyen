const getEle = (id) => document.getElementById(id);

import { Task } from './models/task.js';
import { TaskList } from './models/taskList.js';

let taskList = new TaskList();

const render = (list, divId) => {
  let content = '';
  list.map((task) => {
    content += `
    <li >
      <p class="task">${task.name}</p>
      <div class="buttons">
        <button class="remove far fa-trash-alt" onclick="removeTask('${task.id}')"></button>
          <button class="complete far fa-check-circle" onclick="finishTask('${task.id}')"></button>
          <button class="complete fas fa-check-circle"></button>
      </div>
    </li>
  `;
  });

  getEle(divId).innerHTML = content;
};

let renderHandler = (list) => {
  let todoTasks = list.arr.filter((ele) => !ele.isDone);
  let completedTask = list.arr.filter((ele) => ele.isDone);
  render(todoTasks, 'todo');
  render(completedTask, 'completed');
};

let addTask = () => {
  let taskName = getEle('newTask').value;
  let task = new Task(taskName, false);
  taskList.pushTask(task);
  renderHandler(taskList);
};

window.removeTask = (id) => {
  taskList.popTask(id);
  console.log(taskList);
  renderHandler(taskList);
};

window.finishTask = (id) => {
  let selectedTask = taskList.getTaskById(id);
  selectedTask.isDone = true;
  renderHandler(taskList);
};

window.sortTaskHandler = (sortOrder) => {
  let sortedList = new TaskList();
  sortedList.arr = taskList.sortTask(sortOrder);
  renderHandler(sortedList);
};

getEle('addItem').onclick = () => addTask();
