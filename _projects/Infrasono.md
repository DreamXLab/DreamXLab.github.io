---
layout: page
title: InfraSono
description: "Perform AI-Powered Robotic Sonography on Infrastructure"
category: Management
img: /assets/img/Subsurface/title.png
---

<style>
:root{ --fg:#fff; --muted:#cfd6e6; --bg:#0a0e17; }
html,body{height:100%}
body{ margin:0; background:var(--bg); color:var(--fg); font-family:Inter,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif; }

/* background (optional) */
#fx-bg{position:fixed; inset:0; z-index:-1}
.bg-gradient{position:fixed; inset:0; z-index:-2;
  background:
    radial-gradient(1200px 800px at 80% 10%, rgba(255,255,255,.12), transparent 60%),
    radial-gradient(900px 700px at 10% 50%, rgba(180,120,255,.10), transparent 60%),
    radial-gradient(700px 500px at 50% 90%, rgba(255,120,180,.08), transparent 60%);
  animation: float-bg 20s ease-in-out infinite alternate; filter:saturate(120%) blur(.5px)
}
@keyframes float-bg{to{transform:translate3d(0,-20px,0) scale(1.02)}}

/* main width + ample bottom space so the button is never cut off */
.page-wrap{width:min(1280px, calc(100% - 48px)); margin: 28px auto 0; padding-bottom: 5vh;}
.footer-spacer{height: 20px;} /* extra guarantee for visibility */

/* IMAGES — bigger + softer spacing */
.media-block{ max-width:1220px; margin:44px auto; padding:0 10px; }
.media{ display:block; width:100%; height:auto; border-radius:20px; box-shadow:0 22px 72px rgba(0,0,0,.48); }
.media-block + .media-block{ margin-top:64px }

/* References block */
.refs h2 {
  color:#fff;
  font-size:clamp(28px,2vw,28px);
  margin:38px 0 8px;
  text-align:left;       /* heading left-aligned too */
}

.refs-list,
.refs-more {
  list-style: none;
  padding-left: 0;
  margin: 12px 0;
  max-width: 100%;       /* full width */
  text-align: left;      /* left alignment */
}

.refs-list li,
.refs-more li {
  color: #fff !important;   /* force white, beats theme */
  opacity:.92;
  font-size:clamp(13px,1.6vw,15px);
  line-height:1.58;
  margin: 10px 0;
  text-align: left;
  padding-left: 1.5em;    /* hanging indent setup */
  text-indent: -1.5em;    /* pulls first line back */
}


.refs-more[hidden]{ display:none }

/* smaller button + BIG margin below */
.btn{ display:inline-block; padding:8px 12px; font-size:13px; font-weight:600; color:#fff;
  background:transparent; border:1px solid rgba(255,255,255,.25); border-radius:10px; cursor:pointer; transition:.2s }
.btn:hover{ background:rgba(255,255,255,.08) }
.btn-row{ display:flex; justify-content:center; margin-top:10px; margin-bottom: 30vh; }
@supports (padding:max(0px)){
  .btn-row{ margin-bottom:max(30vh, env(safe-area-inset-bottom,0px) + 160px); }
}
</style>

<canvas id="fx-bg" aria-hidden="true"></canvas>

<div class="bg-gradient" aria-hidden="true"></div>

<div class="page-wrap">

  <!-- Your media -->
  <section id="img1" class="a-reveal">
    <div class="media-block">
      <img class="media" src="{{ '/assets/img/Subsurface/slide2.gif' | relative_url }}" alt="Slide 2">
    </div>
  </section>

  <section id="img2" class="a-reveal">
    <div class="media-block">
      <img class="media" src="{{ '/assets/img/Subsurface/slide3.gif' | relative_url }}" alt="Slide 3">
    </div>
  </section>

  <!-- Publications (first 5 + button to show rest) -->
  <section class="refs a-reveal" id="publications">
    <h2>Publications</h2>

    <ul class="refs-list">
      <li>Hu, D., Wang, M., Guo, R., &amp; Li, S. (2024). Bridge Deck Condition Assessment Using GPR: System Configuration and Defects’ Characterization. In <em>Construction Research Congress 2024</em> (pp. 1210–1219).</li>
      <li>Wang, M., Hu, D., Chen, J., &amp; Li, S. (2023). Underground infrastructure detection and localization using deep learning enabled radargram inversion and vision based mapping. <em>Automation in Construction</em>, 154, 105004.</li>
      <li>Wang, M., Hu, D., Li, S., &amp; Cai, J. (2022, December). Urban subsurface mapping via deep learning based GPR data inversion. In <em>2022 Winter Simulation Conference (WSC)</em> (pp. 2440–2450). IEEE.</li>
      <li>Hu, D., Li, S., Ma, Z. J., &amp; Huang, B. (2021). <em>Concrete Bridge Deck Deterioration Assessment Using Ground Penetrating Radar</em> (No. RES 2019-17). University of Tennessee, Knoxville.</li>
      <li>Hou, F., Lei, W., Li, S., &amp; Xi, J. (2021). Deep learning-based subsurface target detection from GPR scans. <em>IEEE Sensors Journal</em>, 21(6), 8161–8171.</li>
    </ul>

    <ul class="refs-more" id="refs-more" hidden>
      <li>Hu, D., Li, S., &amp; Cai, J. (2021). A machine learning-based framework for automatic bridge deck condition assessment using GPR. In <em>Computing in Civil Engineering 2021</em> (pp. 74–82).</li>
      <li>Hou, F., Lei, W., Li, S., &amp; Xi, J. (2020). Underground multi-class objects identification using HTC from GPR bridge data. In <em>GPR 2020</em> (pp. 140–143). SEG.</li>
      <li>Hu, D., Hou, F., &amp; Li, S. (2020). GPR-based root architecture detection & characterization. In <em>GPR 2020</em> (pp. 243–246). SEG.</li>
      <li>Hu, D., Hou, F., Blakely, J., &amp; Li, S. (2020). AR visualization for bridge deck deterioration (GPR). In <em>CRC 2020</em> (pp. 1156–1164). ASCE.</li>
      <li>Yuan, C., Li, S., Cai, H., &amp; Kamat, V. R. (2018). GPR signature detection & decomposition for buried utilities. <em>J. Comput. Civ. Eng.</em>, 32(4), 04018026.</li>
      <li>Liu, D., Chen, J., Li, S., &amp; Cui, W. (2018). Whole-process management of water pipeline safety—visualization framework. <em>Automation in Construction</em>, 89, 24–37.</li>
      <li>Cai, J., Li, S., &amp; Cai, H. (2018). Accurate mapping of underground utilities via D–S fusion. In <em>CRC 2018</em> (pp. 712–721).</li>
      <li>Li, S., Cao, Y., &amp; Cai, H. (2017). Pavement-crack detection via steerable filtering + active contours. <em>J. Comput. Civ. Eng.</em>, 31(5), 04017045.</li>
      <li>Li, S., Yuan, C., Liu, D., &amp; Cai, H. (2016). Image + GPR fusion for automated pothole detection. <em>J. Comput. Civ. Eng.</em>, 30(6), 04016015.</li>
      <li>Li, S., Cai, H., Abraham, D. M., &amp; Mao, P. (2016). Estimating underground utility features: Hybrid GPR/GPS. <em>J. Comput. Civ. Eng.</em>, 30(1), 04014108.</li>
      <li>Li, S., Cai, H., &amp; Kamat, V. R. (2015). Uncertainty-aware geospatial system for underground utilities. <em>Automation in Construction</em>, 53, 105–119.</li>
      <li>Li, S., &amp; Cai, H. (2015). Automated underground utility mapping & compliance via NLP-aided spatial reasoning. In <em>Computing in Civil Engineering 2015</em> (pp. 419–426).</li>
    </ul>

    <div class="btn-row">
      <button class="btn" id="toggle-refs" aria-expanded="false" aria-controls="refs-more">Show full list</button>
    </div>

  </section>

  <!-- guaranteed extra space at the very bottom -->
  <div class="footer-spacer"></div>
</div>

<script>
/* 1) FORCE front-matter title/description to white + centered (beats daylight theme) */
(function(){
  const wantTitle = {{ page.title | jsonify }};
  const wantDesc  = {{ page.description | jsonify }};
  // try common theme selectors first
  const titleEls = Array.from(document.querySelectorAll(
    'h1.page-title, h1.post-title, .page-title, .post-title, .page-header h1, header .page-title'
  ));
  const descEls  = Array.from(document.querySelectorAll(
    '.page-description, .page__lead, .page-subtitle, header .page-description, header .page__lead, .page-header p, .page-header small'
  ));
  // also fallback: find text-matching nodes
  function findByText(text){
    if(!text) return [];
    const all = Array.from(document.querySelectorAll('h1,h2,h3,p,small,span,div'));
    return all.filter(el => el.textContent && el.textContent.trim() === String(text).trim());
  }
  const tTargets = titleEls.length ? titleEls : findByText(wantTitle);
  const dTargets = descEls.length  ? descEls  : findByText(wantDesc);

  const forceWhite = el => { if(!el) return;
    el.style.cssText += 'color:#fff !important;text-align:center !important;opacity:1 !important;';
  };
  tTargets.forEach(forceWhite);
  dTargets.forEach(forceWhite);
})();

/* 2) Toggle refs */
const btn = document.getElementById('toggle-refs');
const more = document.getElementById('refs-more');
btn.addEventListener('click', ()=>{
  const hidden = more.hasAttribute('hidden');
  if(hidden){ more.removeAttribute('hidden'); btn.textContent='Hide full list'; btn.setAttribute('aria-expanded','true'); }
  else{ more.setAttribute('hidden',''); btn.textContent='Show full list'; btn.setAttribute('aria-expanded','false'); }
});

/* 3) Optional background particles */
const c = document.getElementById('fx-bg'); if(c){
  const ctx = c.getContext('2d');
  let W = c.width = innerWidth, H = c.height = innerHeight;
  const DPR = Math.min(2, devicePixelRatio || 1);
  c.width = W*DPR; c.height = H*DPR; ctx.scale(DPR,DPR);
  let pts = []; const N = Math.min(120, Math.floor((W*H)/14000));
  for(let i=0;i<N;i++){ pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-0.5)*0.4,vy:(Math.random()-0.5)*0.4}); }
  function step(){
    ctx.clearRect(0,0,W,H);
    ctx.globalAlpha = 0.9;
    for(const p of pts){
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>W) p.vx*=-1;
      if(p.y<0||p.y>H) p.vy*=-1;
      ctx.beginPath(); ctx.arc(p.x,p.y,1.5,0,Math.PI*2);
      ctx.fillStyle='rgba(180,120,255,1)'; ctx.fill();   // 紫色点

    }
    for(let i=0;i<pts.length;i++){
      for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d2=dx*dx+dy*dy;
        if(d2<110*110){
          ctx.strokeStyle='rgba(180,120,255,'+(0.8*(1-d2/12100))+')'; // 紫色线
          ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke();
        }
      }
    }
    requestAnimationFrame(step);
  }
  step();
  addEventListener('resize', ()=>{
    W = innerWidth; H = innerHeight;
    c.width = W*DPR; c.height = H*DPR; ctx.setTransform(DPR,0,0,DPR,0,0);
  });
}
</script>

