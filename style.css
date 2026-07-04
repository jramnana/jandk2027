/* ===== DESIGN TOKENS ===== */
:root {
  --ivory: #FBF7F1;
  --sand: #E7DED2;
  --blush: #F2D6DA;
  --dusty-rose: #8B3E4A;
  --dusty-rose-dark: #6E2F38;
  --taupe: #5F554E;
  --ink: #3A332F;

  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'Inter', sans-serif;

  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 40px;
  --space-5: 64px;
  --space-6: 96px;

  --radius: 2px;
  --border: 1px solid rgba(95, 85, 78, 0.25);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  background: var(--ivory);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, .display {
  font-family: var(--font-display);
  font-weight: 500;
  color: var(--dusty-rose);
  margin: 0;
}

.eyebrow {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--taupe);
  font-weight: 600;
}

a { color: inherit; }

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
  html { scroll-behavior: auto; }
}

/* ===== BOTANICAL DIVIDER (signature element) ===== */
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  margin: var(--space-3) 0;
}
.divider svg { width: 46px; height: 14px; color: var(--dusty-rose); }
.divider .dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: var(--dusty-rose);
}

/* ===== PASSWORD GATE ===== */
#gate {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3);
  background:
    radial-gradient(circle at 20% 15%, rgba(242,214,218,0.55), transparent 45%),
    radial-gradient(circle at 85% 80%, rgba(139,62,74,0.18), transparent 50%),
    linear-gradient(180deg, #EFE7DC 0%, var(--sand) 60%, #DCCFC0 100%);
  transition: opacity 0.6s ease, visibility 0.6s ease;
}
#gate.hidden { opacity: 0; visibility: hidden; pointer-events: none; }

.gate-card {
  position: relative;
  width: 100%;
  max-width: 380px;
  background: var(--ivory);
  border: var(--border);
  padding: var(--space-4) var(--space-3);
  text-align: center;
  box-shadow: 0 30px 60px -20px rgba(58, 51, 47, 0.25);
}
.gate-card::before {
  content: '';
  position: absolute;
  inset: 10px;
  border: 1px solid rgba(139,62,74,0.35);
  pointer-events: none;
}
.gate-card .monogram {
  font-family: var(--font-display);
  font-size: 56px;
  font-style: italic;
  color: var(--dusty-rose);
  line-height: 1;
  margin-bottom: var(--space-2);
}
.gate-card .names {
  font-family: var(--font-display);
  font-size: 28px;
  letter-spacing: 0.06em;
  margin: var(--space-2) 0 var(--space-1);
}
.gate-card .invite-copy {
  font-size: 14px;
  color: var(--taupe);
  font-style: italic;
  margin: var(--space-2) 0;
}
.gate-card .date-loc {
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--ink);
  margin-bottom: var(--space-3);
}
.gate-card .date-loc strong { display: block; font-size: 13px; margin-bottom: 2px; }

.gate-enter-label {
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--taupe);
  margin-bottom: var(--space-1);
}
.gate-form {
  display: flex;
  border-bottom: 1px solid var(--taupe);
  padding-bottom: 6px;
}
.gate-form input {
  flex: 1;
  border: none;
  background: transparent;
  font-family: var(--font-body);
  font-style: italic;
  font-size: 14px;
  color: var(--ink);
  outline: none;
}
.gate-form input::placeholder { color: rgba(95,85,78,0.55); }
.gate-form button {
  background: none;
  border: none;
  color: var(--dusty-rose);
  cursor: pointer;
  font-size: 18px;
  padding: 0 4px;
}
.gate-error {
  font-size: 12px;
  color: var(--dusty-rose-dark);
  margin-top: var(--space-1);
  min-height: 16px;
}

/* ===== INVITATION / ENVELOPE REVEAL ===== */
#invite {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(circle at 12% 8%, rgba(242,214,218,0.7), transparent 38%),
    radial-gradient(circle at 90% 18%, rgba(242,214,218,0.45), transparent 40%),
    linear-gradient(180deg, #FBF7F1 0%, #F6EEE6 100%);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
#invite.opened {
  opacity: 0;
  transform: translateY(-24px);
  pointer-events: none;
  height: 0;
  overflow: hidden;
}

.invite-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3);
}
.invite-monogram {
  height: 54px;
  width: auto;
  mix-blend-mode: multiply;
  opacity: 0.9;
}
.invite-topbar .nav-toggle { font-size: 20px; }

.invite-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 var(--space-3) var(--space-4);
}

.invite-countdown-big {
  font-family: var(--font-display);
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--taupe);
  margin-bottom: var(--space-1);
}
.countdown-sm { gap: var(--space-2); margin-bottom: var(--space-3); }
.countdown-sm .num { font-size: 26px; }
.countdown-sm .sep { font-size: 20px; color: var(--sand); }

.invite-names {
  font-size: clamp(30px, 6vw, 42px);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-top: var(--space-2);
}
.invite-sub {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--taupe);
  margin-top: 6px;
}
.invite-date {
  font-size: 13px;
  letter-spacing: 0.1em;
  color: var(--ink);
  margin-top: 6px;
}

