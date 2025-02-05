document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const dogCards = document.querySelectorAll(".dog-card");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const location = document.querySelector("#location").value.toLowerCase();
    const breed = document.querySelector("#breed").value.toLowerCase();
    const minPrice = parseInt(document.querySelector("#min-price").value) || 0;
    const maxPrice =
      parseInt(document.querySelector("#max-price").value) || Infinity;

    let chosenAnimal = null;

    dogCards.forEach((card) => {
      const cardLocation = card
        .querySelector(".dog-details p:nth-child(5)")
        .textContent.toLowerCase();
      const cardBreed = card
        .querySelector(".dog-details p:nth-child(2)")
        .textContent.toLowerCase();
      const cardPrice = parseInt(
        card
          .querySelector(".dog-details p:nth-child(3)")
          .textContent.replace(/[^\d]/g, "")
      );

      const locationMatch = !location || cardLocation.includes(location);
      const breedMatch = !breed || cardBreed.includes(breed);
      const priceMatch = cardPrice >= minPrice && cardPrice <= maxPrice;

      if (locationMatch && breedMatch && priceMatch && !chosenAnimal) {
        card.style.display = "block";
        chosenAnimal = card; // Choose the first matching animal
      } else {
        card.style.display = "none";
      }
    });

    // Display message if no dogs match
    const noResultMessage = document.querySelector("#no-result-message");

    if (!chosenAnimal) {
      if (!noResultMessage) {
        const message = document.createElement("p");
        message.id = "no-result-message";
        message.textContent = "No dogs match your criteria. Please try again.";
        message.style.color = "red";
        form.appendChild(message);
      }
    } else if (noResultMessage) {
      noResultMessage.remove();
    }
  });
});
