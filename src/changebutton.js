import { list } from './class.js';
// eslint-disable-next-line import/no-cycle
import display from './display.js';

const changebutton = (button) => {
  const icon = button.firstChild;
  icon.setAttribute('name', 'trash-outline');
  button.addEventListener('click', (e) => {
    const item = e.target.parentNode;
    list.remove(item.parentNode.id);
    display();
  });
};

export default changebutton;