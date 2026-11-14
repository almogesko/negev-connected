/* רקע עמוד הכניסה: מפת הנגב בתלת־ממד חיה (אותו מנוע של דף המפה), בלי סמנים */
(function(){
 const IL=[[34.2399,31.1771],[34.2793,31.0718],[34.311,30.987],[34.3495,30.8994],[34.4005,30.7833],[34.4616,30.6445],[34.4825,30.5685],[34.4848,30.5264],[34.493,30.5034],[34.5109,30.4819],[34.5173,30.4757],[34.5163,30.4718],[34.5069,30.4428],[34.5048,30.4203],[34.5086,30.4016],[34.5196,30.3862],[34.5743,30.3446],[34.5821,30.3346],[34.6141,30.2546],[34.6731,30.1071],[34.7122,30.01],[34.7146,30.0052],[34.7153,30.0028],[34.7156,30.0005],[34.7151,29.9942],[34.722,29.9352],[34.7667,29.828],[34.8054,29.7354],[34.8302,29.6366],[34.8284,29.5671],[34.8368,29.538],[34.8608,29.4943],[34.8775,29.4723],[34.8935,29.4705],[34.9024,29.4697],[34.9195,29.4719],[34.9318,29.4846],[34.9343,29.4927],[34.9365,29.4965],[34.9431,29.5052],[34.9605,29.5242],[34.9692,29.5366],[34.975,29.5544],[34.9793,29.5815],[34.9849,29.5992],[34.998,29.6176],[35.0093,29.6474],[35.0147,29.7044],[35.0214,29.7263],[35.068,29.8363],[35.0731,29.8604],[35.074,29.9211],[35.0804,29.9511],[35.083,29.9564],[35.088,29.9644],[35.0936,29.9781],[35.0944,29.9912],[35.1041,30.025],[35.1461,30.0792],[35.1648,30.1189],[35.165,30.1581],[35.1446,30.2192],[35.1448,30.2406],[35.1515,30.2562],[35.1608,30.3078],[35.1652,30.3167],[35.1718,30.3267],[35.179,30.3413],[35.1821,30.3618],[35.1777,30.3835],[35.1622,30.406],[35.1595,30.4106],[35.1596,30.4262],[35.1765,30.4649],[35.1814,30.4894],[35.2235,30.6088],[35.2821,30.7117],[35.2829,30.7138],[35.291,30.7388],[35.2956,30.7643],[35.298,30.7725],[35.3022,30.7804],[35.3072,30.7852],[35.3258,30.8],[35.3354,30.816],[35.34,30.8436],[35.3395,30.8664],[35.3412,30.8838],[35.3503,30.8998],[35.3599,30.9073],[35.3892,30.932],[35.4045,30.9579],[35.405,30.9925],[35.4102,31.0167],[35.4573,31.0969],[35.4632,31.1331],[35.4547,31.1672],[35.4388,31.1943],[35.4289,31.2128],[35.4204,31.2357],[35.4155,31.2549],[35.4254,31.2719],[35.4412,31.2965],[35.4426,31.3317],[35.4363,31.3341],[35.4527,31.3511],[35.472,31.395],[35.4768,31.4215],[35.4771,31.433],[35.4765,31.5003],[35.4638,31.5111],[35.3849,31.5064],[35.3221,31.476],[35.2143,31.3989],[35.1619,31.382],[35.0391,31.3832],[34.9763,31.3758],[34.9507,31.3682],[34.9274,31.3649],[34.9079,31.3672],[34.8946,31.3752],[34.8871,31.3957],[34.8992,31.4201],[34.9453,31.4868],[34.9524,31.5251],[34.9528,31.5532],[34.9561,31.5751],[34.9703,31.598],[34.9711,31.5996],[34.9856,31.6144],[35.07,31.66],[35.1053,31.6863],[35.1283,31.7035],[35.1363,31.7161],[35.1445,31.7178],[35.1471,31.7148],[35.1583,31.7139],[35.1732,31.7011],[35.2013,31.7036],[35.2212,31.6952],[35.227,31.6994],[35.2153,31.702],[35.2184,31.6974],[35.2366,31.6894],[35.2573,31.6975],[35.2615,31.7091],[35.2664,31.7133],[35.2693,31.7273],[35.2723,31.7284],[35.2826,31.7457],[35.2761,31.7684],[35.271,31.7715],[35.2725,31.7666],[35.2755,31.7738],[35.2829,31.7909],[35.2778,31.8016],[35.2784,31.8045],[35.2755,31.8084],[35.2774,31.8079],[35.2841,31.8319],[35.2658,31.848],[35.2618,31.8476],[35.2715,31.8328],[35.2771,31.8408],[35.2662,31.8571],[35.2578,31.8628],[35.2441,31.8651],[35.2402,31.8614],[35.2454,31.8591],[35.2456,31.8589],[35.2464,31.87],[35.2418,31.88],[35.1871,31.88],[35.1853,31.8665],[35.1912,31.8549],[35.1938,31.8478],[35.1963,31.837],[35.1962,31.8248],[35.1991,31.8312],[35.2126,31.8388],[35.2013,31.8459],[35.1879,31.8466],[35.1696,31.8394],[35.1624,31.817],[35.1667,31.808],[35.1709,31.8216],[35.1748,31.8275],[35.1445,31.8328],[35.1263,31.8442],[35.116,31.8436],[35.1113,31.8458],[35.102,31.8626],[35.0814,31.8735],[35.0633,31.8745],[35.0501,31.8724],[35.0347,31.865],[35.0185,31.8506],[35.0099,31.8491],[35.0021,31.8485],[34.9876,31.8499],[34.9964,31.8396],[34.995,31.8257],[35.0026,31.8303],[35.0083,31.8364],[35.0097,31.8363],[35.038,31.8386],[35.0523,31.8524],[35.0552,31.88],[34.6466,31.88],[34.5932,31.7769],[34.5869,31.7701],[34.4982,31.6395],[34.4729,31.6116],[34.462,31.5777],[34.5102,31.541],[34.5361,31.5384],[34.5163,31.5362],[34.4891,31.5133],[34.4903,31.5137],[34.469,31.502],[34.3523,31.406],[34.3266,31.3633],[34.3256,31.3385],[34.3338,31.3057],[34.3333,31.2988],[34.3037,31.2728],[34.2528,31.2405],[34.2291,31.2168]];
 function cloudTex(seed,night){
   const N=512,d=new Uint8Array(N*N*4);let s=seed;const rnd=()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296};
   const G=[];for(let o=0;o<5;o++){const n=4<<o,g=new Float32Array(n*n);for(let i=0;i<n*n;i++)g[i]=rnd();G.push([n,g]);}
   const sm=t=>t*t*(3-2*t);
   for(let y=0;y<N;y++)for(let x=0;x<N;x++){
     let v=0,a=.5,tot=0;
     for(const[n,g]of G){const fx=x/N*n,fy=y/N*n,x0=Math.floor(fx),y0=Math.floor(fy),tx=sm(fx-x0),ty=sm(fy-y0),xa=x0%n,xb=(x0+1)%n,ya=y0%n,yb=(y0+1)%n;
       v+=a*((g[ya*n+xa]*(1-tx)+g[ya*n+xb]*tx)*(1-ty)+(g[yb*n+xa]*(1-tx)+g[yb*n+xb]*tx)*ty);tot+=a;a*=.5;}
     v/=tot;const c=Math.min(1,Math.max(0,(v-.40)*3.4)),k=(y*N+x)*4;
     if(night){d[k]=Math.round(8+(70-8)*c);d[k+1]=Math.round(20+(96-20)*c);d[k+2]=Math.round(40+(140-40)*c);}else{d[k]=Math.round(128+(255-128)*c);d[k+1]=Math.round(190+(255-190)*c);d[k+2]=Math.round(240+(255-240)*c);}d[k+3]=255;
   }
   return{width:N,height:N,data:d};
 }
 var libP=null;
 function loadLib(){return libP||(libP=new Promise(function(ok,no){
  var l=document.createElement('link');l.rel='stylesheet';l.href='vendor/maplibre-gl.css';document.head.appendChild(l);
  var s=document.createElement('script');s.src='vendor/maplibre-gl.js';s.onload=ok;s.onerror=no;document.head.appendChild(s);}))}
 function mount(el){
  return loadLib().then(function(){
   var world=[[-180,-85],[180,-85],[180,85],[-180,85],[-180,-85]];
   var hole=IL.slice().reverse().concat([IL[IL.length-1]]);
   var edge=IL.concat([IL[0]]);
   var narrow=innerWidth<760,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;el.style.opacity=0;el.style.transition='opacity 1.4s ease';
   var m=new maplibregl.Map({container:el,center:[35.0,30.75],zoom:narrow?6.45:7.2,pitch:58,bearing:-8,interactive:false,pixelRatio:Math.min(window.devicePixelRatio||1,1.5),attributionControl:false,fadeDuration:0,
    style:{version:8,sources:{
      osm:{type:'raster',tiles:['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],tileSize:256,maxzoom:18},
      dem:{type:'raster-dem',tiles:['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'],encoding:'terrarium',tileSize:256,maxzoom:13},
      demhs:{type:'raster-dem',tiles:['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'],encoding:'terrarium',tileSize:256,maxzoom:13},
      mask:{type:'geojson',data:{type:'Feature',properties:{},geometry:{type:'Polygon',coordinates:[world,hole]}}},
      border:{type:'geojson',data:{type:'Feature',properties:{},geometry:{type:'LineString',coordinates:edge}}}},
     layers:[{id:'bg',type:'background',paint:{'background-color':'#06101e'}},
      {id:'osm',type:'raster',source:'osm',paint:{'raster-saturation':.16,'raster-contrast':.18,'raster-brightness-min':.03,'raster-resampling':'linear'}},
      {id:'hill',type:'hillshade',source:'demhs',paint:{'hillshade-exaggeration':.62,'hillshade-shadow-color':'#2b2014','hillshade-highlight-color':'#fff1cf','hillshade-illumination-direction':305,'hillshade-illumination-anchor':'map'}},
      {id:'b-glow',type:'line',source:'border',layout:{'line-join':'round'},paint:{'line-color':'#bff6ff','line-width':10,'line-blur':8,'line-opacity':.55}},
      {id:'b-line',type:'line',source:'border',layout:{'line-join':'round'},paint:{'line-color':'#e8f8ff','line-width':1.6}}]}});
   var started=false;function init(){if(started)return;started=true;
    m.setTerrain({source:'dem',exaggeration:2.2});
    m.addImage('cloudA',cloudTex(7,true));
    m.addLayer({id:'mask',type:'fill',source:'mask',paint:{'fill-pattern':'cloudA'}},'b-glow');
    setTimeout(function(){el.style.opacity=1},400);var host=el.parentNode,w=host.clientWidth;
    m.setPadding(narrow?{bottom:Math.round(host.clientHeight*.34),top:0,left:0,right:0}:{right:Math.round(w*.34),top:0,bottom:0,left:0});
    if(!rm){var t0=performance.now();(function loop(ts){if(!document.contains(el)){m.remove();return}
     var t=(ts-t0)/1000;m.setBearing(-8+Math.sin(t*.12)*22);m.setZoom((narrow?6.45:7.2)+Math.sin(t*.07)*.18);requestAnimationFrame(loop)})(t0)}
   }
   if(m.style&&m.style._loaded)init();else{m.once('style.load',init);m.once('load',init)}
   return m;
  });
 }
 window.NegevHeroMap={mount:mount};
})();
