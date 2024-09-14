document.addEventListener("DOMContentLoaded", async () => {
    const clkContainer = document.getElementById("clickables")
    const colorForTitles = ["#E4554E", "#000000", "#009042", "#FFCD29"]
    const colorForButtons = ["#000000", "#E4554E", "#FFCD29", "#009042"]
    let ucCard = ""
    let cCard = ""
    try {
        const res = await fetch("/data/activities.json")
        const data = await res.json()
        data.unclickable.forEach(activity => {
            ucCard += unclickGen(activity)
        });
        let i = 0;
        data.clickable.forEach(activity => {
            cCard += clickGen(activity, colorForTitles[i], colorForButtons[i])
            i++
        });
    } catch {
        console.error();
    }
    document.getElementById("unclickables").innerHTML = ucCard
    document.getElementById("clickables").innerHTML = cCard
})

const unclickGen = (activity) => {

    return `<div class='bg-white rounded-2xl w-full xl:w-[345px] 2xl:w-[400px] p-5 flex flex-col gap-4  items-center h-full ${activity.title == "Cake Cutting" ? " sm:hidden lg:flex " : ""}'>
        <img src="${activity.image}" alt="${activity.title}" class="h-20 w-20">
        <div class="font-bold text-2xl text-center">${activity.title}</div>
        <div class="font-light text-base">${activity.description}</div>
    </div>`
}
const clickGen = (activity, titleColor, buttonColor) => {
    return `<div class='bg-white rounded-2xl w-full p-5 flex flex-col gap-4  items-center h-full ${activity.title == "Cake Cutting" ? " sm:hidden lg:flex " : ""}'>
        <div class="flex w-full items-center">
            <img src="${activity.image}" alt="${activity.title}" class="h-20 w-20">
            <div class="font-bold text-2xl flex-1 text-center" style="color: ${titleColor}">${activity.title}</div>
        </div>
        <div class="font-light text-base flex-1">${activity.description}</div>
        <a target="_blank" class="text-base w-4/5 h-10 rounded-3xl font-bold text-white items-center flex justify-center " href="${activity.button.link}" style="background-color: ${buttonColor}" >${activity.button.title}</a>
    </div>`
}