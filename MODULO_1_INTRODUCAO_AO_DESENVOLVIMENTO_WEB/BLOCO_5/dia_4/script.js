const body = document.getElementById('root');
const bgColorSelect = document.getElementById('background-color');

bgColorSelect.addEventListener('change', () => {changeBackground(bgColorSelect.value)});

function changeBackground(color) {
  body.style.backgroundColor = color;
  
  if (color === 'black') body.style.color = 'white';
  if (color === 'white') body.style.color = 'black';
  if (color === 'LightYellow') body.style.color = 'black';
}