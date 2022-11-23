const imgs = document.getElementById("imgs");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let index = 0;

let interval = setInterval(run, 2000);

function run() {
  index++;
  changeImage();
}
