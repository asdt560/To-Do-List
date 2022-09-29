// eslint-disable-next-line import/no-cycle
import complete from './complete.js';
// eslint-disable-next-line import/no-cycle
import targeter from './targeter.js';

const tasklist = document.querySelector('#dynamiccontainer');

const display = () => {
  tasklist.innerHTML = '';
  let arr = JSON.parse(window.localStorage.getItem('tasklist'));
  if (arr === null) {
    arr = [];
  }
  arr.forEach((item) => {
    if (item.completed === true) {
      tasklist.innerHTML += `<div class="field" id=${item.index}>
    <div class="inputcontainer">
      <label for=${item.index}><input type="checkbox" class="task" checked><div class="tasktext ${item.completed}">${item.description}</div></label>
    </div>
    <button class="listbutton" id=button${item.index} type="button" title="Change Task"><ion-icon name="ellipsis-vertical"></ion-icon></button>
  </div>`;
    } else {
      tasklist.innerHTML += `<div class="field" id=${item.index}>
    <div class="inputcontainer">
      <label for=${item.index}><input type="checkbox" class="task"><div class="tasktext ${item.completed}">${item.description}</div></label>
    </div>
    <button class="listbutton" id=button${item.index} type="button" title="Change Task"><ion-icon name="ellipsis-vertical"></ion-icon></button>
  </div>`;
    }
  });
  complete();
  targeter();
};

export default display;