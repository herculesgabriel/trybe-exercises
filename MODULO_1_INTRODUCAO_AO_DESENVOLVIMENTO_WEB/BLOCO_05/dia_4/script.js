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
  let fontColor = body.style.color;
  setCookies('bg_color', color);
  body.style.backgroundColor = color;

  if (color === 'black' && fontColor === 'black') {
    setCookies('text_color', 'white');
    body.style.color = 'white';
  }
  if (color === 'white' && fontColor === 'white') {
    setCookies('text_color', 'black');
    body.style.color = 'black';
  }
  if (color === 'lightyellow' && fontColor === 'white') {
    setCookies('text_color', 'black');
    body.style.color = 'black';
  }
}

function changeTextColor(color) {
  if (color !== 'auto') {
    setCookies('text_color', color);
    body.style.color = color;
  } else {
    checkBackgroundColor();
  }
}

function checkBackgroundColor() {
  if (body.style.backgroundColor === 'black') {
    setCookies('text_color', 'white');
    body.style.color = 'white';
  } else {
    setCookies('text_color', 'black');
    body.style.color = 'black';
  }
}

function changeFontSize(fontSize) {
  setCookies('fontsize', fontSize);
  body.style.fontSize = `${fontSize}em`;
}

function changeLineSpacing(lineSpacing) {
  setCookies('line_height', lineSpacing);
  body.style.lineHeight = lineSpacing;
}

function changeFontFamily(fontFamily) {
  setCookies('font_family', fontFamily);
  body.style.fontFamily = fontFamily;
}

function applyUserPreferences(preferences) {
  changeFontSize(preferences.fontsize);
  changeLineSpacing(preferences.line_height);
  changeFontFamily(preferences.font_family);
  changeBackground(preferences.bg_color);
  changeTextColor(preferences.text_color);
}

function setCookies(property, value) {
  user_preferences[property] = value;
  localStorage.setItem("user_settings", JSON.stringify(user_preferences));
}

function setCookieValues() {
  return JSON.parse(localStorage.getItem("user_settings"));
}

function setDefaultValues() {
  return {
    bg_color: 'white',
    text_color: 'black',
    fontsize: '1em',
    line_height: '1',
    font_family: 'serif'
  };
}

let user_preferences = setCookieValues() || setDefaultValues();
console.log(user_preferences);
applyUserPreferences(user_preferences);
