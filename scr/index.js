import './style.css';

const tasks = [
  {
    description: 'task 1',
    completed: false,
    index: 0,
  },
  {
    description: 'task 2',
    completed: false,
    index: 1,
  },
];

function displayTask(task) {
  const { description, completed } = task;
  const currentTask = `
    <li>
        <input type="checkbox" ${completed}/>
        <p>${description}</p>
        <span class="nav"></span>
    </li>
    `;
  return currentTask;
}

const container = document.querySelector('.mini-container');

for (let i = 0; i < tasks.length; i += 1) {
  const content = displayTask(tasks[i]);
  container.innerHTML += content;
}
