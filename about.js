const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show/hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show"); // Add the 'show' class
  } else {
    scrollToTopBtn.classList.remove("show"); // Remove the 'show' class
  }
});

// Smooth scroll to top when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
