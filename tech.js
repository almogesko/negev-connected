/* שכבת הייטק מונפשת: מעגלים חשמליים, קוד נופל ותגיות תחום. נטענת על עמוד הכניסה ועל הפתיח */
(function(){
 if(window.__negevTech)return;window.__negevTech=1;
 var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
 var TAGS=[['AI',.12,.20],['סייבר',.30,.12],['מו״פ',.09,.56],['סטארטאפים',.33,.80],['IoT',.46,.42],['Cloud',.52,.66]];
 var CODE=['const negev = connect(partners)','if (idea) build()','0x4E47 · 0xB7','{ innovate: true }','await deploy("beer-sheva")','npm run grow','git commit -m "bridge"','SELECT * FROM opportunities'];
 function seeded(s){return function(){s=(s*1664525+1013904223)>>>0;return s/4294967296}}
function importCrater(){
  return Promise.all([0,1,2].map(function(i){return fetch('crater/ep'+i+'.dat').then(function(r){if(!r.ok)throw 0;return r.arrayBuffer()})})).then(function(bufs){
   var n=bufs.reduce(function(a,b){return a+b.byteLength},0),all=new Uint8Array(n),o=0;
   bufs.forEach(function(b){all.set(new Uint8Array(b),o);o+=b.byteLength});
   return new Response(new Blob([all]).stream().pipeThrough(new DecompressionStream('gzip'))).text();
  }).then(function(src){
   src=src.replace(/(["'])\.\/([\w.\-]+\.js)\1/g,function(m,q,f){return q+new URL('crater/'+f,document.baseURI).href+q});
   return import(URL.createObjectURL(new Blob([src],{type:'text/javascript'})));
  });
 }
 function loadCrater(el){
  if(!document.getElementById('craterCss')){var l=document.createElement('link');l.id='craterCss';l.rel='stylesheet';l.href='crater/entry.css';document.head.appendChild(l);}
  importCrater().then(function(m){if(document.contains(el)){m.mount(el,{colors:['#06122b','#f2d9b3','#c2553a','#e9a649'],quality:matchMedia('(pointer: coarse)').matches?'low':undefined});[250,900,2200,3500,5000,7000,9000].forEach(function(d){setTimeout(function(){window.dispatchEvent(new Event('resize'))},d)})}}).catch(function(){});
 }
 function mount(host){
  if(!host||host.__tech)return;host.__tech=1;
  var cv=document.createElement('canvas');cv.className='tech-cv';cv.setAttribute('aria-hidden','true');
  var cr=document.createElement('div');cr.className='cr';cr.setAttribute('aria-hidden','true');
  if(host.id==='gate'){var col=host.querySelector('.col');host.insertBefore(cr,col);host.insertBefore(cv,col);}else{host.appendChild(cr);host.appendChild(cv);}
  loadCrater(cr);
  var cx=cv.getContext('2d'),W=0,H=0,paths=[],cols=[],raf=0,t0=performance.now(),last=0;
  function build(){
   var d=Math.min(2,devicePixelRatio||1);W=cv.clientWidth;H=cv.clientHeight;if(!W||!H)return;
   cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);
   var r=seeded(11),g=Math.max(26,W/30),n=W<640?6:10;paths=[];
   for(var i=0;i<n;i++){
    var x=Math.round((r()*.62*W)/g)*g,y=Math.round((r()*.9*H+H*.05)/g)*g,pts=[[x,y]],dir=r()<.5?0:1;
    for(var k=0;k<3+Math.floor(r()*2);k++){
     var len=(2+Math.floor(r()*4))*g,sg=r()<.5?-1:1;
     if(dir===0)x+=len*(r()<.7?1:-1);else y+=len*sg;
     if(k%2===1){var dg=g*(1+Math.floor(r()*2));x+=dg;y+=dg*sg}
     pts.push([x,y]);dir=1-dir;
    }
    var L=0,seg=[];for(var j=1;j<pts.length;j++){var l=Math.hypot(pts[j][0]-pts[j-1][0],pts[j][1]-pts[j-1][1]);seg.push(l);L+=l}
    paths.push({p:pts,seg:seg,L:L,o:r(),s:.05+r()*.07});
   }
   cols=[];var cn=W<640?3:7;for(var c=0;c<cn;c++)cols.push({x:(.04+.52*c/cn)*W,y:r()*H,sp:14+r()*22,t:CODE[Math.floor(r()*CODE.length)]});
  }
  function at(p,u){var r=u*p.L;for(var i=0;i<p.seg.length;i++){if(r<=p.seg[i]||i===p.seg.length-1){var k=p.seg[i]?Math.min(1,r/p.seg[i]):0;return[p.p[i][0]+(p.p[i+1][0]-p.p[i][0])*k,p.p[i][1]+(p.p[i+1][1]-p.p[i][1])*k]}r-=p.seg[i]}return p.p[p.p.length-1]}
  function pill(txt,x,y,a){
   cx.font='600 '+(W<640?12:15)+'px Heebo,Arial,sans-serif';cx.direction='rtl';cx.textAlign='center';
   var w=cx.measureText(txt).width+22,h=30;cx.globalAlpha=a;
   cx.beginPath();cx.roundRect?cx.roundRect(x-w/2,y-h/2,w,h,13):cx.rect(x-w/2,y-h/2,w,h);
   cx.fillStyle='rgba(6,20,32,.78)';cx.fill();cx.strokeStyle='rgba(43,212,230,.7)';cx.lineWidth=1;cx.stroke();
   cx.fillStyle='#d9fbff';cx.textBaseline='middle';cx.fillText(txt,x,y+1);cx.globalAlpha=1;
  }
  function draw(now){
   var t=(now-t0)/1000;cx.clearRect(0,0,W,H);
   var reveal=rm?1:Math.min(1,t/2.2);
   cx.lineCap='round';cx.lineJoin='round';
   for(var i=0;i<paths.length;i++){
    var p=paths[i];cx.beginPath();cx.moveTo(p.p[0][0],p.p[0][1]);var rem=p.L*reveal;
    for(var j=1;j<p.p.length&&rem>0;j++){var l=p.seg[j-1],k=Math.min(1,rem/l);cx.lineTo(p.p[j-1][0]+(p.p[j][0]-p.p[j-1][0])*k,p.p[j-1][1]+(p.p[j][1]-p.p[j-1][1])*k);rem-=l}
    cx.strokeStyle='rgba(43,212,230,.38)';cx.lineWidth=1.2;cx.stroke();
    if(reveal>.97){
     var e=p.p[p.p.length-1],s=p.p[0];cx.fillStyle='rgba(43,212,230,.9)';
     [s,e].forEach(function(q){cx.beginPath();cx.arc(q[0],q[1],2.6,0,6.283);cx.fill();cx.beginPath();cx.arc(q[0],q[1],6,0,6.283);cx.strokeStyle='rgba(43,212,230,.35)';cx.stroke()});
     if(!rm){var u=(t*p.s+p.o)%1,q=at(p,u);cx.beginPath();cx.arc(q[0],q[1],2.4,0,6.283);cx.fillStyle='#fff';cx.shadowColor='#2bd4e6';cx.shadowBlur=12;cx.fill();cx.shadowBlur=0}
    }
   }
   cx.font='11px ui-monospace,Menlo,monospace';cx.direction='ltr';cx.textAlign='left';cx.textBaseline='alphabetic';
   for(var c=0;c<cols.length;c++){var o=cols[c],y=rm?o.y:(o.y+t*o.sp)%(H+40)-20;var a=.22+.2*Math.sin((y/H)*Math.PI);cx.fillStyle='rgba(120,235,248,'+Math.max(0,a).toFixed(2)+')';cx.fillText(o.t,o.x,y)}
   var tn=0;
   for(var m=0;m<tn;m++){var tg=TAGS[m],by=rm?0:Math.sin(t*.9+m*1.3)*3.5;pill(tg[0],tg[1]*W,tg[2]*H+by,Math.min(1,Math.max(0,reveal*1.6-.4)))}
  }
  function loop(now){if(now-last>=33){last=now;draw(now)}raf=requestAnimationFrame(loop)}
  function start(){cancelAnimationFrame(raf);build();if(!W)return;if(rm)draw(performance.now());else{t0=performance.now();raf=requestAnimationFrame(loop)}}
  start();
  new ResizeObserver(function(){start()}).observe(host);
  new MutationObserver(function(){if(!document.contains(host)){cancelAnimationFrame(raf)}}).observe(document.documentElement,{childList:true,subtree:true});
 }
 function scan(){mount(document.getElementById('gate'));mount(document.querySelector('.intro'))}
 new MutationObserver(scan).observe(document.documentElement,{childList:true,subtree:true});
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',scan);else scan();
})();
