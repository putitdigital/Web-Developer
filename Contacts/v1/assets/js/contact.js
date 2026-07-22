gsap.registerPlugin(ScrollTrigger);

const contact = [
  'h1',
  'p',
  '.contacts-panel'
];

gsap.from(contact, {
  opacity: 0,
  y: 90,
  duration: 2,
  stagger: 0.2,
  ease: 'power3.out',
  delay: 0
});

// gsap.utils.toArray('.info-content, .form-content').forEach((card) => {
//   gsap.from(card, {
//     opacity: 0,
//     y: 100,
//     duration: 2,
//     ease: 'power3.out',
//     stagger: 2,
//     scrollTrigger: {
//       trigger: card,
//       start: 'top 85%'
//     }
//   });
// });
