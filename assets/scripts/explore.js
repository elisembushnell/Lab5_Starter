// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  populateVoices();
  document.querySelector("button").addEventListener("click", playWords);
}

let voices = [];
const synth = window.speechSynthesis;

function populateVoices() {
  const voiceSelect = document.querySelector('select');

  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name}`;


    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function playWords() {
  const inputTxt = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  var image = document.querySelector("[alt='Smiling face']");
  
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  
  image.src = "assets/images/smiling-open.png";
  synth.speak(utterThis);
  image.src = "assets/images/smiling.png";

}