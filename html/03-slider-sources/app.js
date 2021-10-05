const btnUp = document.querySelector(".up-button");
const btnDown = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelectorAll(".container");

const slidesCount = sidebar.querySelectorAll("div").length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

btnUp.addEventListener("click", () => {
  changeSlide("up");
});
btnDown.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "down") {
    if (activeSlideIndex === slidesCount - 1) {
      activeSlideIndex = 0;
    } else {
      activeSlideIndex++;
    }
  }
  if (direction === "up") {
    if (activeSlideIndex === 0) {
      activeSlideIndex = slidesCount - 1;
    } else {
      activeSlideIndex--;
    }
  }

  const height = mainSlide.clientHeight;
  console.log(height);
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
