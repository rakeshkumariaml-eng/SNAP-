function dragonClick(){if(typeof catClick==='function'){catClick();}else{var el=document.querySelector('.dragon-wrap');if(el){el.style.transform='scale(1.15) rotate(-5deg)';setTimeout(function(){el.style.transform='';},300);}}}
function setMode(m){
  var b=document.body;
  b.classList.remove('mobile-mode','desktop-force');
  if(m==='mobile'){b.classList.add('mobile-mode');}else{b.classList.add('desktop-force');}
  document.getElementById('modeDesktop').className=m==='desktop'?'mode-btn active':'mode-btn';
  document.getElementById('modeMobile').className=m==='mobile'?'mode-btn active':'mode-btn';
}
(function(){setMode('desktop');})();
