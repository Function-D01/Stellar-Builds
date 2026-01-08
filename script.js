/* =====================================================
   PRELOADER
   ===================================================== */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";

  setTimeout(() => (preloader.style.display = "none"), 500);
});


/* =====================================================
   HERO SLIDER LOGIC
   ===================================================== */
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".slider-dots");

let currentIndex = 0;
let slideInterval;


/* -----------------------------------------------------
   CREATE SLIDER DOTS DYNAMICALLY
   ----------------------------------------------------- */
slides.forEach((_, index) => {
  const dot = document.createElement("span");

  if (index === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    showSlide(index);
    resetInterval(); 
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".slider-dots span");


/* -----------------------------------------------------
   SHOW SLIDE BY INDEX
   ----------------------------------------------------- */
function showSlide(index) {
  slides[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active");

  currentIndex = index;

  slides[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}


/* -----------------------------------------------------
   MOVE TO NEXT SLIDE
   ----------------------------------------------------- */
function nextSlide() {
  let nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}


/* -----------------------------------------------------
   RESET AUTO SLIDE INTERVAL
   ----------------------------------------------------- */
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4500);
}


/* -----------------------------------------------------
   AUTO SLIDE START
   ----------------------------------------------------- */
slideInterval = setInterval(nextSlide, 4500);


/* =====================================================
   SCROLL ANIMATION (TEXT)
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const animatedText = document.querySelectorAll(
    ".animate-text:not(.footer .animate-text)"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedText.forEach(el => observer.observe(el));
});


/* =====================================================
   SCROLL ANIMATION (PROJECT TITLES + TEXT)
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const animatedText = document.querySelectorAll(
    ".animate-text, .project-line"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  animatedText.forEach(el => observer.observe(el));
});


/* =====================================================
   MOBILE HAMBURGER MENU
   ===================================================== */
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

/* Toggle mobile menu */
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});
