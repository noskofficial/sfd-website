const sponsorsData = [
  {
    title: "Gold Sponsor",
    name: "Nepal College of Information Technology",
    image: "/assets/sponsors/NCIT.jpg",
    link: "https://ncit.edu.np/",
  },

  {
    title: "Silver Sponsor",
    name: "rEngine",
    image: "/assets/sponsors/rengine.png",
    link: "https://rengine.wiki/",
  },
  {
    title: "Bronze Sponsor",
    name: "Leapfrog",
    image: "/assets/sponsors/LeapFrog1.png",
    link: "https://www.lftechnology.com/",
  },
  {
    title: "Supporting Partner",
    name: "Mero Job (Career Partner)",
    image: "/assets/sponsors/Mero Job.jpg",
    link: "https://merojob.com/",
  },
  {
    title: "Supporting Partner",
    name: "Libre Office",
    image: "/assets/sponsors/LibreOffice.png",
    link: "https://www.libreoffice.org/",
  },
  {
    title: "Supporting Partner",
    name: "GitHub Campus Expert",
    image: "/assets/sponsors/Red Flag.png",
    link: "https://githubcampus.expert/",
  },
  {
    title: "Co-Organizing Partner",
    name: "Birendra Open Source Club",
    image: "/assets/sponsors/Birendra Open Source Club.jpg",
    link: "https://www.facebook.com/birendraopensourceclub/",
  },
  {
    title: "Co-Organizing Partner",
    name: "Innovative Computer Engineering Club",
    image: "/assets/sponsors/ICEC.jpg",
    link: "https://ices.edu.np/",
  },
  {
    title: "Co-Organizing Partner",
    name: "Trichandra Research Group",
    image: "/assets/sponsors/TriChandra Research Group.jpg",
    link: "https://www.facebook.com/TriChandraResearchGroup/",
  },
  {
    title: "Other Partner",
    name: "Rotaract Club of Balaju",
    image: "/assets/sponsors/Rotaract Club Of Balaju.png",
    link: "https://www.instagram.com/rotaractbalajuofficial/",
  },
  {
    title: "Other Partner",
    name: "Rotaract Club of Dillibazar-Kathmandu",
    image: "/assets/sponsors/Logo_Club_And_Serving_Mankind.png",
    link: "https://www.instagram.com/rotaractdillibazar_ktm/",
  },
  {
    title: "Other Partner",
    name: "Rotaract Club of Gyaneshwor, CiST",
    image: "/assets/sponsors/RAC_Gyaneswor_CiST, Logo.png",
    link: "https://www.instagram.com/racgyanesworcist/",
  },
  {
    title: "Other Partner",
    name: "Rotaract Club of Patan West",
    image: "/assets/sponsors/patan_west-1.png",
    link: "https://www.instagram.com/rotaractclubofpatanwest/",
  },

  {
    title: "Volunteering Partner",
    name: "Nepal Tek Community",
    image: "/assets/sponsors/NTC logo.png",
    link: "https://tekcommunity.ncit.edu.np/",
  },
];

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
        <p class="text-center">${name}</p>
      </div>`;
  // Append the card to the section
  cardContainer.appendChild(card);
});
