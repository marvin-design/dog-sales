// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Example: Display an alert message when any contact method is clicked
  const contactLinks = document.querySelectorAll("ul li");

  contactLinks.forEach((link) => {
    link.addEventListener("click", function () {
      alert(`You clicked on: ${link.querySelector("strong").innerText}`);
    });
  });

  // Example: Simple confirmation on page load
  console.log("Contact page loaded! Feel free to reach out.");
});
