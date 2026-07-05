/* Project Paros — two-scene invite with live text */
:root{
  --ivory:#FBF8F4;
  --stone:#E7E2DA;
  --soft-blush:#F3D8DC;
  --dusty-rose:#B86773;
  --deep-rose:#8B3E4A;
  --taupe:#6B6156;
  --ink:#2D2926;
  --line:rgba(107,97,86,.22);
  --display:'Cormorant Garamond',serif;
  --body:'Inter',sans-serif;
  --s1:8px;--s2:16px;--s3:24px;--s4:40px;--s5:64px;--s6:96px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--ivory);color:var(--ink);font-family:var(--body);font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased}
body.locked{overflow:hidden}
h1,h2,h3{font-family:var(--display);font-weight:400;margin:0;color:var(--deep-rose)}
p{color:var(--taupe)}a{color:inherit}
.eyebrow{margin:0 0 var(--s2);font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:var(--deep-rose);font-weight:600}

.mono{
  display:inline-block;
  background:var(--deep-rose);
  -webkit-mask:url("../assets/monogram.svg") center/contain no-repeat;
  mask:url("../assets/monogram.svg") center/contain no-repeat;
}

#main-content{display:none;opacity:0}
#main-content.revealed{display:block;animation:contentReveal .9s ease forwards}
@keyframes contentReveal{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}

/* INVITE */
.invite{
  position:fixed;
  inset:0;
  z-index:100;
  min-height:100svh;
  overflow:hidden;
  display:grid;
  place-items:center;
  background:var(--ivory);
  transition:opacity .8s ease,visibility .8s ease;
}
.invite.opened{opacity:0;visibility:hidden;pointer-events:none}
.invite picture{position:absolute;inset:0;display:block}
.invite-bg{width:100%;height:100%;object-fit:cover;object-position:center;display:block}

.invite-title{
  position:absolute;
  z-index:4;
  top:4.2svh;
  left:50%;
  transform:translateX(-50%);
  text-align:center;
  color:var(--ink);
  opacity:0;
  transition:opacity .8s ease .75s, transform .8s ease .75s;
}
.invite.invite-ready .invite-title{opacity:1;transform:translateX(-50%) translateY(0)}
.invite-title p,.invite-title span{margin:0;font-size:11px;letter-spacing:.28em;text-transform:uppercase}
.invite-title h1{font-size:36px;letter-spacing:.22em;text-transform:uppercase;color:var(--ink);margin:4px 0}

.invite-art{
  position:relative;
  z-index:2;
  width:min(720px,88vw);
  height:min(760px,80svh);
  margin-top:3svh;
}
.scene-img{
  position:absolute;
  left:50%;
  top:50%;
  max-width:100%;
  max-height:100%;
  object-fit:contain;
  transform:translate(-50%,-50%);
  transition:opacity .9s ease, transform 1.15s cubic-bezier(.2,.8,.2,1), filter .9s ease;
  filter:drop-shadow(0 24px 34px rgba(45,41,38,.18));
}
.scene-closed{
  opacity:1;
  transform:translate(-50%,-45%) scale(.88);
}
.scene-open{
  opacity:0;
  transform:translate(-50%,-45%) scale(.94);
}

/* Text overlay pinned over the blank paper */
.invitation-copy{
  position:absolute;
  z-index:5;
  left:50%;
  top:44.5%;
  transform:translate(-50%,-50%) translateY(18px);
  width:39%;
  text-align:center;
  opacity:0;
  pointer-events:none;
  transition:opacity .8s ease 1s, transform .8s ease 1s;
}
.invite.invite-ready .invitation-copy{
  opacity:1;
  transform:translate(-50%,-50%) translateY(0);
}
.invitation-copy p{
  margin:0 0 6px;
  font-size:10px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color:var(--taupe);
}
.invite-monogram{
  width:235px;
  height:185px;
  margin:16px auto 16px;
  background:var(--deep-rose);
}
.invitation-copy h2{
  font-size:34px;
  letter-spacing:.17em;
  text-transform:uppercase;
  white-space:nowrap;
}
.invitation-copy i{
  display:block;
  width:42px;
  height:1px;
  background:var(--dusty-rose);
  margin:17px auto 20px;
}
.invitation-copy h3{
  font-size:15px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color:var(--deep-rose);
}
.invitation-copy em{
  display:block;
  margin-top:7px;
  font-family:var(--display);
  font-size:16px;
  letter-spacing:.07em;
  line-height:1.45;
  color:var(--taupe);
}

