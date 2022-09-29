import { list } from './class.js';
// eslint-disable-next-line import/no-cycle
import display from './display.js';

const complete = () => {
  const boxes = document.querySelectorAll('.task');
  boxes.forEach((box) => {
    box.addEventListener('change', (e) => {
      if (box.checked === false) {
        box.checked = true;
      } else if (box.checked === true) {
        box.checked = false;
      }
      list.complete(e.target.parentNode.parentNode.parentNode.id);
      display();
    });
  });
};

export default complete;