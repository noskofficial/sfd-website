document.addEventListener("DOMContentLoaded", async () => {
    const clkContainer = document.getElementById("clickables")
    let ucCard = ""
    try {
        const res = await fetch("/data/activities.json")
        const data = await res.json()
        data.unclickable.forEach(activity => {
            ucCard += unclickGen(activity)
        });
    } catch {
        console.error();
    }
    document.getElementById("unclickables").innerHTML = ucCard
})

const unclickGen = (activity) => {

    return `<div class='bg-white rounded-2xl  w-full xl:w-[345px] 2xl:w-[400px] p-5 flex flex-col gap-4  items-center h-full ${activity.title == "Cake Cutting" ? " sm:hidden lg:flex " : ""}'>
        <img src="${activity.image}" alt="${activity.title}" class="h-20 w-20">
        <div class="font-bold text-2xl text-center">${activity.title}</div>
        <div class="font-light text-base text-">${activity.description}</div>
    </div>`
}