<style>
/* ===== FORCE WHITE IN PUBLICATIONS (beats daylight overrides) ===== */
/* 把 refs 区域里所有文字（含 em/i/a/span/strong 等）都锁成白色 */
.refs,
.refs * ,
.refs em, .refs i, .refs a, .refs strong, .refs span,
.refs li em, .refs li i, .refs li a, .refs li strong, .refs li span {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important; /* 一些主题在浅色模式用这个强制黑色 */
  text-decoration-color: rgba(255,255,255,0.75) !important; /* 链接下划线也调白 */
}

/* 左对齐 + 挂线缩进 + 更大字号 */
.refs h2{
  text-align: left !important;
  font-size: clamp(22px, 2.4vw, 26px) !important;
  margin: 38px 0 14px !important;
}
.refs-list, .refs-more{
  list-style: none; padding-left: 0; margin: 12px 0 !important;
  max-width: 100% !important; text-align: left !important;
}
.refs-list li, .refs-more li{
  font-size: clamp(12px, 1.5vw, 15px) !important;
  line-height: 1.65 !important; margin: 12px 0 !important;
  text-align: left !important; padding-left: 1.5em; text-indent: -1.5em;
}

/* ===== BUTTON FULLY VISIBLE: 巨大的底部留白 + 兼容安全区 ===== */
.btn{
  padding: 8px 12px !important; font-size: 13px !important;
  border-radius: 10px !important;
}
.btn-row{
  display: flex; justify-content: center;
  margin-top: 10px !important;
  margin-bottom: 35vh !important;   /* 视口 35% 的留白，基本不可能再被裁掉 */
  padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 120px) !important;
}

/* 兜底：整个页面底部再加一块看不见的空间，避免主题 footer 压住内容 */
html, body { overflow-x: hidden; overflow-y: auto; }
body::after{
  content: ""; display: block; height: 30vh;  /* 额外的“垫高” */
}
</style>
