const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const thumbnailButtons = document.querySelectorAll(".thumbnail-button");

let currentSlide = 0;
let interval;

function showSlide(n) {
  slides.forEach((slide, index) => {
    if (index === n) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
  currentSlide = n;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
} 

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function initCarousel() {
  showSlide(currentSlide);

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  thumbnailButtons.forEach((button, index) => {
    button.addEventListener("click", () => showSlide(index));
  });

  // Configurar el intervalo para avanzar automáticamente cada 3 segundos
  interval = setInterval(nextSlide, 3000); // Cambiar cada 3 segundos

  // Detener el carrusel cuando el mouse está sobre él
  document.querySelector(".carousel-container").addEventListener("mouseenter", () => {
    clearInterval(interval);
  });

  // Reanudar el carrusel cuando el mouse se aleja
  document.querySelector(".carousel-container").addEventListener("mouseleave", () => {
    interval = setInterval(nextSlide, 2000);
  });
}

initCarousel();
