document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    item.addEventListener("click", () => {
      if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
        answer.style.maxHeight = "0px";
        question.querySelector("span.text-gray-900").textContent = "+";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        question.querySelector("span.text-gray-900").textContent = "-";
      }
    });
  });
});
