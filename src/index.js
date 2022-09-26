import './style.css';

function Task(description, index) {
  this.description = description;
  this.completed = false;
  this.index = index;
}

let tasknumber = 0;

const record = () => {
  let arr = JSON.parse(window.localStorage.getItem('tasklist'));
  if (arr === null) {
    arr = [];
  }
  const taskname = document.querySelector('#addTask').value;
  const task = new Task(taskname, tasknumber);
  arr.push(task);
  const tasklist = document.querySelector('#dynamiccontainer');
  tasklist.innerHTML += `<div class="field">
    <div class="inputcontainer">
      <input type="checkbox" class="task" id=${tasknumber}>
      <label>${taskname}</label>
    </div>
    <button class="listbutton" type="button"><ion-icon name="ellipsis-vertical"></ion-icon></button>
  </div>`;
  tasknumber += 1;
  window.localStorage.setItem('tasklist', JSON.stringify(arr));
};

document.querySelector('#taskenter').addEventListener('click', () => {
  record();
});

const clearer = () => {
  let arr = JSON.parse(window.localStorage.getItem('tasklist'));
  arr = [];
  window.localStorage.setItem('tasklist', JSON.stringify(arr));
  const tasklist = document.querySelector('#dynamiccontainer');
  tasklist.innerHTML = '';
};

document.querySelector('#clear').addEventListener('click', () => {
  clearer();
});

const boxes = document.querySelectorAll('.task');

const complete = (boxIndex) => {
  const arr = JSON.parse(window.localStorage.getItem('tasklist'));
  arr.forEach((item) => {
    if (arr.indexOf(item) === boxIndex) {
      if (item.completed === false) {
        item.completed = true;
      } else {
        item.completed = false;
      }
      console.log(item);
    }
  });
  window.localStorage.setItem('tasklist', JSON.stringify(arr));
};

boxes.forEach((box) => box.addEventListener('change', (e) => {
  const boxIndex = e.target.id;
  complete(boxIndex);
}));