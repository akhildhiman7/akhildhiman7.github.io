document.addEventListener("DOMContentLoaded", function () {
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

document.addEventListener("DOMContentLoaded", function () {
    const topNav = document.querySelector("header");
    const landingSection = document.querySelector(".landing");
  
    window.addEventListener("scroll", function () {
      const landingBottom = landingSection.getBoundingClientRect().bottom;
  
      if (landingBottom <= 0) {
        // If the bottom of the landing section is above the top of the viewport
        topNav.style.opacity = "1";
        topNav.style.visibility = "visible";
      } else {
        // If the landing section is still in view
        topNav.style.opacity = "0";
        topNav.style.visibility = "hidden";
      }
    });
  });
  
  