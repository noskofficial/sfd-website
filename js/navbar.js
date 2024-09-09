const navCode = `<nav class="flex flex-row mb-4 w-full justify-between px-[1%] md:px-[5%] lg:px-[10%] mt-7 h-[4.75rem]">
    <a href="/pages"><img class="h-[4.75rem] w-auto hover:cursor-pointer" src="../assets/shared/nosk_sfd.svg"
            alt="Logo for NOSK-SFD"></a>
    <div id="navlist"
        class="list-none flex flex-row xl:gap-20 sm:gap-4 md:gap-6 lg:gap-8 my-auto text-xl font-semibold items-center *:hover:cursor-pointer font-bahnschrift h-[4.75rem]">
        <span class="group/about" id="about">
            <button
                class="md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:p-0 flex items-center justify-between w-full md:w-auto">About
                <svg class="w-4 h-4 ml-1 group-hover/about:-rotate-180 transition-all" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            <!-- Dropdown menu -->
            <div
                class="hidden absolute *:text-black group-hover/about:block bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-44 font-normal">
                <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="/pages/aboutsfd.html" class="text-sm hover:bg-gray-100 block px-4 py-2">About
                            SFD</a>
                    </li>
                    <li>
                        <a href="https://nosk.org.np/site/html/about.html" class="text-sm hover:bg-gray-100 block px-4 py-2">About NOSK</a>
                    </li>
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-100 block px-4 py-2">Gallery</a>
                    </li>
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-100 block px-4 py-2">Sponsors</a>
                    </li>
                </ul>
            </div>
        </span>
        <span id="itinerary" class="hover:border-b-2"><a href="/pages/itinerary.html">Itinerary</a></span>
        <span id="team" class="hover:border-b-2"><a href="/pages/ourteam.html">Our Team</a></span>
        <span class="group/activities" id="activities">
            <button
                class="md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:p-0 flex items-center justify-between w-full md:w-auto">Activities
                <svg class="w-4 h-4 ml-1 group-hover/activities:-rotate-180 transition-all" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            <!-- Dropdown menu -->
            <div
                class="hidden absolute group-hover/activities:block bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-44 font-normal">
                <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="https://forms.gle/ZmT2eDPqyLoLj5Sd6" class="text-sm hover:bg-gray-100 block px-4 py-2">Project Registration</a>
                    </li>
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-100 block px-4 py-2">NOSKODE 5.0</a>
                    </li>
                </ul>
            </div>
        </span>
        <span id="faqs" class="hover:border-b-2"><a href="/pages/faqs.html">FAQs</a></span>
        <span id="contact" class="hover:border-b-2"><a href="/pages/contactus.html">Contact Us</a></span>
    </div>
</nav>
`

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector("#body").innerHTML;
    document.querySelector("#body").innerHTML = navCode + body
    const pathName = window.location.pathname
    let splittedPath = pathName.split("/")
    const currentPage = splittedPath[splittedPath.length - 1].replace(".html", "")
    const navChildren = document.querySelector("#navlist").children
    for (navChild of navChildren) {
        if (currentPage.includes(navChild.id)) {
            navChild.style = "color: #E4554E"

        }
    }
})


document.addEventListener("DOMContentLoaded", () => {
    const sfdDate = new Date("2024-09-21T10:00:00");
    const daysElem = document.getElementById("days");
    const hoursElem = document.getElementById("hours");
    const minutesElem = document.getElementById("minutes");
    const secondsElem = document.getElementById("seconds");

    function pad(num) {
        return num.toString().padStart(2, '0');
    }

    function updateTimer() {
        const currDate = new Date();
        let diff = sfdDate - currDate;

        if (diff < 0) {
            daysElem.innerText = "00";
            hoursElem.innerText = "00";
            minutesElem.innerText = "00";
            secondsElem.innerText = "00";
            clearInterval(inter); // Stop the interval when the countdown is finished
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysElem.innerText = pad(days);
        hoursElem.innerText = pad(hours);
        minutesElem.innerText = pad(minutes);
        secondsElem.innerText = pad(seconds);
    }

    const inter = setInterval(updateTimer, 1000);
});
