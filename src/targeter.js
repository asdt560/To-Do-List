// eslint-disable-next-line import/no-cycle
import changebutton from './changebutton.js';

import { list } from './class.js';

// eslint-disable-next-line import/no-cycle
import display from './display.js';

const editor = (target) => {
  target.contentEditable = true;
  target.parentNode.parentNode.parentNode.classList.add('editable');
  target.focus();
  const selection = window.getSelection();
  selection.selectAllChildren(target);
  selection.collapseToEnd();
  target.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      list.edit(target);
      display();
      target.parentNode.parentNode.parentNode.classList.remove('editable');
    }
  });
};

const targeter = () => {
  const listbutton = document.querySelectorAll('.listbutton');
  listbutton.forEach((button) => {
    button.addEventListener('click', (e) => {
      changebutton(e.currentTarget);
      const div = e.currentTarget.parentNode;
      const editTarget = div.querySelector('.tasktext');
      editor(editTarget);
    });
  });
};

export default targeter;