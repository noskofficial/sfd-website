const footerCode = `<section class="mt-7 flex h-80 w-full items-center justify-center bg-celeb-banner bg-no-repeat">
  <p class="text-center text-3xl md:text-5xl font-bold text-white px-4">
    CELEBRATE THE FREEDOM OF COLLABORATION
  </p>
</section>

<section class="w-full bg-[#111111] flex items-center justify-center mt-8 py-8 px-4 md:px-0">
  <div class="w-full md:w-1/2 flex items-center justify-center flex-col gap-8">
    <div class="w-full flex flex-wrap items-center justify-center gap-4 md:gap-8">
      <div class="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:h-[66px] lg:w-[66px] bg-white flex items-center justify-center rounded-full">
        <a href="#" target="_blank"><img src="../assets/socialmedia/instagram.svg" alt="instagram" class="h-[35px] w-[35px] md:h-[42px] md:w-[42px] lg:h-[50px] lg:w-[50px]"></a>
      </div>
      <div class="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:h-[66px] lg:w-[66px] bg-white flex items-center justify-center rounded-full">
        <a href="#" target="_blank"><img src="../assets/socialmedia/x.svg" alt="instagram" class="h-[35px] w-[35px] md:h-[42px] md:w-[42px] lg:h-[50px] lg:w-[50px]"></a>
      </div>
      <div class="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:h-[66px] lg:w-[66px] bg-white flex items-center justify-center rounded-full">
        <a href="#" target="_blank"><img src="../assets/socialmedia/linkedin.svg" alt="instagram" class="h-[35px] w-[35px] md:h-[42px] md:w-[42px] lg:h-[50px] lg:w-[50px]"></a>
      </div>
      <div class="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:h-[66px] lg:w-[66px] bg-white flex items-center justify-center rounded-full">
        <a href="#" target="_blank"><img src="../assets/socialmedia/facebook.svg" alt="instagram" class="h-[35px] w-[35px] md:h-[42px] md:w-[42px] lg:h-[50px] lg:w-[50px]"></a>
      </div>
      <div class="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:h-[66px] lg:w-[66px] bg-white flex items-center justify-center rounded-full">
        <a href="#" target="_blank"><img src="../assets/socialmedia/website.svg" alt="instagram" class="h-[35px] w-[35px] md:h-[42px] md:w-[42px] lg:h-[50px] lg:w-[50px]"></a>
      </div>

   
   
    
   
    </div>
    <div class="w-full">
      <ul class="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        <li><a href="" target="_blank" class="text-white font-semibold text-sm md:text-base lg:text-xl hover:text-red-600">Home</a></li>
        <li><a href="" target="_blank" class="text-white font-semibold text-sm md:text-base lg:text-xl hover:text-red-600">About</a></li>
        <li><a href="" target="_blank" class="text-white font-semibold text-sm md:text-base lg:text-xl hover:text-red-600">Itinerary</a></li>
        <li><a href="/pages/ourteam.html" target="_blank" class="text-white font-semibold text-sm md:text-base lg:text-xl hover:text-red-600">Team</a></li>

        <li><a href="/pages/faqs.html" target="_blank" class="text-white font-semibold text-sm md:text-base lg:text-xl hover:text-red-600">FAQs</a></li>
        <li><a href="" target="_blank" class="text-white font-semibold text-sm md:text-base lg:text-xl hover:text-red-600">Contact</a></li>
      </ul>
    </div>
  </div>
</section>

<section class="h-auto w-full bg-black flex items-center justify-center py-4">
  <p class="text-white text-center text-xs md:text-base">
    Copyright© Software Freedom Day 2024 x Nepal Open Source Club
  </p>
</section> `;

// Adding footer when DOMContentLoaded inside body
document.addEventListener("DOMContentLoaded", () => {
  // Get the first <footer> element
  const footer = document.getElementsByTagName("footer")[0].innerHTML;

  // Insert the footer content along with the existing footer content
  document.querySelector("footer").innerHTML = footerCode + footer;
});
