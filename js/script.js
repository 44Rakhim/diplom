const firstslides = document.querySelectorAll(".firstslide");
const firstdots = document.querySelectorAll(".firstslider-dot");
const firstprevButton = document.querySelector(".firstslider-prev");
const firstnextButton = document.querySelector(".firstslider-next");

let currentFirstSlide = 1;

// функция для переключения слайдов
function showFirstSlide(n) {
  if (n > firstslides.length) {
    currentFirstSlide = 1;
  } else if (n < 1) {
    currentFirstSlide = firstslides.length;
  }
  firstslides.forEach((slide) => {
    slide.style.display = "none";
  });
  firstslides[currentFirstSlide - 1].style.display = "flex";
}

// функция для автоматического переключения слайдов
function autoFirstSlide() {
  currentFirstSlide++;
  showFirstSlide(currentFirstSlide);
}

// запускаем автоматическое переключение слайдов
let firstslideInterval = setInterval(autoFirstSlide, 5000);

// функция для переключения на предыдущий слайд
function prevFirstSlide() {
  currentFirstSlide--;
  showFirstSlide(currentFirstSlide);
}

// функция для переключения на следующий слайд
function nextFirstSlide() {
  currentFirstSlide++;
  showFirstSlide(currentFirstSlide);
}

// обработчики событий для кнопок
firstprevButton.addEventListener("click", () => {
  prevFirstSlide();
});

firstnextButton.addEventListener("click", () => {
  nextFirstSlide();
});

// обработчики событий для кнопок
firstdots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentFirstSlide = index + 1;
    showFirstSlide(currentFirstSlide);
    clearInterval(slideInterval);
    firstslideInterval = setInterval(autoSlide, 3000);
  });
});

// показываем первый слайд
showFirstSlide(currentFirstSlide);
