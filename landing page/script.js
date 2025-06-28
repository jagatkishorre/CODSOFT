// Intersection Observer for animations
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // trigger only once
      }
    });
  }, { threshold: 0.1 });

  faders.forEach(el => appearOnScroll.observe(el));
});
