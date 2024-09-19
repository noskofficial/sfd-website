async function partnersLoader() {
  const res = await fetch("/data/sponsors.json");
  const sponsorsData = await res.json();

  const sponsorContainer = document.getElementById("sponsor-container");

  // Create a map to track unique titles
  const titlesMap = {};

  sponsorsData.forEach((sponsor) => {
    const { title, name, image, link } = sponsor;

    // create a new section if the title doesn't exist in the titlesMap
    if (!titlesMap[title]) {
      titlesMap[title] = document.createElement("div");
      titlesMap[title].classList.add("sponsor-section", "my-8");
      titlesMap[title].innerHTML = `
          <div class="sponsor-title text-center">
            <h1 class="text-4xl font-bold">${title}</h1>
          </div>
          <div class="flex flex-col items-center py-6 justify-center flex-wrap sm:flex-row sm:items-stretch sm:justify-center gap-6"></div>
        `;
      sponsorContainer.appendChild(titlesMap[title]);
    }

    // Get the card container for this title
    const cardContainer = titlesMap[title].querySelector(".flex");

    // Create sponsor card HTML
    const card = document.createElement("div");
    card.className =
      "sponsor-card flex max-w-64 flex-col justify-between gap-3 rounded-3xl bg-white p-4 rounded-xl hover:shadow-xl";
    card.innerHTML = `
        <div class="sponsor-image max-w-full max-h-full min-h-36 my-auto flex items-center justify-center">
          <a href="${link}">
            <img
              src="${image}"
              alt="${name}"
              class="max-w-full max-h-full  min-w-48 object-cover"
            />
          </a>
        </div>
        <div class="sponsor-detail">
          <p class="text-center text-lg">${name}</p>
        </div>`;
    // Append the card to the section
    cardContainer.appendChild(card);
  });
}

partnersLoader();
