/* קולאז' תמונות בסגנון ההזמנה: מדבר, פיתוח ומעבדה. נטען על עמוד הכניסה ועל הפתיח */
(function(){
 if(window.__negevTech)return;window.__negevTech=1;
 function mount(host){
  if(!host||host.__tech)return;host.__tech=1;
  var hp=document.createElement('div');hp.className='hp';hp.setAttribute('aria-hidden','true');
  hp.innerHTML='<img src="photos/hero-desert.jpg" alt="" decoding="async"><img src="photos/hero-tech.jpg" alt="" decoding="async"><img src="photos/hero-lab.jpg" alt="" decoding="async">';
  var cr=document.createElement('div');cr.className='hero-credit';cr.textContent='Photos: Unsplash';
  if(host.id==='gate'){var col=host.querySelector('.col');host.insertBefore(hp,col);host.appendChild(cr);}else{host.appendChild(hp);host.appendChild(cr);}
 }
 function scan(){mount(document.getElementById('gate'));mount(document.querySelector('.intro'))}
 new MutationObserver(scan).observe(document.documentElement,{childList:true,subtree:true});
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',scan);else scan();
})();