/* Envelope */
.envelope-wrap {
  position: relative;
  width: 260px;
  max-width: 80vw;
  height: 210px;
  margin: var(--space-5) auto var(--space-3);
}
.letter-peek {
  position: absolute;
  top: -46px;
  left: 6%;
  right: 6%;
  background: var(--ivory);
  border: 1px solid rgba(139,62,74,0.2);
  padding: var(--space-3) var(--space-2) var(--space-2);
  box-shadow: 0 16px 30px -10px rgba(58,51,47,0.2);
  z-index: 1;
  transition: transform 0.9s cubic-bezier(.4,0,.2,1), opacity 0.6s ease;
}
.letter-msg {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 15px;
  color: var(--ink);
  margin: 0;
}
.letter-sprig { width: 26px; height: 26px; color: var(--dusty-rose); margin-top: 8px; opacity: 0.8; }
.letter-pw-form { display: none; margin-top: var(--space-2); }
.letter-pw-form.visible { display: block; }

.envelope-flap {
  position: absolute;
  top: 42px;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(135deg, #F3ECE2, #E7DED2);
  clip-path: polygon(0 0, 100% 0, 50% 78%);
  z-index: 3;
  transition: transform 0.7s cubic-bezier(.4,0,.2,1);
}
.envelope-body {
  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #F7F0E7;
  border: 1px solid rgba(95,85,78,0.2);
  z-index: 2;
}
.wax-seal {
  position: absolute;
  top: 88px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--dusty-rose);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 14px rgba(58,51,47,0.3);
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.wax-seal img {
  width: 62%;
  height: 62%;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

/* Opening animation states */
.envelope-wrap.opening .letter-peek {
  transform: translateY(-70px) scale(1.03);
}
.envelope-wrap.opening .wax-seal {
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
}
.envelope-wrap.opening .envelope-flap {
  transform: translateY(-6px) rotateX(20deg);
  opacity: 0.6;
}

.invite-enter {
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--dusty-rose);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.arrow-down { animation: bob 1.6s ease-in-out infinite; }
@keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(5px); } }

.invite-iconnav {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  flex-wrap: wrap;
  padding: var(--space-3);
  border-top: var(--border);
}
.invite-iconnav a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: var(--taupe);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.invite-iconnav svg { width: 22px; height: 22px; color: var(--dusty-rose); }
.invite-iconnav a:hover { color: var(--dusty-rose); }

.invite-banner {
  background: var(--dusty-rose);
  color: var(--ivory);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.invite-banner svg { width: 22px; height: 22px; }

@media (max-width: 480px) {
  .invite-iconnav { gap: var(--space-3); }
}

/* ===== NAV ===== */
header.site-nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(251, 247, 241, 0.92);
  backdrop-filter: blur(6px);
  border-bottom: var(--border);
}
.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--space-2) var(--space-3);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-inner .brand {
  font-family: var(--font-display);
  font-size: 20px;
  letter-spacing: 0.08em;
  color: var(--dusty-rose);
}
.nav-inner nav {
  display: flex;
  gap: var(--space-3);
}
.nav-inner nav a {
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--taupe);
}
.nav-inner nav a:hover { color: var(--dusty-rose); }
.nav-toggle { display: none; background: none; border: none; font-size: 22px; color: var(--dusty-rose); cursor: pointer; }

@media (max-width: 720px) {
  .nav-inner nav { display: none; position: absolute; top: 100%; left: 0; right: 0; background: var(--ivory); flex-direction: column; padding: var(--space-2) var(--space-3); border-bottom: var(--border); gap: var(--space-2); }
  .nav-inner nav.open { display: flex; }
  .nav-toggle { display: block; }
}

/* ===== HERO ===== */
.hero {
  position: relative;
  padding: var(--space-6) var(--space-3) var(--space-5);
  text-align: center;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 15% 10%, rgba(242,214,218,0.6), transparent 40%),
    radial-gradient(ellipse at 90% 85%, rgba(139,62,74,0.12), transparent 45%),
    var(--sand);
}
.hero .eyebrow { margin-bottom: var(--space-2); }
.hero h1 {
  font-size: clamp(40px, 7vw, 76px);
  letter-spacing: 0.02em;
}
.hero .subtitle {
  font-size: 16px;
  color: var(--taupe);
  font-style: italic;
  margin-top: var(--space-2);
}
.hero .date-loc {
  margin-top: var(--space-3);
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink);
}

/* Placeholder art panel (stand-in for photography) */
.art-panel {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  background:
    linear-gradient(160deg, var(--blush) 0%, var(--sand) 55%, #D8CBBB 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dusty-rose);
}
.art-panel svg { width: 40%; height: 40%; opacity: 0.55; }
.art-panel .label {
  position: absolute;
  bottom: var(--space-2);
  left: var(--space-2);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--taupe);
  background: rgba(251,247,241,0.75);
  padding: 4px 8px;
}

