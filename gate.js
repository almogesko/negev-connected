/* שער כניסה: הנתונים מוצפנים ב-secure.txt ונפתחים רק עם הקוד */
(function(){
 var SK='negev-gate-v1',resolve,reject;
 window.SECURE=new Promise(function(a,b){resolve=a;reject=b});
 var norm=function(s){return String(s||'').toUpperCase().replace(/[^A-Z0-9]/g,'')};
 async function decrypt(pass,buf){
  var enc=new TextEncoder(),salt=buf.slice(8,16),ct=buf.slice(16);
  var base=await crypto.subtle.importKey('raw',enc.encode(pass),'PBKDF2',false,['deriveBits']);
  var bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt:salt,iterations:200000,hash:'SHA-256'},base,384);
  var key=await crypto.subtle.importKey('raw',bits.slice(0,32),'AES-CBC',false,['decrypt']);
  var pt=await crypto.subtle.decrypt({name:'AES-CBC',iv:bits.slice(32,48)},key,ct);
  return JSON.parse(new TextDecoder().decode(pt));
 }
 var blob=null;
 async function load(){
  if(blob)return blob;
  var r=await fetch('secure.txt',{cache:'no-cache'});if(!r.ok)throw Error('bin');
  var t=(await r.text()).replace(/\s+/g,'');
  blob=Uint8Array.from(atob(t),function(c){return c.charCodeAt(0)});
  return blob;
 }
 function remember(p){try{sessionStorage.setItem(SK,p)}catch(e){}}
 function recall(){try{return sessionStorage.getItem(SK)||''}catch(e){return ''}}
 async function attempt(p){var d=await decrypt(norm(p),await load());remember(norm(p));return d}
 function ui(){
  var st=document.createElement('style');
  st.textContent='#gate{position:fixed;inset:0;z-index:99999;display:grid;align-items:center;padding:20px;background:#000;font-family:Heebo,system-ui,sans-serif;direction:rtl;color:#f5f5f7;overflow:hidden}#gate .bg{position:absolute;inset:0 auto 0 0;width:64%;background:url(photos/negev-night.jpg) 50% 42%/cover no-repeat;-webkit-mask-image:linear-gradient(to left,transparent 0%,#000 42%);mask-image:linear-gradient(to left,transparent 0%,#000 42%);animation:gd 28s ease-in-out infinite alternate}@keyframes gd{from{transform:scale(1.03) translate(-1%,0)}to{transform:scale(1.13) translate(1.5%,-2%)}}#gate svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}#gate svg path{fill:none;stroke:#2bd4e6;stroke-width:1.2;opacity:.5;stroke-dasharray:6 10;animation:gf 6s linear infinite}@keyframes gf{to{stroke-dashoffset:-160}}#gate .col{position:relative;width:min(420px,100%);margin-inline-start:6vw;display:grid;gap:16px}#gate .mark{width:44px;height:44px;border-radius:12px;background:#2bd4e6;color:#02242a;font-weight:800;font-size:24px;display:grid;place-items:center;box-shadow:0 0 28px #2bd4e655}#gate h1{margin:0;font-size:clamp(2.6rem,7vw,4.2rem);font-weight:300;line-height:1.04;letter-spacing:-.02em}#gate h1 b{font-weight:800;background:linear-gradient(90deg,#2bd4e6,#e8f9ff);-webkit-background-clip:text;background-clip:text;color:transparent}#gate p{margin:0;color:#a1a1a6;line-height:1.6}#gate form{display:grid;gap:10px;padding:16px;border-radius:22px;background:#1e2024a0;border:1px solid #ffffff24;backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px)}#gate form #gateCode{font:inherit;font-size:1.1rem;letter-spacing:.3em;text-align:center;direction:ltr;padding:14px;border:1px solid #ffffff2e!important;border-radius:12px;background:#0007!important;color:#fff!important;outline:none;box-shadow:none}#gate form #gateCode::placeholder{letter-spacing:.04em;color:#8e8e93}#gate form #gateCode:focus{border-color:#2bd4e6!important;box-shadow:0 0 0 3px #2bd4e640}#gate button{font:inherit;font-weight:700;font-size:1rem;padding:14px;border:0;border-radius:12px;background:#2bd4e6;color:#02242a;cursor:pointer}#gate button[disabled]{opacity:.6;cursor:wait}#gate .err{color:#ff9b8a;min-height:1.4em;font-size:.95rem}@media(max-width:760px){#gate{align-items:end;padding-bottom:28px}#gate .bg{width:100%;inset:0 0 38% 0;-webkit-mask-image:linear-gradient(to top,transparent 0%,#000 48%);mask-image:linear-gradient(to top,transparent 0%,#000 48%)}#gate .col{margin-inline-start:0}}@media(prefers-reduced-motion:reduce){#gate .bg,#gate svg path{animation:none}}';
  document.head.appendChild(st);
  var g=document.createElement('div');g.id='gate';
  g.innerHTML='<div class="bg" aria-hidden="true"></div><svg viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true"><path d="M40 420 H220 L300 340 H520"/><path d="M120 120 H260 L340 200 H460"/><path d="M60 300 H180 L240 240 H420 L480 300"/></svg><div class="col"><div class="mark" aria-hidden="true">נ</div><h1>הנגב.<br><b>מחובר.</b></h1><p>מאגר השותפים והמפה של דרום ישראל. פתוח לאנשים שקיבלו קוד כניסה.</p><form autocomplete="off"><input id="gateCode" type="password" inputmode="text" autocapitalize="characters" autocomplete="off" spellcheck="false" placeholder="קוד כניסה" aria-label="קוד כניסה" required><button type="submit">כניסה</button><div class="err" id="gateErr" role="alert"></div></form></div>';
  document.body.appendChild(g);document.documentElement.style.overflow='hidden';
  var f=g.querySelector('form'),inp=g.querySelector('#gateCode'),err=g.querySelector('#gateErr'),btn=g.querySelector('button');
  inp.focus();
  f.addEventListener('submit',async function(e){
   e.preventDefault();err.textContent='';btn.disabled=true;btn.textContent='בודק...';
   try{var d=await attempt(inp.value);g.remove();document.documentElement.style.overflow='';resolve(d)}
   catch(x){err.textContent=x&&x.message==='bin'?'לא ניתן לטעון את הנתונים. נסו שוב.':'הקוד לא נכון. נסו שוב.';btn.disabled=false;btn.textContent='כניסה';inp.select()}
  });
 }
 function start(){
  var p=recall();
  if(p){attempt(p).then(resolve,function(){ui()})}else ui();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
