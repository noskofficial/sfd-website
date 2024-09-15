document.addEventListener("DOMContentLoaded", async () => {
    let spCards = "";

    const res = await fetch("/data/sponsors.json");
    const data = await res.json();
    const sponsorCount = data.length;
    data.forEach(sponsor => {
        spCards += `<a target="_blank" href="${sponsor.link}" class="w-full h-full min-h-48 bg-white shadow-lg border-[0.2px] border-[#787676] p-8 flex justify-center items-center rounded-lg ">
            <img src="${sponsor.image}" alt="${sponsor.name}" class="max-w-full max-h-full object-contain">
        </a>`;
    });

    let gridCols =  " md:grid-cols-1";
    if (sponsorCount % 4 == 0) {
        gridCols = " md:grid-cols-4";
    } else if (sponsorCount % 3 == 0) {
        gridCols = " md:grid-cols-3";
    } else if (sponsorCount % 2 == 0) {
        gridCols = " md:grid-cols-2";
    }

    const sponsorContainer = document.createElement("div");
    sponsorContainer.id = "sponsor-container";
    sponsorContainer.className = "w-full h-fit grid gap-5 lg:gap-10 py-12 justify-items-center grid-cols-1 items-center " + gridCols;

    document.getElementById("sponsor-container").replaceWith(sponsorContainer);
    document.getElementById("sponsor-container").innerHTML = spCards;
});