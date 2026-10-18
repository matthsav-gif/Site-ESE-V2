/* ESE · Site V3 · interactions légères */
(function(){
  // Menu plein écran
  var ov=document.getElementById('ov');
  document.querySelectorAll('[data-open]').forEach(function(b){b.addEventListener('click',function(){ov.classList.add('open');b.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';});});
  document.querySelectorAll('[data-close]').forEach(function(b){b.addEventListener('click',close);});
  ov.querySelectorAll('nav a').forEach(function(a){a.addEventListener('click',close);});
  function close(){ov.classList.remove('open');document.body.style.overflow='';document.querySelectorAll('[data-open]').forEach(function(b){b.setAttribute('aria-expanded','false')});}
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});

  // Apparition au défilement
  var rv=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    rv.forEach(function(el){io.observe(el)});
  } else rv.forEach(function(el){el.classList.add('in')});

  // Filtres références
  var fb=document.querySelectorAll('[data-filter]');
  fb.forEach(function(b){b.addEventListener('click',function(){
    var f=b.getAttribute('data-filter');
    fb.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
    document.querySelectorAll('#reflist .ref').forEach(function(r){r.classList.toggle('hide',f!=='all'&&r.getAttribute('data-f')!==f)});
  });});

  // Références sans fiche : la photo s'ouvre en grand
  var zs=document.querySelectorAll('[data-zoom]');
  if(zs.length && window.HTMLDialogElement){
    var en=document.documentElement.lang==='en';
    var d=document.createElement('dialog');d.className='zoom';
    d.innerHTML='<img alt=""><p><span></span><button type="button">'+(en?'Close ✕':'Fermer ✕')+'</button></p>';
    document.body.appendChild(d);
    var im=d.querySelector('img'),cap=d.querySelector('span');
    d.querySelector('button').addEventListener('click',function(){d.close();});
    d.addEventListener('click',function(e){if(e.target===d)d.close();});
    zs.forEach(function(b){b.addEventListener('click',function(){im.src=b.getAttribute('data-zoom');im.alt=b.getAttribute('data-cap')||'';cap.textContent=b.getAttribute('data-cap')||'';d.showModal();});});
  }

})();