/* Open state */
.invite.invite-ready .scene-closed{
  opacity:0;
  transform:translate(-50%,-49%) scale(.74);
  filter:blur(5px);
}
.invite.invite-ready .scene-open{
  opacity:1;
  transform:translate(-50%,-50%) scale(1);
}

/* Password appears after open */
.gate-form{
  position:absolute;
  z-index:9;
  left:50%;
  bottom:3.2svh;
  transform:translate(-50%,14px);
  width:min(390px,76vw);
  text-align:center;
  opacity:0;
  pointer-events:none;
  transition:opacity .7s ease 1.15s,transform .7s ease 1.15s;
}
.invite.invite-ready .gate-form{
  opacity:1;
  pointer-events:auto;
  transform:translate(-50%,0);
}
.gate-form label{display:block;margin-bottom:10px;font-size:10px;letter-spacing:.24em;text-transform:uppercase;color:var(--deep-rose)}
.gate-row{display:flex;border-bottom:1px solid var(--deep-rose)}
.gate-row input{flex:1;min-width:0;border:0;background:transparent;padding:12px 4px;font-family:var(--display);font-style:italic;font-size:18px;color:var(--ink);outline:none}
.gate-row button{border:0;background:transparent;color:var(--deep-rose);font-size:26px;cursor:pointer}
.gate-error{min-height:18px;margin-top:8px;font-size:12px;color:var(--deep-rose)}

/* Correct password */
.invite.opening .scene-open,
.invite.opening .invitation-copy,
.invite.opening .invite-title{
  opacity:0;
  transform:translate(-50%,-58%) scale(1.04);
  filter:blur(4px);
}
.invite.opening .gate-form{
  opacity:0;
  transform:translate(-50%,20px);
}

/* Nav */
.site-nav{position:sticky;top:0;z-index:20;background:rgba(251,248,244,.9);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.nav-inner{max-width:1180px;margin:0 auto;padding:12px var(--s3);display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;text-decoration:none}.nav-monogram{width:72px;height:54px}
.nav-inner nav{display:flex;gap:var(--s4)}
.nav-inner nav a{text-decoration:none;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--taupe)}
.nav-inner nav a:hover{color:var(--deep-rose)}
.nav-toggle{display:none;background:none;border:0;color:var(--deep-rose);font-size:24px}

/* Hero */
.hero{min-height:90vh;display:grid;place-items:center;padding:var(--s6) var(--s3);text-align:center;background:linear-gradient(rgba(251,248,244,.26),rgba(251,248,244,.74)),url("../assets/background.webp");background-size:cover;background-position:center}
.hero-panel{max-width:820px;padding:var(--s5);background:rgba(251,248,244,.62);backdrop-filter:blur(10px);border:1px solid rgba(139,62,74,.12)}
.hero-monogram{width:280px;height:220px;margin-bottom:var(--s3)}
.hero h1{font-size:clamp(48px,7vw,92px);line-height:.95;letter-spacing:.12em;text-transform:uppercase}
.hero-date{font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink)}
.countdown{display:flex;justify-content:center;gap:var(--s3);align-items:center;margin-top:var(--s4)}
.countdown div{min-width:72px}.countdown strong{display:block;font-family:var(--display);font-weight:400;font-size:38px;color:var(--deep-rose)}.countdown span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:var(--taupe)}.countdown i{height:42px;width:1px;background:rgba(107,97,86,.25)}

