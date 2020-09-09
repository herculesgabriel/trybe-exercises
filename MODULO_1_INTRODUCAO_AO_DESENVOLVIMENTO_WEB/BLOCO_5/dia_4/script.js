const body = document.getElementById('root');
const bgColorSelect = document.getElementById('background-color');
const textColorSelect = document.getElementById('text-color-select');

bgColorSelect.addEventListener('change', () => { changeBackground(bgColorSelect.value) });

function changeBackground(color) {
  body.style.backgroundColor = color;

  if (color === 'black') body.style.color = 'white';
  if (color === 'white') body.style.color = 'black';
  if (color === 'LightYellow') body.style.color = 'black';
}

textColorSelect.addEventListener('change', () => { changeTextColor(textColorSelect.value) });

function changeTextColor(color) {
  let backgroundColor = body.style.backgroundColor;

  if (color === 'auto') {
    if (backgroundColor === 'black') {
      body.style.color = 'white';
    } else if (backgroundColor === 'white' || backgroundColor === 'lightyellow') {
      body.style.color = 'black';
    }
  } else {
    body.style.color = color;
  }
}