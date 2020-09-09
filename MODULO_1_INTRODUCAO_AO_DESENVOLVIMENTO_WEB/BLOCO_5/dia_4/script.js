const body = document.getElementById('root');
const selectBgColor = document.getElementById('background-color');
const selectTextColor = document.getElementById('text-color-select');
const selectFontFamily = document.getElementById('font-family');
const inputColor = document.getElementById('text-color-input');
const inputFontSize = document.getElementById('font-size');
const inputSpacing = document.getElementById('spacing');

selectBgColor.addEventListener('change', () => { changeBackground(selectBgColor.value) });
selectTextColor.addEventListener('change', () => { changeTextColor(selectTextColor.value) });
inputColor.addEventListener('change', () => { changeTextColor(inputColor.value) });
inputFontSize.addEventListener('change', () => { changeFontSize(inputFontSize.value) });
inputSpacing.addEventListener('change', () => { changeLineSpacing(inputSpacing.value) });
selectFontFamily.addEventListener('change', () => { changeFontFamily(selectFontFamily.value) });

function changeBackground(color) {
  body.style.backgroundColor = color;

  if (color === 'black') body.style.color = 'white';
  if (color === 'white') body.style.color = 'black';
  if (color === 'LightYellow') body.style.color = 'black';
}

function changeTextColor(color) {
  let backgroundColor = body.style.backgroundColor;

  if (color !== 'auto') {
    body.style.color = color;
  } else {
    checkBackgroundColor();
  }
}

function checkBackgroundColor() {
  return (body.style.backgroundColor === 'black') ?
    body.style.color = 'white' : body.style.color = 'black';
}


function changeFontFamily(fontFamily) {
  body.style.fontFamily = fontFamily;

}

function changeFontSize(fontSize) {
  body.style.fontSize = `${fontSize}em`;
}

function changeLineSpacing(lineSpacing) {
  body.style.lineHeight = lineSpacing;
}