/* Content */
section{padding:var(--s6) var(--s3)}
.section-inner{max-width:1180px;margin:0 auto}.narrow{max-width:780px;margin:0 auto;text-align:center}.section-head{text-align:center;max-width:680px;margin:0 auto var(--s5)}
.welcome h2,.section-head h2,.split h2,.rsvp-panel h2{font-size:clamp(40px,6vw,76px);line-height:1}
.soft{background:linear-gradient(180deg,rgba(243,216,220,.24),rgba(251,248,244,1))}
.timeline{display:grid;gap:var(--s3)}
.timeline article{padding:var(--s4);border-left:1px solid rgba(139,62,74,.28);background:rgba(255,255,255,.42)}
.timeline span{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--deep-rose)}
.timeline h3{font-size:clamp(30px,4vw,48px)}
.timeline a{display:inline-block;margin-top:var(--s2);font-size:11px;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;color:var(--deep-rose);border-bottom:1px solid currentColor}
.split{display:grid;grid-template-columns:.9fr 1.1fr;gap:var(--s5)}
.cards{display:grid;gap:var(--s2)}.cards article{padding:var(--s3);border:1px solid var(--line);background:rgba(255,255,255,.48)}.cards h3,.travel-path h3{font-size:30px}
.travel-path{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--s3)}.travel-path article{padding:var(--s3);border-top:1px solid var(--line)}.travel-path span{font-family:var(--display);font-size:42px;color:var(--deep-rose)}
.weather-note{max-width:680px;margin:var(--s5) auto 0;text-align:center}
.rsvp-panel{max-width:620px;margin:0 auto;padding:var(--s5);background:var(--stone);border:1px solid var(--line);text-align:center}
.field{text-align:left;margin-bottom:var(--s2)}.field label{display:block;margin-bottom:6px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--taupe)}
.field input,.field select,.field textarea{width:100%;padding:13px 14px;border:1px solid var(--line);background:var(--ivory);font-family:var(--body)}
.btn{width:100%;padding:14px 24px;border:1px solid var(--deep-rose);background:var(--deep-rose);color:var(--ivory);font-size:12px;letter-spacing:.16em;text-transform:uppercase;cursor:pointer}
#rsvp-confirm{display:none}.site-footer{padding:var(--s3);display:flex;flex-wrap:wrap;gap:var(--s2);justify-content:center;background:var(--deep-rose);color:var(--ivory);font-size:11px;letter-spacing:.16em;text-transform:uppercase}

@media(max-height:780px){
  .invite-title{top:2.2svh}
  .invite-title h1{font-size:30px}
  .invite-art{height:74svh;width:min(620px,84vw);margin-top:0}
  .gate-form{bottom:2svh}
  .invitation-copy{top:43.5%}
  .invite-monogram{width:195px;height:150px;margin:10px auto}
}
@media(max-width:760px){
  .invite-bg{object-position:center top}
  .invite-title{top:2svh}
  .invite-title h1{font-size:24px}
  .invite-title p,.invite-title span{font-size:9px}
  .invite-art{width:94vw;height:min(650px,72svh);margin-top:1svh}
  .scene-closed{transform:translate(-50%,-44%) scale(.82)}
  .scene-open{transform:translate(-50%,-45%) scale(.9)}
  .invite.invite-ready .scene-open{transform:translate(-50%,-48%) scale(1)}
  .invitation-copy{top:40%;width:43%}
  .invitation-copy p{font-size:6.3px;margin-bottom:3px}
  .invite-monogram{width:145px;height:112px;margin:8px auto}
  .invitation-copy h2{font-size:18px}
  .invitation-copy i{margin:9px auto 10px}
  .invitation-copy h3{font-size:10px}
  .invitation-copy em{font-size:11px}
  .gate-form{bottom:2svh;width:76vw}.gate-row input{font-size:16px}
  .nav-toggle{display:block}.nav-inner nav{display:none;position:absolute;top:100%;left:0;right:0;padding:var(--s3);background:var(--ivory);border-bottom:1px solid var(--line);flex-direction:column;gap:var(--s2)}.nav-inner nav.open{display:flex}
  .hero{min-height:78vh}.hero-panel{padding:var(--s4) var(--s3)}.hero-monogram{width:220px;height:170px}.countdown{gap:10px}.countdown div{min-width:48px}.countdown strong{font-size:28px}.countdown i{height:32px}
  section{padding:var(--s5) var(--s3)}.split,.travel-path{grid-template-columns:1fr}.rsvp-panel{padding:var(--s4) var(--s3)}
}
