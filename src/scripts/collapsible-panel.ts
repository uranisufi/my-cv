export function initCollapsiblePanels() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-collapsible-toggle]').forEach((button) => {
    const panel = document.getElementById(button.getAttribute('aria-controls') ?? '');
    const label = button.querySelector('[data-toggle-label]');
    if (!panel || !label) return;

    const open = () => {
      panel.hidden = false;
      button.setAttribute('aria-expanded', 'true');
      label.textContent = 'See less';

      if (prefersReducedMotion) {
        panel.classList.add('is-open');
        return;
      }

      requestAnimationFrame(() => panel.classList.add('is-open'));
    };

    const close = () => {
      button.setAttribute('aria-expanded', 'false');
      label.textContent = 'See more';
      panel.classList.remove('is-open');

      if (prefersReducedMotion) {
        panel.hidden = true;
        return;
      }

      const onTransitionEnd = (event: TransitionEvent) => {
        if (event.propertyName !== 'grid-template-rows') return;
        panel.hidden = true;
        panel.removeEventListener('transitionend', onTransitionEnd);
      };

      panel.addEventListener('transitionend', onTransitionEnd);
    };

    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      if (isOpen) close();
      else open();
    });
  });
}

initCollapsiblePanels();
