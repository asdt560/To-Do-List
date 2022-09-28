import changebutton from './changebutton.js';

import { list } from './class.js';

const editor = (target) => {
  console.log(target);
  target.contentEditable = true;
  target.parentNode.parentNode.parentNode.classList.add('editable');
  target.focus();
  const selection = window.getSelection();
  selection.selectAllChildren(target);
  selection.collapseToEnd();
  target.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(target.firstChild);
      list.edit(target);
      window.location.reload();
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