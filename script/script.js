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
  
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".education-card");
  const scrollContainer = document.querySelector(".education-scroll");

  let currentIndex = Math.floor(cards.length / 2);

  function updateCards() {
    cards.forEach((card, index) => {
      card.classList.remove("active");
      card.style.opacity = 0.5;
      card.style.transform = "scale(0.75)";
      card.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    });

    const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    const nextIndex = (currentIndex + 1) % cards.length;

    cards[prevIndex].style.order = "1";
    cards[currentIndex].style.order = "2";
    cards[nextIndex].style.order = "3";

    cards[prevIndex].style.transform = "scale(0.75)";
    cards[nextIndex].style.transform = "scale(0.75)";
    cards[currentIndex].classList.add("active");
    cards[currentIndex].style.opacity = 1;
    cards[currentIndex].style.transform = "scale(1.5)";
  }

  function goLeft() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCards();
  }

  function goRight() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
  }

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (index === (currentIndex - 1 + cards.length) % cards.length) {
        goLeft();
      } else if (index === (currentIndex + 1) % cards.length) {
        goRight();
      }
    });

    const courseworkToggle = card.querySelector(".coursework");
    courseworkToggle.addEventListener("click", () => {
      const courseworkCard = courseworkToggle.closest(".coursework-card");
      courseworkCard.classList.toggle("active");
    });
  });

  updateCards(); // Initialize with the correct layout
});
