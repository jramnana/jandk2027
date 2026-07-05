const SITE_PASSWORD = "ourday2027";
const WEDDING_DATE = "2027-05-28T18:00:00";

(function invite(){
  const inviteEl=document.getElementById('invite');
  const mainContent=document.getElementById('main-content');
  const form=document.getElementById('gate-form');
  const input=document.getElementById('gate-input');
  const error=document.getElementById('gate-error');
  const closedSeal=document.getElementById('closed-seal');
  const wax=document.getElementById('wax-button');

  if(new URLSearchParams(window.location.search).get('reset') === '1'){
    sessionStorage.removeItem('wedding-unlocked');
  }

  if(wax){ wax.addEventListener('click',()=>input.focus()); }
  if(closedSeal){ closedSeal.addEventListener('click',()=>startOpen()); }

  if(sessionStorage.getItem('wedding-unlocked')==='true'){
    inviteEl.classList.add('opened');
    mainContent.classList.add('revealed');
    document.body.classList.remove('locked');
    return;
  }

  let hasOpened = false;
  function startOpen(){
    if(hasOpened) return;
    hasOpened = true;
    inviteEl.classList.add('invite-ready');
    setTimeout(()=>{
      form.setAttribute('aria-hidden','false');
      input.focus({preventScroll:true});
    }, 850);
  }

  // Automatically open after load.
  window.setTimeout(startOpen, 900);

  form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(input.value.trim().toLowerCase()===SITE_PASSWORD.toLowerCase()){
      sessionStorage.setItem('wedding-unlocked','true');
      error.textContent='';
      inviteEl.classList.add('opening');

      setTimeout(()=>{
        inviteEl.classList.add('opened');
        mainContent.classList.add('revealed');
        document.body.classList.remove('locked');
        document.getElementById('hero').scrollIntoView({behavior:'smooth'});
      },950);
    }else{
      error.textContent="That's not quite it — try again.";
    }
  });
})();

(function countdown(){
  const target=new Date(WEDDING_DATE).getTime();
  const els={d:document.getElementById('cd-days'),h:document.getElementById('cd-hours'),m:document.getElementById('cd-mins'),s:document.getElementById('cd-secs')};
  if(!els.d)return;

  function tick(){
    const diff=target-Date.now();
    if(diff<=0){els.d.textContent=els.h.textContent=els.m.textContent=els.s.textContent='0';return;}
    els.d.textContent=Math.floor(diff/86400000);
    els.h.textContent=String(Math.floor((diff%86400000)/3600000)).padStart(2,'0');
    els.m.textContent=String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
    els.s.textContent=String(Math.floor((diff%60000)/1000)).padStart(2,'0');
  }

  tick();
  setInterval(tick,1000);
})();

(function nav(){
  const toggle=document.getElementById('nav-toggle');
  const menu=document.getElementById('nav-menu');
  if(!toggle||!menu)return;

  toggle.addEventListener('click',()=>menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>menu.classList.remove('open')));
})();

(function rsvp(){
  const form=document.getElementById('rsvp-form');
  const confirm=document.getElementById('rsvp-confirm');
  if(!form)return;

  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    form.style.display='none';
    confirm.style.display='block';
  });
})();
