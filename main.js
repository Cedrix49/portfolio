/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  menuBtn.classList.toggle("responsive");
}

// Close menu when a link is clicked (for mobile)
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("myNavMenu").classList.remove("responsive");
  });
});

/* ----- ADD SHADOW & RESIZE NAVIGATION BAR WHILE SCROLLING ----- */
window.addEventListener("scroll", headerShadow);

function headerShadow() {
  const navHeader = document.getElementById("header");
  const isScrolled = window.scrollY > 50;

  navHeader.style.boxShadow = isScrolled ? "0 1px 6px rgba(0, 0, 0, 0.1)" : "none";
  navHeader.style.height = isScrolled ? "70px" : "90px";
  navHeader.style.lineHeight = isScrolled ? "70px" : "90px";
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

/* ----- SCROLL REVEAL ANIMATION ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: false  // Prevents constant resets for better UX
});

sr.reveal(".featured-text-card");
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header");

/* -- ABOUT & CONTACT INFO -- */
ScrollReveal().reveal(".about-info, .contact-info", { origin: "left", distance: "80px", duration: 2000 });
ScrollReveal().reveal(".skills-box, .form-control", { origin: "right", distance: "80px", duration: 2000 });

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");

    try {
      const navLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    } catch (error) {
      console.warn("Navigation link missing for section:", sectionId);
    }
  });
}

window.addEventListener("scroll", scrollActive);
