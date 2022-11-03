// VARIABLES

const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 7500;
const relaxTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// FUNCTIONS

relaxAnimation();

function relaxAnimation() {
  text.textContent = "Breathe in";
  container.className = "container grow";

  setTimeout(() => {
    text.textContent = "Hold";
    setTimeout(() => {
      text.textContent = "Breathe out";
      container.className = "container shrink";
    }, holdTime);
  }, relaxTime);
}

setInterval(relaxAnimation, totalTime);

// EVENT LISTENERS
