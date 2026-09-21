(() => {
  'use strict';
  const frame=document.getElementById('room-picker-frame');
  if(!frame) return;
  const raw=window.ROOM_BOOKING_CONFIG?.appUrl;
  if(!raw)return;
  let url;
  try {url=new URL(raw);}catch(_){return;}
  if(url.origin!=='https://script.google.com'||!/^\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url.pathname))return;
  const channel=crypto.randomUUID();
  // A nonce ties the Google-hosted inner frame's handshake to this particular embed.
  window.addEventListener('message',event=>{
    if(!event.data || event.data.type!=='jk-room-ready'||event.data.channel!==channel)return;
    let origin;
    try{origin=new URL(event.origin);}catch(_){return;}
    if(origin.protocol!=='https:' || !(origin.hostname==='script.google.com'||origin.hostname==='script.googleusercontent.com'||origin.hostname.endsWith('-script.googleusercontent.com')))return;
    if(event.source)event.source.postMessage({type:'jk-room-trusted',channel},event.origin);
  });
  function revealPicker(){
  url.searchParams.set('channel',channel);
  frame.src=url.href; frame.hidden=false;
  document.getElementById('room-picker-pending').hidden=true;
  const standalone=new URL(raw);standalone.search='';
  document.getElementById('room-picker-link').href=standalone.href;
  document.getElementById('room-picker-launch').hidden=false;
  }
  const main=document.getElementById('main-content');
  if(main?.classList.contains('revealed'))revealPicker();
  else if(main){const observer=new MutationObserver(()=>{if(main.classList.contains('revealed')){observer.disconnect();revealPicker();}});observer.observe(main,{attributes:true,attributeFilter:['class']});}
})();
