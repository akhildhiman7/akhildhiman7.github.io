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
      topNav.style.opacity = "1";
      topNav.style.visibility = "visible";
    } else {
      topNav.style.opacity = "0";
      topNav.style.visibility = "hidden";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".education-card");
  const scrollContainer = document.querySelector(".education-scroll");

  let currentIndex = Math.floor(cards.length / 2);
  let isTransitioning = false;

  function updateCards() {
    if (isTransitioning) return;

    isTransitioning = true;

    cards.forEach((card, index) => {
      card.classList.remove("active");
      card.style.opacity = 0.7;
      card.style.transform = "scale(0.75)";
      card.style.transition = "transform 1s ease, opacity 1s ease";
    });

    const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    const nextIndex = (currentIndex + 1) % cards.length;

    cards.forEach((card, index) => {
      if (index === prevIndex) {
        card.style.order = "1";
      } else if (index === currentIndex) {
        card.style.order = "2";
        card.classList.add("active");
        card.style.opacity = 1;
        card.style.transform = "scale(1.3)";
      } else if (index === nextIndex) {
        card.style.order = "3";
      } else {
        card.style.order = "";
        card.style.opacity = 0;
        card.style.transform = "scale(0.75)";
      }
    });

    adjustContainerHeight();

    setTimeout(() => {
      isTransitioning = false;
    }, 1000); // Ensure the transition completes before allowing new interactions
  }

  function goLeft() {
    if (isTransitioning) return;
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCards();
  }

  function goRight() {
    if (isTransitioning) return;
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
  }

  function adjustContainerHeight() {
    const activeCard = cards[currentIndex];
    
    if (activeCard) {
      const expandedCardHeight = activeCard.scrollHeight;
      scrollContainer.style.minHeight = (expandedCardHeight + 50) + "px";
    }
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

      adjustContainerHeight(); // Adjust container height when toggling coursework
    });
  });

  updateCards(); // Initialize with the correct layout
});