/* ===== SECTION SHELL ===== */
section { padding: var(--space-6) var(--space-3); }
.section-inner { max-width: 1100px; margin: 0 auto; }
.section-head { text-align: center; max-width: 560px; margin: 0 auto var(--space-5); }
.section-head h2 { font-size: clamp(30px, 4vw, 44px); }
.section-head p { color: var(--taupe); font-size: 15px; margin-top: var(--space-1); }

/* ===== COUNTDOWN ===== */
.countdown {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}
.countdown .unit { text-align: center; }
.countdown .num {
  font-family: var(--font-display);
  font-size: clamp(38px, 6vw, 56px);
  color: var(--dusty-rose);
  line-height: 1;
}
.countdown .lbl {
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--taupe);
  margin-top: 6px;
}
.countdown .sep { font-family: var(--font-display); font-size: 38px; color: var(--sand); }

/* ===== OUR STORY ===== */
.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  align-items: center;
}
.story-grid .art-panel { aspect-ratio: 4/5; }
.story-grid p { margin: var(--space-2) 0; color: var(--ink); }
@media (max-width: 800px) {
  .story-grid { grid-template-columns: 1fr; }
}

/* ===== TIMELINE ===== */
.timeline { max-width: 480px; margin: 0 auto; }
.timeline-item {
  display: flex;
  gap: var(--space-3);
  position: relative;
  padding-bottom: var(--space-4);
}
.timeline-item:last-child { padding-bottom: 0; }
.timeline-item::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 16px;
  bottom: -16px;
  width: 1px;
  background: var(--sand);
}
.timeline-item:last-child::before { display: none; }
.timeline-dot {
  width: 11px; height: 11px; border-radius: 50%;
  background: var(--dusty-rose);
  flex-shrink: 0;
  margin-top: 4px;
}
.timeline-item .t-title { font-family: var(--font-display); font-size: 20px; color: var(--ink); }
.timeline-item .t-date { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--dusty-rose); margin-top: 2px; }
.timeline-item .t-desc { font-size: 14px; color: var(--taupe); margin-top: 4px; }

/* ===== CARDS (travel / guide) ===== */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-3);
}
.card {
  background: var(--ivory);
  border: var(--border);
}
.card .art-panel { aspect-ratio: 4/3; }
.card-body { padding: var(--space-3); }
.card-body .eyebrow { display: block; margin-bottom: 4px; }
.card-body h3 { font-size: 20px; color: var(--ink); font-family: var(--font-display); }
.card-body p { font-size: 13px; color: var(--taupe); margin: var(--space-1) 0 var(--space-2); }
.text-link {
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--dusty-rose);
  text-decoration: none;
  border-bottom: 1px solid var(--dusty-rose);
  padding-bottom: 2px;
}

/* ===== BUTTONS & INPUTS ===== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: var(--radius);
  cursor: pointer;
  font-family: var(--font-body);
  font-weight: 600;
}
.btn-primary { background: var(--dusty-rose); color: var(--ivory); border: 1px solid var(--dusty-rose); }
.btn-primary:hover { background: var(--dusty-rose-dark); }
.btn-secondary { background: transparent; color: var(--dusty-rose); border: 1px solid var(--dusty-rose); }
.btn-secondary:hover { background: rgba(139,62,74,0.06); }

.field { text-align: left; margin-bottom: var(--space-2); }
.field label { display: block; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--taupe); margin-bottom: 6px; }
.field input, .field select, .field textarea {
  width: 100%;
  padding: 12px 14px;
  border: var(--border);
  background: var(--ivory);
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--ink);
}
.field input:focus, .field select:focus, .field textarea:focus {
  outline: 2px solid var(--dusty-rose);
  outline-offset: 1px;
}

/* ===== RSVP ===== */
.rsvp-panel {
  max-width: 520px;
  margin: 0 auto;
  background: var(--sand);
  border: var(--border);
  padding: var(--space-4);
}
.rsvp-note {
  font-size: 13px;
  color: var(--taupe);
  text-align: center;
  margin-top: var(--space-2);
}

/* ===== REGISTRY ===== */
.registry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-3);
  text-align: center;
}
.registry-item {
  border: var(--border);
  padding: var(--space-4) var(--space-2);
}
.registry-item .display { font-size: 22px; margin-bottom: var(--space-1); }

/* ===== GALLERY ===== */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-1);
}
.gallery-grid .art-panel { aspect-ratio: 1/1; }
@media (max-width: 600px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
}

/* ===== FAQ ===== */
.faq-item { border-bottom: var(--border); padding: var(--space-3) 0; max-width: 700px; margin: 0 auto; }
.faq-item h3 { font-size: 18px; color: var(--ink); font-family: var(--font-display); margin-bottom: 6px; }
.faq-item p { font-size: 14px; color: var(--taupe); margin: 0; }

/* ===== FOOTER ===== */
footer.site-footer {
  background: var(--dusty-rose);
  color: var(--ivory);
  text-align: center;
  padding: var(--space-3);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: center;
}
footer.site-footer .sep { opacity: 0.6; }

/* ===== EDIT-ME MARKERS ===== */
[data-edit] { position: relative; }
