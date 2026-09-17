const hero = document.querySelector('.hero');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
let queued = false;
function renderPortrait() {
  const progress = Math.max(0, Math.min(1, -hero.getBoundingClientRect().top / hero.offsetHeight));
  hero.style.setProperty('--portrait-scale', motion.matches ? '1' : String(1.03 + progress * .09));
  queued = false;
}
window.addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(renderPortrait); } }, {passive:true});
motion.addEventListener('change', renderPortrait);
renderPortrait();
