const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideWidth = carousel.querySelector(".carousel-slide").clientWidth;
const slides = carousel.querySelectorAll(".carousel-slide");


let currentIndex = 0;

console.log(slideWidth)

function updateCarouselPosition() {
  carousel.style.transform = currentIndex !== 0 ? `translateX(-${(currentIndex * slideWidth) - 120}px)` : `translateX(${120}px)`;
  // Remove "selected" class from all slides
  slides.forEach((slide) => {
    slide.classList.remove("selected");
  });

  // Add "selected" class to the current slide
  slides[currentIndex].classList.add("selected");
}

prevBtn.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  console.log(currentIndex)
  updateCarouselPosition();
});

nextBtn.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, carousel.childElementCount - 1);
  console.log(currentIndex)
  updateCarouselPosition();
});