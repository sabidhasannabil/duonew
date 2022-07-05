const btns = document.querySelectorAll(".hero-slider-btn");
const slides = document.querySelectorAll(".hero-video-slide");
const contents = document.querySelectorAll(".content");

var slider = function(manual){
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
    slide.pause();
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  slides[manual].play();
  contents[manual].classList.add("active");
  
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    slider(i);
  });
});
