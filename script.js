const allButtons = document.querySelectorAll("button");
const allSounds = document.querySelectorAll("audio");

allButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    pauseAll();
    const sound = document.getElementById(`${btn.id}-sound`);
    playSound(sound);
  });
});

function playSound(el) {
  el.play();
}

function pauseAll() {
  allSounds.forEach((sound) => {
    sound.pause();
  });
}
