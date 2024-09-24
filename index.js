let bubbles = document.querySelectorAll(".bubble");
let arrows = document.querySelectorAll(".arrow");

bubbles.forEach((bubble, index) => {
  bubble.setAttribute("iniColor", bubble.style.backgroundColor);
  bubble.addEventListener("click", () => moveArrow(arrows[index], bubble));
});

function reset() {
  let arrows = document.querySelectorAll(".arrow");
  let bubbles = document.querySelectorAll(".bubble");

  arrows.forEach((arrow) => {
    arrow.style.transform = "translateX(0%)";
  });

  bubbles.forEach((bubble) => {
    bubble.style.backgroundColor = bubble.getAttribute("iniColor");
  });
}

function moveArrow(arrow, target) {
  arrow.style.transition = "none";
  let posi =
    target.getBoundingClientRect().left -
    arrow.getBoundingClientRect().left +
    60;
  arrow.style.transform = `translateX(${posi}px)`;

  arrow.style.transition = "none";
  arrow.style.transform = `translateX(${posi}px)`;
  target.style.backgroundColor = "grey";
}