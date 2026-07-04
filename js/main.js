// ===== CONFIG — edit these =====
const SITE_PASSWORD = "ourday2027"; // change me before sharing the link
const WEDDING_DATE = "2027-05-28T16:00:00"; // ISO format, edit to your date/time

// ===== PASSWORD GATE =====
(function gate() {
  const gateEl = document.getElementById('gate');
  const form = document.getElementById('gate-form');
  const input = document.getElementById('gate-input');
  const error = document.getElementById('gate-error');

  if (sessionStorage.getItem('wedding-unlocked') === 'true') {
    gateEl.classList.add('hidden');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim().toLowerCase() === SITE_PASSWORD.toLowerCase()) {
      sessionStorage.setItem('wedding-unlocked', 'true');
      gateEl.classList.add('hidden');
      error.textContent = '';
    } else {
      error.textContent = "That's not quite it — try again.";
    }
  });
})();

// ===== COUNTDOWN =====
(function countdown() {
  const target = new Date(WEDDING_DATE).getTime();
  const els = {
    d: document.getElementById('cd-days'),
    h: document.getElementById('cd-hours'),
    m: document.getElementById('cd-mins'),
    s: document.getElementById('cd-secs'),
  };
  if (!els.d) return;

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      els.d.textContent = els.h.textContent = els.m.textContent = els.s.textContent = '0';
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    els.d.textContent = days;
    els.h.textContent = String(hours).padStart(2, '0');
    els.m.textContent = String(mins).padStart(2, '0');
    els.s.textContent = String(secs).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
})();

// ===== MOBILE NAV =====
(function nav() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle) return;
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
})();

// ===== RSVP FORM (placeholder handler) =====
(function rsvp() {
  const form = document.getElementById('rsvp-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: replace with your real RSVP endpoint — e.g. point this form's
    // action at a free Google Form or Tally.so form, or swap this handler
    // for a fetch() call to one.
    document.getElementById('rsvp-confirm').style.display = 'block';
    form.style.display = 'none';
  });
})();
