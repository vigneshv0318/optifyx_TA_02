let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Show the selected slide
  slides[slideIndex].style.display = "block";
}

// Move to the next or previous slide
function moveSlide(n) {
  showSlide(slideIndex + n);
}

// Auto slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);

// Initial display
showSlide(slideIndex);
