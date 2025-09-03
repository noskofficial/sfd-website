const baseURL ="https://raw.githubusercontent.com/noskofficial/sfd-resources/refs/heads/main/nosk-sfd-2024";

fetch(`${baseURL}/data/pastEvents.json`)
  .then((response) => response.json())
  .then((data) => {
    const pastEventsContainer = document.getElementById("pastEvents");
    pastEventsContainer.innerHTML = "";

    //event heading
    const eventsHeading = document.createElement("h2");
    eventsHeading.classList.add("text-3xl", "font-bold", "mb-8", "text-center");
    eventsHeading.textContent = "Past SFD Events";
    pastEventsContainer.appendChild(eventsHeading);

    // colored lines under events heading
    const eventsLinesContainer = document.createElement("div");
    eventsLinesContainer.classList.add("lines-container");
    eventsLinesContainer.innerHTML = `
  <div class="line first"></div>
  <div class="line middle"></div>
  <div class="line last"></div>
`;
    pastEventsContainer.appendChild(eventsLinesContainer);

    const headingSpacer = document.createElement("div");
    headingSpacer.style.height = "2.5rem";
    pastEventsContainer.appendChild(headingSpacer);

    const eventsGrid = document.createElement("div");
    eventsGrid.classList.add(
      "grid",
      "grid-cols-1",
      "md:grid-cols-2",
      "lg:grid-cols-3",
      "gap-8",
      "mb-12",
      "justify-items-center",
    );

    // CSS for uniform images and centered cards
    const style = document.createElement("style");
    style.textContent = `
  .event-card-image {
    width: 100% !important;
    height: 250px !important; 
    object-fit: cover !important;
    object-position: center !important;
  }
  .event-card-image-container {
    padding-left: 1rem; 
    padding-right: 1rem;
  }
  .events-grid > :last-child:nth-child(3n - 1),
  .events-grid > :nth-last-child(2):nth-child(3n - 1) {
    grid-column: span 1;
  }
  @media (min-width: 1024px) {
    .events-grid > :last-child:nth-child(3n - 1),
    .events-grid > :nth-last-child(2):nth-child(3n - 1) {
      grid-column: 2 / 3; /* Center last two cards in 3-column layout */
    }
  }
`;
    document.head.appendChild(style);

    data.events.forEach((event) => {
      const eventCard = document.createElement("div");
      eventCard.classList.add(
        "bg-white",
        "shadow-md",
        "rounded-lg",
        "overflow-hidden",
        "hover:shadow-xl",
        "transition",
        "duration-300",
        "w-full",
        "max-w-sm",
      );

      eventCard.innerHTML = `
    <div class="w-full h-50 flex justify-center items-center bg-gray-100 event-card-image-container">
      <img class="event-card-image"
           src="${baseURL + event.image}"
           alt="${event.title}"
           loading="lazy">
    </div>
    <div class="p-4">
      <h3 class="text-lg font-semibold mb-2 text-center md:text-left">${event.title}</h3>
      <p class="text-sm text-gray-600 mb-4 text-center md:text-left">Participants: ${event.participants}+</p>
      <div class="text-center md:text-left">
        <a href="${event.button.link}" target="_blank" class="text-blue-500 hover:underline">Read more</a>
      </div>
    </div>
  `;
      eventsGrid.appendChild(eventCard);
    });

    pastEventsContainer.appendChild(eventsGrid);
    const spacer = document.createElement("div");
    spacer.style.height = "2.5rem";
    pastEventsContainer.appendChild(spacer);

    // Sponsors Section
    const sponsorsHeading = document.createElement("h2");
    sponsorsHeading.classList.add(
      "text-3xl",
      "font-bold",
      "mt-12",
      "text-center",
    );
    sponsorsHeading.textContent = "Past SFD Sponsors";
    pastEventsContainer.appendChild(sponsorsHeading);

    // Add colored lines under sponsors heading
    const sponsorsLinesContainer = document.createElement("div");
    sponsorsLinesContainer.classList.add("lines-container");
    sponsorsLinesContainer.innerHTML = `
      <div class="line first"></div>
      <div class="line middle"></div>
      <div class="line last"></div>
    `;
    pastEventsContainer.appendChild(sponsorsLinesContainer);

    const sponsorsSpacer = document.createElement("div");
    sponsorsSpacer.style.height = "2.5rem";
    pastEventsContainer.appendChild(sponsorsSpacer);

    const sponsorGrid = document.createElement("div");
    sponsorGrid.classList.add(
      "grid",
      "grid-cols-1",
      "md:grid-cols-2",
      "lg:grid-cols-4",
      "gap-5",
      "lg:gap-10",
      "px-4",
      "md:px-6",
      "lg:px-12",
      "transition-all",
      "duration-500",
    );

    const sponsorsToShow = 4;

    data.sponsors.forEach((sponsor, index) => {
      const sponsorCard = document.createElement("a");
      sponsorCard.href = sponsor.link || "#";
      sponsorCard.target = "_blank";
      sponsorCard.className =
        "w-full h-full has-tooltip min-h-48 bg-white drop-shadow-lg hover:drop-shadow-2xl " +
        "border-[0.2px] border-[#787676] p-8 flex justify-center items-center rounded-lg";

      if (index >= sponsorsToShow) {
        sponsorCard.style.display = "none";
        sponsorCard.classList.add("hidden-sponsor");
      }

      sponsorCard.innerHTML = `
        <abbr title="${sponsor.name.replace(/<[^>]*>?/gm, "")}">
          <img src="${baseURL + sponsor.image}" 
               alt="${sponsor.name.replace(/<[^>]*>?/gm, "")}" 
               class="w-40 h-28 object-contain hover:scale-105 transition-transform duration-300">
        </abbr>
      `;
      sponsorGrid.appendChild(sponsorCard);
    });

    pastEventsContainer.appendChild(sponsorGrid);

    if (data.sponsors.length > sponsorsToShow) {
      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "Show More Sponsors";
      toggleBtn.classList.add(
        "mt-6",
        "px-6",
        "py-3",
        "bg-blue-500",
        "text-black",
        "rounded-lg",
        "hover:bg-blue-600",
        "transition-colors",
        "duration-300",
        "block",
        "mx-auto",
      );

      let expanded = false;
      toggleBtn.addEventListener("click", () => {
        const hiddenSponsors = document.querySelectorAll(".hidden-sponsor");
        if (!expanded) {
          hiddenSponsors.forEach((el, i) => {
            el.style.display = "flex";
            setTimeout(() => (el.style.opacity = "1"), i * 50);
          });
          toggleBtn.textContent = "Show Less Sponsors";
        } else {
          hiddenSponsors.forEach((el) => {
            el.style.opacity = "0";
            setTimeout(() => (el.style.display = "none"), 300);
          });
          toggleBtn.textContent = "Show More Sponsors";
          window.scrollTo({
            top: sponsorGrid.offsetTop - 20,
            behavior: "smooth",
          });
        }
        expanded = !expanded;
      });

      pastEventsContainer.appendChild(toggleBtn);
    }
  })
  .catch((error) => console.error("Error loading pastEvents data:", error));
