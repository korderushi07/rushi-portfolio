// Optional: Reveal sections on scroll (simple animation)
const sections = document.querySelectorAll(".section");

const reveal = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Add smooth transition via CSS
document.querySelectorAll(".section").forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(30px)";
  sec.style.transition = "all 0.7s ease";
});

document.querySelectorAll(".section.visible").forEach(sec => {
  sec.style.opacity = 1;
  sec.style.transform = "translateY(0)";
});
