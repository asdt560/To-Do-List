import { list } from './class.js';

const changebutton = (button) => {
  const icon = button.firstChild;
  icon.setAttribute('name', 'trash-outline');
  button.addEventListener('click', (e) => {
    const item = e.target.parentNode;
    console.log(item.parentNode.id);
    list.remove(item.parentNode.id);
    window.location.reload();
  });
};

export default changebutton;