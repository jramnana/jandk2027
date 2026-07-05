// ===== CONFIG — edit these =====
const SITE_PASSWORD = "ourday2027"; // change me before sharing the link
const WEDDING_DATE = "2027-05-28T16:00:00"; // ISO format, edit to your date/time

// ===== ENVELOPE REVEAL FLOW =====
(function invite() {
  const inviteEl = document.getElementById('invite');
  const mainContent = document.getElementById('main-content');
  const enterBtn = document.getElementById('invite-enter');
  const envelope = document.getElementById('envelope-wrap');
  const pwForm = document.getElementById('gate-form');
  const pwInput = document.getElementById('gate-input');
  const pwError = document.getElementById('gate-error');

  // If already unlocked this session, skip straight past the invite screen.
  if (sessionStorage.getItem('wedding-unlocked') === 'true') {
    inviteEl.classList.add('opened');
    mainContent.classList.add('revealed');
  }

  // First click on "Enter" reveals the password field instead of jumping straight in.
  enterBtn.addEventListener('click', () => {
    pwForm.classList.add('visible');
    pwInput.focus();
  });

  pwForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (pwInput.value.trim().toLowerCase() === SITE_PASSWORD.toLowerCase()) {
      sessionStorage.setItem('wedding-unlocked', 'true');
      pwError.textContent = '';
      openEnvelope();
    } else {
      pwError.textContent = "That's not quite it — try again.";
    }
  });

  function openEnvelope() {
    envelope.classList.add('opening');
    setTimeout(() => {
      inviteEl.classList.add('opened');
      mainContent.classList.add('revealed');
      const target = document.querySelector('.site-nav, #story');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 700);
  }
})();

// ===== COUNTDOWN =====
(function countdown() {
  const target = new Date(WEDDING_DATE).getTime();
  const els = {
    d: document.getElementById('cd-days'),
    h: document.getElementById('cd-hours'),
    m: document.getElementById('cd-mins'),
    s: document.getElementById('cd-secs'),
    big: document.getElementById('cd-big'),
  };
  if (!els.d) return;

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      els.d.textContent = els.h.textContent = els.m.textContent = els.s.textContent = '0';
      if (els.big) els.big.textContent = "It's the big day!";
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
    if (els.big) els.big.textContent = `${days} Days`;
  }
  tick();
  setInterval(tick, 1000);
})();

// ===== MOBILE NAV (main header, shown once invitation opens) =====
(function nav() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu-2');
  if (!toggle) return;
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
})();

// ===== INVITE SCREEN HAMBURGER (prompts password, same as Enter) =====
(function inviteNav() {
  const toggle = document.getElementById('nav-toggle-invite');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    document.getElementById('gate-form').classList.add('visible');
    document.getElementById('gate-input').focus();
  });
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
