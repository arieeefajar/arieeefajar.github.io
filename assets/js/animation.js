gsap.registerPlugin(ScrollTrigger);

function applyGSAPAnimations() {
  document.querySelectorAll("[data-gsap]").forEach((el) => {
    const type = el.dataset.gsap;
    const delay = parseInt(el.dataset.delay) || 0;

    const animations = {
      "fade-up": { opacity: 0, y: 50 },
      "fade-right": { opacity: 0, x: -50 },
      "fade-left": { opacity: 0, x: 50 },
      "zoom-in": { opacity: 0, scale: 0.8 },
      "zoom-out": { opacity: 0, scale: 1.2 },
    };

    const config = animations[type] || { opacity: 0 };

    gsap.from(el, {
      ...config,
      duration: 1,
      delay: delay / 1000,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
}

document.addEventListener("DOMContentLoaded", applyGSAPAnimations);
