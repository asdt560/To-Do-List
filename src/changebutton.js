import deleter from './deleter.js';

const changebutton = (button) => {
  const icon = button.firstChild;
  icon.setAttribute('name', 'trash-outline');
  button.addEventListener('click', (e) => {
    console.log(e.target.parentNode);
    deleter(e.target.parentNode);
  });
};

export default changebutton;