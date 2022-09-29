import { list } from './class.js';
// eslint-disable-next-line import/no-cycle
import display from './display.js';

const changebutton = (button) => {
  button.title = 'Delete Task';
  const icon = button.firstChild;
  icon.setAttribute('name', 'trash-outline');
  button.addEventListener('click', (e) => {
    const item = e.target.parentNode;
    list.remove(item.id);
    display();
  });
};

export default changebutton;