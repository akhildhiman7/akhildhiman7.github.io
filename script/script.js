document.addEventListener("DOMContentLoaded", function () {
  const topNav = document.querySelector("header");
  const landingSection = document.querySelector(".landing");

  window.addEventListener("scroll", function () {
    const landingBottom = landingSection.getBoundingClientRect().bottom;

    // When the landing section is fully out of view, show the header
    if (landingBottom <= 0) {
      topNav.classList.add("visible");
    } else {
      topNav.classList.remove("visible");
    }
  });

  const experienceCards = document.querySelectorAll(".experience-card");

  experienceCards.forEach((card) => {
    card.addEventListener("click", function () {
      const isExpanded = card.getAttribute("data-expanded") === "true";
      if (isExpanded) {
        card.setAttribute("data-expanded", "false");
        card.classList.remove("expanded");
      } else {
        card.setAttribute("data-expanded", "true");
        card.classList.add("expanded");
      }
    });
  });
});
