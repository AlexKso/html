const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;
const colors = ["aqua", "blueviolet", "chocolate", "cyan", "darkgreen", "gold"];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => {
    remColor(square);
  });
  board.append(square);
}
function setColor(element) {
  let color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 4px ${color}`;
}
function remColor(element) {
  element.style.backgroundColor = "rgb(43, 42, 42)";
  element.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
