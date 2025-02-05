document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const dogContainer = document.querySelector("#dog-container"); // Container to display dogs

  const dogs = [
    {
      name: "Max",
      breed: "Labrador Retriever",
      price: 15000,
      owner: "John Doe",
      location: "Nairobi",
      age: "2 years",
      gender: "Male",
    },
    {
      name: "Bella",
      breed: "Beagle",
      price: 10000,
      owner: "Jane Smith",
      location: "Mombasa",
      age: "1.5 years",
      gender: "Male",
    },
    {
      name: "Rocky",
      breed: "German Shepherd",
      price: 20000,
      owner: "Mark Otieno",
      location: "Kisumu",
      age: "3 years",
      gender: "Male",
    },
    {
      name: "Jimmy",
      breed: "German Shepherd",
      price: 20000,
      owner: "Mark Kamau",
      location: "Kisumu",
      age: "1 year",
      gender: "Male",
    },
    {
      name: "Charlie",
      breed: "Bulldog",
      price: 18000,
      owner: "Ali Hassan",
      location: "Nakuru",
      age: "4 years",
      gender: "Male",
    },
    {
      name: "Lucy",
      breed: "Poodle",
      price: 12500,
      owner: "Grace Kimani",
      location: "Eldoret",
      age: "1 year",
      gender: "Female",
    },
    {
      name: "Buddy",
      breed: "Golden Retriever",
      price: 22000,
      owner: "Tom Ochieng",
      location: "Thika",
      age: "2.5 years",
      gender: "Male",
    },
    {
      name: "Daisy",
      breed: "Beagle",
      price: 9000,
      owner: "Fiona Mwangi",
      location: "Nairobi",
      age: "2 years",
      gender: "Female",
    },
    {
      name: "Cooper",
      breed: "German Shepherd",
      price: 19000,
      owner: "Kevin Wanjala",
      location: "Mombasa",
      age: "3 years",
      gender: "Male",
    },
    {
      name: "Milo",
      breed: "Bulldog",
      price: 17500,
      owner: "Sarah Njoroge",
      location: "Kisumu",
      age: "1.8 years",
      gender: "Male",
    },
    {
      name: "Luna",
      breed: "Poodle",
      price: 11000,
      owner: "Peter Kariuki",
      location: "Nakuru",
      age: "1.2 years",
      gender: "Female",
    },
    {
      name: "Bailey",
      breed: "Labrador Retriever",
      price: 14000,
      owner: "Joyce Ouma",
      location: "Eldoret",
      age: "2.1 years",
      gender: "Female",
    },
    {
      name: "Zoe",
      breed: "Beagle",
      price: 9500,
      owner: "Daniel Mwende",
      location: "Thika",
      age: "2.4 years",
      gender: "Female",
    },
    {
      name: "Oscar",
      breed: "Golden Retriever",
      price: 21000,
      owner: "Mary Nduta",
      location: "Nairobi",
      age: "2.8 years",
      gender: "Male",
    },
    {
      name: "Toby",
      breed: "Bulldog",
      price: 16000,
      owner: "Dennis Kiptoo",
      location: "Mombasa",
      age: "3.5 years",
      gender: "Male",
    },
    {
      name: "Lilly",
      breed: "Poodle",
      price: 13000,
      owner: "Gloria Achieng",
      location: "Kisumu",
      age: "1.9 years",
      gender: "Female",
    },
  ];

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const location = document.querySelector("#location").value.toLowerCase();
    const breed = document.querySelector("#breed").value.toLowerCase();
    const minPrice = parseInt(document.querySelector("#min-price").value) || 0;
    const maxPrice =
      parseInt(document.querySelector("#max-price").value) || Infinity;

    const filteredDogs = dogs.filter((dog) => {
      return (
        (!location || dog.location.toLowerCase().includes(location)) &&
        (!breed || dog.breed.toLowerCase().includes(breed)) &&
        dog.price >= minPrice &&
        dog.price <= maxPrice
      );
    });

    displayDogs(filteredDogs);
  });

  function displayDogs(dogs) {
    dogContainer.innerHTML = ""; // Clear previous results

    if (dogs.length === 0) {
      const message = document.createElement("p");
      message.textContent = "No dogs match your criteria. Please try again.";
      message.style.color = "red";
      dogContainer.appendChild(message);
      return;
    }

    dogs.forEach((dog) => {
      const card = document.createElement("div");
      card.className = "dog-card";
      card.innerHTML = `
        <h3>Name: ${dog.name}</h3>
        <p>Breed: ${dog.breed}</p>
        <p>Price: KES ${dog.price.toLocaleString()}</p>
        <p>Owner: ${dog.owner}</p>
        <p>Location: ${dog.location}</p>
        <p>Age: ${dog.age}</p>
        <p>Gender: ${dog.gender}</p>
      `;
      dogContainer.appendChild(card);
    });
  }
});
