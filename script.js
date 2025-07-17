// Toggle Menu for Mobile
function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("active");
}

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");
window.onscroll = () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Simple Reviews Carousel
let currentReview = 0;
const reviews = document.querySelectorAll(".review-card");

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.remove("active");
    if (i === index) review.classList.add("active");
  });
}

setInterval(() => {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
}, 3000);
