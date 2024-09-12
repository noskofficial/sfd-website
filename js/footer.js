const footerCode = `<section
    class="mt-7 flex h-80 w-full items-center justify-center bg-celeb-banner bg-no-repeat"
  >
    <p class="text-center text-5xl font-bold text-white">
      CELEBRATE THE FREEDOM OF COLLABORATION
    </p>
  </section>

  <section class="h-[313px] w-full bg-[#111111] flex items-center justify-center  mt-8">
    <div class="h-[54%] w-1/2 flex items-center justify-center flex-col gap-8">
      <div class="w-full h-1/2 flex items-center justify-center gap-8">
        <div class="w-[66px] h-[66px] bg-white flex items-center justify-center rounded-full"><a href="#" target="_blank"><img src="../assets/socialmedia/instagram.svg" alt="instagram"></a></div>
        <div class="w-[66px] h-[66px] bg-white flex items-center justify-center rounded-full"><a href="#" target="_blank"><img src="../assets/socialmedia/x.svg" alt="instagram"></a></div>
        <div class="w-[66px] h-[66px] bg-white flex items-center justify-center rounded-full"><a href="#" target="_blank"><img src="../assets/socialmedia/facebook.svg" alt="instagram"></a></div>
        <div class="w-[66px] h-[66px] bg-white flex items-center justify-center rounded-full"><a href="#" target="_blank"><img src="../assets/socialmedia/linkedin.svg" alt="instagram"></a></div>
        <div class="w-[66px] h-[66px] bg-white flex items-center justify-center rounded-full"><a href="#" target="_blank"><img src="../assets/socialmedia/website.svg" alt="instagram"></a></div>
      </div>
      <div class="w-full h-1/2">
        <ul class="flex items-center justify-center gap-4 ">
          <li><a href="" target="_blank" class="text-white font-semibold text-xl hover:text-red-600">Home</a></li>
          <li><a href="" target="_blank" class="text-white font-semibold text-xl hover:text-red-600">About</a></li>
          <li><a href="" target="_blank" class="text-white font-semibold text-xl hover:text-red-600">Itinerary</a></li>
          <li><a href="/pages/ourteam.html" target="_blank" class="text-white font-semibold text-xl hover:text-red-600">Team</a></li>
          <li><a href="" target="_blank" class="text-white font-semibold text-xl hover:text-red-600">Highlights</a></li>
          <li><a href="/pages/faqs.html" target="_blank" class="text-white font-semibold text-xl hover:text-red-600">FAQs</a></li>
          <li><a href="" target="_blank" class="text-white font-semibold text-xl hover:text-red-600">Contact</a></li>
        </ul>
        </ul>
      </div>
    </div>
  </section>
  <section class="h-[70px] w-full bg-black flex items-center justify-center">
    <p class="bg-black text-white text-center">Copyright© Software Freedom Day 2024 x Nepal Open Source Club</p>
  </section> `;

// Adding footer when DOMContentLoaded inside body
document.addEventListener('DOMContentLoaded', () => {
  // Get the first <footer> element
  const footer = document.getElementsByTagName("footer")[0].innerHTML;

  // Insert the footer content along with the existing footer content
  document.querySelector("footer").innerHTML = footerCode + footer;
});

