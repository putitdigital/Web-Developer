gsap.registerPlugin(ScrollTrigger);

const heroElements = [
  '.topbar',
  '.content-copy',
  '.intro-card',
  '.stat-card'
];

gsap.from(heroElements, {
  opacity: 0,
  y: 35,
  duration: 0.9,
  stagger: 0.15,
  ease: 'power3.out',
  delay: 0.15
});

gsap.utils.toArray('.service-card, .doctor-card, .cta-section').forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 85%'
    }
  });
});
