// Fetch the gallery data from the JSON file and insert it into the HTML
fetch("../gallery.json") // Adjusted path to gallery.json
  .then((response) => response.json())
  .then((data) => {
    const galleryContainer = document.getElementById("gallery");
    data.forEach((item) => {
      const galleryItem = document.createElement("div");
      galleryItem.classList.add(
        "block",
        "bg-white",
        "shadow-md",
        "rounded-lg",
        "overflow-hidden",
      );

      galleryItem.innerHTML = `
                <img class="w-full h-64 object-cover" src="${item.image}" alt="${item.description}">
                <div class="p-4">
                    <p class="font-semibold text-lg mb-2">${item.description}</p>
                </div>
            `;

      galleryContainer.appendChild(galleryItem);
    });
  })
  .catch((error) => console.error("Error loading gallery data:", error));
