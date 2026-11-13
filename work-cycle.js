(() => {
  const root = document.getElementById('work-cycle-studio');
  if (!root) return;
  const stages = [...root.querySelectorAll('[data-detail]')];
  const icons = [...root.querySelectorAll('.core-icon')];
  const orbit = root.querySelector('.orbit');
  const copy = root.querySelector('.stage-copy');
  const title = root.querySelector('.stage-title');
  const detail = root.querySelector('.detail');
  const play = root.querySelector('[data-play]');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const hold = 2100, travel = 800, duration = hold + travel;
  let active = 0, frame = null, consumed = false, observer;
  const sweep = deg => orbit.style.setProperty('--sweep', deg + 'deg');

  function select(index) {
    active = (index + stages.length) % stages.length;
    stages.forEach((stage, i) => stage.setAttribute('aria-pressed', String(i === active)));
    icons.forEach((icon, i) => { icon.hidden = i !== active; });
    title.textContent = stages[active].textContent.trim();
    detail.textContent = stages[active].dataset.detail;
    if (!motion.matches) {
      title.getAnimations().forEach(animation => animation.cancel());
      title.animate([{opacity: .5, transform: 'translateY(5px)'}, {opacity: 1, transform: 'translateY(0)'}], {duration: 280, easing: 'ease-out'});
    }
  }

  function stop() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    copy.setAttribute('aria-live', 'polite');
    play.textContent = motion.matches ? 'לשלב הבא' : 'הפעלת הסבב';
  }

  function consume() {
    consumed = true;
    observer?.disconnect();
  }

  function direct(index) {
    consume();
    stop();
    select(index);
    sweep(active * 360 / stages.length);
  }

  function run() {
    consume();
    if (motion.matches) return;
    copy.setAttribute('aria-live', 'off');
    select(0);
    sweep(0);
    play.textContent = 'עצירת הסבב';
    const start = performance.now();
    function tick(now) {
      const elapsed = Math.max(0, now - start);
      const step = Math.floor(elapsed / duration);
      if (step >= stages.length) {
        sweep(360);
        select(0);
        stop();
        return;
      }
      if (active !== step) select(step);
      const t = Math.max(0, (elapsed % duration - hold) / travel);
      const eased = t * t * (3 - 2 * t);
      sweep((step + eased) * 360 / stages.length);
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
  }

  stages.forEach((button, i) => {
    button.addEventListener('click', () => direct(i));
    button.addEventListener('keydown', event => {
      const target = {ArrowLeft: i + 1, ArrowDown: i + 1, ArrowRight: i - 1, ArrowUp: i - 1, Home: 0, End: stages.length - 1}[event.key];
      if (target === undefined) return;
      event.preventDefault();
      direct(target);
      stages[active].focus();
    });
  });

  play.addEventListener('click', () => {
    if (motion.matches) direct(active + 1);
    else if (frame !== null) stop();
    else run();
  });
  motion.addEventListener('change', () => {
    if (motion.matches) {
      consume();
      stop();
      title.getAnimations().forEach(animation => animation.cancel());
      sweep(active * 360 / stages.length);
    } else stop();
  });
  stop();
  if (!motion.matches && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
      if (!consumed && entries.some(entry => entry.isIntersecting)) run();
    }, {threshold: .35});
    observer.observe(root);
  }
})();
