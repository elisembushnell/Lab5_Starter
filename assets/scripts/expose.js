// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  document.getElementById("horn-select").addEventListener("change", hornImageAudio);

  document.getElementById("volume-controls").addEventListener("change", volumeSlider);

  document.querySelector("button").addEventListener("click", playSound);
}

function hornImageAudio() {

  var image = document.querySelector("[alt='No image selected']");
  var selected = document.getElementById("horn-select");
  var selectedValue = selected.value;

  var audioFile = document.querySelector("[class='hidden']");

  if(selectedValue == "air-horn") {
    image.src = "assets/images/air-horn.svg";
    audioFile.src = "assets/audio/air-horn.mp3";
  } else if(selectedValue == "car-horn") {
    image.src = "assets/images/car-horn.svg";
    audioFile.src = "assets/audio/car-horn.mp3";
  } else if(selectedValue == "party-horn") {
    image.src = "assets/images/party-horn.svg";
    audioFile.src = "assets/audio/party-horn.mp3";
  }
}

function volumeSlider() {
  var audioLevel = document.getElementById("volume");

  var audioVal = audioLevel.value;
  var audioPic = document.querySelector("[alt='Volume level 2']");
  console.log(audioVal);

  var audioFile = document.querySelector("[class='hidden']");
  console.log(audioFile);
  audioFile.volume = audioVal / 100;

  if (audioVal == 0) {
    audioPic.src = "assets/icons/volume-level-0.svg";
  } else if ((audioVal >= 1) && (audioVal < 33)) {
    audioPic.src = "assets/icons/volume-level-1.svg";
  } else if ((audioVal >= 33) && (audioVal < 67)) {
    audioPic.src = "assets/icons/volume-level-2.svg";
  } else if (audioVal > 67) {
    audioPic.src = "assets/icons/volume-level-3.svg";
  }

}

function playSound() {
  var audioFile = document.querySelector("[class='hidden']");

  var selected = document.getElementById("horn-select");
  var selectedValue = selected.value;

  audioFile.play();

  if (selectedValue == "party-horn") {
    console.log("msde it");
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
  }
}