const body = document.getElementById('root');
const bgColorSelect = document.getElementById('background-color');

bgColorSelect.addEventListener('change', () => {changeBackground(bgColorSelect.value)});

function changeBackground(color) {
  body.style.backgroundColor = color;
}