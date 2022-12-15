const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  //get the current class
  const current = document.querySelector('.current');

  //remove the current class from the element.
  current.classList.remove('current');

  //check for the next slide.
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    //add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  //get the current class
  const current = document.querySelector('.current');

  //remove the current class from the element.
  current.classList.remove('current');

  //check for the previous slide.
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    //add current to last
    slides[slides.length - 1].classList.add('current');
  }

  setTimeout(() => current.classList.remove('current'));
};

next.addEventListener('click', (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}