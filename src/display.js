import targeter from './targeter.js';

const tasklist = document.querySelector('#dynamiccontainer');

const display = () => {
  tasklist.innerHTML = '';
  const arr = JSON.parse(window.localStorage.getItem('tasklist'));
  arr.forEach((item) => {
    tasklist.innerHTML += `<div class="field" id=${item.index}>
    <div class="inputcontainer">
      <label for=${item.index}><input type="checkbox" class="task">${item.description}</label>
    </div>
    <button class="listbutton" id=button${item.index} type="button"><ion-icon name="ellipsis-vertical"></ion-icon></button>
  </div>`;
  });
  targeter();
};

export default display;