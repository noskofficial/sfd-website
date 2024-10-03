const baseSponsorsURL = "https://raw.githubusercontent.com/noskofficial/sfd-resources/refs/heads/main/nosk-sfd-2024"

document.addEventListener("DOMContentLoaded", async () => {
  let spCards = "";

  const res = await fetch(
    "https://raw.githubusercontent.com/noskofficial/sfd-resources/refs/heads/main/nosk-sfd-2024/data/sponsors.json",
  );
  const unfilteredData = await res.json();
  const data = unfilteredData.filter((data) => data.title.includes("Sponsor"));
  const sponsorCount = data.length;
  data.forEach((sponsor) => {
    spCards += `<a target="_blank" href="${sponsor.link}" class="w-full h-full has-tooltip min-h-48 bg-white drop-shadow-lg hover:drop-shadow-2xl border-[0.2px] border-[#787676] p-8 flex justify-center items-center rounded-lg ">
            <abbr title="${sponsor.name}"><img src="${baseSponsorsURL+sponsor.image}" alt="${sponsor.name}" class="max-w-full max-h-full object-contain"></abbr>
        </a>`;
  });

  let gridCols = " md:grid-cols-1";
  if (sponsorCount % 4 == 0) {
    gridCols = " md:grid-cols-4";
  } else if (sponsorCount % 3 == 0) {
    gridCols = " md:grid-cols-3";
  } else if (sponsorCount % 2 == 0) {
    gridCols = " md:grid-cols-2";
  }

  const sponsorContainer = document.createElement("div");
  sponsorContainer.id = "sponsor-container";
  sponsorContainer.className =
    "w-full h-fit grid gap-5 lg:gap-10 py-12 justify-items-center grid-cols-1 items-center " +
    gridCols;

  document.getElementById("sponsor-container").replaceWith(sponsorContainer);
  document.getElementById("sponsor-container").innerHTML = spCards;
});
