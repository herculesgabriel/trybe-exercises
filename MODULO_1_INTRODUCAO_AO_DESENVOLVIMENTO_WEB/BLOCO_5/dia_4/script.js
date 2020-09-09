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
  setCookies('bgcolor', color);

  if (color === 'black') {
    body.style.color = 'white';
    setCookies('textcolor', 'white');
  }
  if (color === 'white') {
    body.style.color = 'black';
    setCookies('textcolor', 'black');
  }
  if (color === 'LightYellow') {
    body.style.color = 'black';
    setCookies('textcolor', 'black');
  }
}

function changeTextColor(color) {

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
  setCookies('fontfamily', fontFamily);
  body.style.fontFamily = fontFamily;

}

function changeFontSize(fontSize) {
  setCookies('fontsize', fontSize);
  body.style.fontSize = `${fontSize}em`;
}

function changeLineSpacing(lineSpacing) {
  setCookies('lineheight', lineSpacing);
  body.style.lineHeight = lineSpacing;
}

function applyUserPreferences(preferences) {
  changeBackground(preferences.bgcolor);
  changeTextColor(preferences.textcolor);
  changeFontSize(preferences.fontsize);
  changeLineSpacing(preferences.lineheight);
  changeFontFamily(preferences.fontfamily);
}

function setCookies(property, value) {
  user_preferences[property] = `${value}`;
  console.log(user_preferences);
}

let user_preferences = {
  bgcolor: 'white',
  textcolor: 'black',
  fontsize: '1em',
  lineheight: '1',
  fontfamily: 'serif'
};

applyUserPreferences(user_preferences);

localStorage.setItem("user_settings", JSON.stringify(user_preferences));
// let prefs = JSON.parse(localStorage.getItem("user_settings"));
// console.log(prefs);

/*
sessionStorage.length
sessionStorage.setItem("firstname", "Adam")
sessionStorage.getItem("firstname"))
sessionStorage.removeItem("lastname")
sessionStorage.clear()
*/