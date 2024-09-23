document.addEventListener("DOMContentLoaded", async () => {
  const clkContainer = document.getElementById("clickables");
  const colorForTitles = ["#E4554E", "#000000", "#009042", "#FFCD29"];
  const colorForButtons = ["#000000", "#E4554E", "#FFCD29", "#009042"];
  let ucCard = "";
  let cCard = "";
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/noskofficial/sfd-resources/refs/heads/main/nosk-sfd-2024/data/activities.json",
    );
    const data = await res.json();
    data.unclickable.forEach((activity) => {
      ucCard += unclickGen(activity);
    });
    let i = 0;
    data.clickable.forEach((activity) => {
      cCard += clickGen(activity, colorForTitles[i], colorForButtons[i]);
      i++;
    });
  } catch {
    console.error();
  }
  document.getElementById("unclickables").innerHTML = ucCard;
  document.getElementById("clickables").innerHTML = cCard;
});

const unclickGen = (activity) => {
  return `<div class='bg-white rounded-2xl w-full p-5 pt-8 border-[0.2px] border-[#787676] transition-all drop-shadow-lg hover:drop-shadow-2xl cursor-default flex flex-col gap-4  items-center h-full ${activity.title == "Cake Cutting" ? " sm:hidden lg:flex " : ""}'>
        <img src="${activity.image}" alt="${activity.title}" class="h-20 w-20">
        <div class="font-bold text-xl md:text-2xl text-center">${activity.title}</div>
        <div class="font-light text-sm md:text-base text-center">${activity.description}</div>
    </div>`;
};
const clickGen = (activity, titleColor, buttonColor) => {
  return `<div class='bg-white rounded-2xl w-full p-5 flex flex-col gap-4 drop-shadow-lg transition-all hover:drop-shadow-2xl cursor-default border-[0.2px] border-[#787676] items-center h-full ${activity.title == "Cake Cutting" ? " sm:hidden lg:flex " : ""}'>
        <div class="flex w-full items-center">
            <img src="${activity.image}" alt="${activity.title}" class="h-20 w-20">
            <div class="font-bold text-xl md:text-2xl flex-1 text-center" style="color: ${titleColor}">${activity.title}</div>
        </div>
        <div class="font-light text-sm md:text-base flex-1 text-center">${activity.description}</div>
        <a target="_blank" class="text-base w-4/5 h-10 rounded-3xl font-bold text-white items-center flex justify-center transition-all hover:bg-transparent" href="${activity.button.link}" style="background-color: ${buttonColor}; border: 1px solid ${buttonColor}" onmouseover="hoverEffect(this)" onmouseout="resetEffect(this)">${activity.button.title}</a>
    </div>`;
};

const hoverEffect = (e) => {
  e.style.backgroundColor = "transparent";
  e.style.color = e.style.borderColor;
};

const resetEffect = (e) => {
  e.style.backgroundColor = e.style.borderColor;
  e.style.color = "white";
};
