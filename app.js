document.documentElement.classList.add('js');
  (function(){
    const els = document.querySelectorAll('.section-head, .explore-card, .service-card, .perk, .occ, .process-item, .malha-sub, .gallery-item, .faq-list details, .location > div, .store-grid > *');
    els.forEach(el => el.classList.add('reveal'));
    if(!('IntersectionObserver' in window)){ els.forEach(el => el.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:0.08, rootMargin:'0px 0px -40px 0px'});
    els.forEach((el,i) => { el.style.transitionDelay = ((i % 4) * 70) + 'ms'; io.observe(el); });
  })();
  /* Regua lateral (desktop): cada marca leva a sua pagina em todas as paginas,
     nao so nas que tem foto ampliada */
  document.querySelectorAll('.tick').forEach(t => {
    const go = () => { if(t.dataset.href) location.href = t.dataset.href; };
    t.setAttribute('role','link');
    t.setAttribute('tabindex','0');
    t.addEventListener('click', go);
    t.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); go(); } });
  });

  const lightbox = document.getElementById('lightbox');
  if(lightbox){
  const lbImg = document.getElementById('lbImg');
  const lbCap = document.getElementById('lbCap');
  const lbClose = document.getElementById('lbClose');
  let lastFocus = null;
  function openLightbox(src, cap, alt){
    lastFocus = document.activeElement;
    lbImg.src = src;
    lbImg.alt = alt || cap || '';
    lbCap.textContent = cap || '';
    lightbox.classList.add('open');
    lbClose.focus();
  }
  function closeLightbox(){
    lightbox.classList.remove('open');
    if(lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function makeActivatable(el, handler){
    el.setAttribute('role','button');
    el.setAttribute('tabindex','0');
    el.addEventListener('click', handler);
    el.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); handler(e); }
    });
  }
  document.querySelectorAll('.gallery-item, .malha-item').forEach(item => {
    makeActivatable(item, () => {
      const img = item.querySelector('img');
      openLightbox(item.dataset.full || img.src, item.dataset.cap || img.alt, img.alt);
    });
  });
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox(); });
  }
