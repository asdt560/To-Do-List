import './style.css';

function Task(description, index) {
  this.description = description;
  this.completed = false;
  this.index = index;
}

let tasknumber = 0;

const arr = [
  {
    description: 'example task',
    completed: false,
    index: 0,
  },
];
const tasklist = document.querySelector('#dynamiccontainer');
window.localStorage.setItem('tasklist', JSON.stringify(arr));

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
      
      <label for=${tasknumber}><input type="checkbox" class="task" id=${tasknumber}>${taskname}</label>
    </div>
    <button class="listbutton" id=${tasknumber} type="button"><ion-icon name="ellipsis-vertical"></ion-icon></button>
  </div>`;
  tasknumber += 1;
  window.localStorage.setItem('tasklist', JSON.stringify(arr));
};

document.querySelector('#taskenter').addEventListener('click', () => {
  record();
});

const clearer = () => {
  const arr = JSON.parse(window.localStorage.getItem('tasklist'));
  arr.forEach((item) => {
    if (item.complete === true) {
      delete(item.index);
    }
  });
  window.localStorage.setItem('tasklist', JSON.stringify(arr));
  const tasklist = document.querySelector('#dynamiccontainer');
  tasklist.innerHTML = '';
};

document.querySelector('#clear').addEventListener('click', () => {
  clearer();
});

const changebutton = (id) => {
  const button = document.querySelector(id);
  button.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
};

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

window.addEventListener('load', () => {
  const arr = JSON.parse(window.localStorage.getItem('tasklist'));
  arr.forEach((item) => {
    tasklist.innerHTML = `<div class="field">
    <div class="inputcontainer">
      
      <label for=${tasknumber}><input type="checkbox" class="task" id=${item.index}>${item.description}</label>
    </div>
    <button class="listbutton" id=${tasknumber} type="button"><ion-icon name="ellipsis-vertical"></ion-icon></button>
  </div>`;
    tasknumber += 1;
  });
  const listbutton = document.querySelectorAll('.listbutton');
  listbutton.forEach((button) => {
    button.addEventListener('click', (e) => {
      console.log(e.target.id);
      changebutton(e.target.id);
    });
  });
  const boxes = document.querySelectorAll('.task');
  boxes.forEach((box) => {
    box.addEventListener('change', (e) => {
      if (e.target.checked) {
        const boxIndex = e.target.id;
        e.target.parentNode.cssText = 'text-decoration = strikethrough';
        complete(boxIndex);
      }
    });
  });
});
