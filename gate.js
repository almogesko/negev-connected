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
  st.textContent='#gate{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:20px;background:linear-gradient(180deg,#0f2f26e6,#16251fee),url(photos/ramon-3.jpg) center/cover;font-family:Heebo,system-ui,sans-serif;direction:rtl}#gate form{width:min(420px,100%);background:#fffcf6;color:#16251f;border-radius:22px;padding:28px 24px;box-shadow:0 30px 80px #0006;display:grid;gap:14px;text-align:center}#gate .mark{width:48px;height:48px;margin:0 auto;border-radius:14px;background:#e3a24f;color:#0f2f26;font-weight:800;font-size:26px;display:grid;place-items:center}#gate h1{margin:0;font-size:1.6rem}#gate p{margin:0;color:#4b5b54;line-height:1.6}#gate input{font:inherit;font-size:1.15rem;letter-spacing:.12em;text-align:center;direction:ltr;padding:13px;border:1.5px solid #e5dac5;border-radius:12px;background:#fff;color:#16251f}#gate input:focus{outline:3px solid #e3a24f66;border-color:#2f7a5f}#gate button{font:inherit;font-weight:700;padding:13px;border:0;border-radius:12px;background:#0f2f26;color:#fff;cursor:pointer}#gate button[disabled]{opacity:.6;cursor:wait}#gate .err{color:#a3321f;min-height:1.4em;font-size:.95rem}';
  document.head.appendChild(st);
  var g=document.createElement('div');g.id='gate';
  g.innerHTML='<form autocomplete="off"><div class="mark" aria-hidden="true">נ</div><h1>נגב מחובר</h1><p>האתר פתוח לאנשים שקיבלו קוד כניסה.</p><input id="gateCode" type="password" inputmode="text" autocapitalize="characters" autocomplete="off" spellcheck="false" placeholder="קוד כניסה" aria-label="קוד כניסה" required><button type="submit">כניסה</button><div class="err" id="gateErr" role="alert"></div></form>';
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
