document.querySelectorAll(".contact-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    alert(`You clicked on: ${this.textContent}`);
  });
});
