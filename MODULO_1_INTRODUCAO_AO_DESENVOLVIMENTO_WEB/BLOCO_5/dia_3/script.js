let personName = "";

function complainMessage() {
  alert("I told you not to do that " + personName);
}

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark() {
  const body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }

}

function finishTheStory() {
  document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}

const inputText = document.getElementById('name');
const goDarkButton = document.getElementById('goDarkButton');
const doNotClickButton = document.getElementById('doNotClickButton');
const tellMeButton = document.getElementById('tellMeButton');

inputText.addEventListener('input', typeAndScream);
goDarkButton.addEventListener('click', goDark);
doNotClickButton.addEventListener('click', complainMessage);
tellMeButton.addEventListener('click', finishTheStory);
