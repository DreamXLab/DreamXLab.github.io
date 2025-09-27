---
layout: page
title: Aftermath Atlas
description: "AI-powered Drones Help Make Faster and Smarter Aftermath Recovery Decisions"
category: Management
img: /assets/img/Aftermath/title.jpeg
---

<style>
:root{ --fg:#222; --muted:#555; --bg:#fff; --accent:53,4,248; }

html,body{height:100%}
body{ margin:0; background:var(--bg); color:var(--fg); font-family:Arial,sans-serif; }

/* background (optional) */
#fx-bg{position:fixed; inset:0; z-index:-1}

/* 背景纯白：关掉渐变层（如果主题注入了 .bg-gradient） */
.bg-gradient { display:none !important; }

/* ===== 强制 subtitle 居中 + 放大字号（大多数主题直接可用） ===== */
.page__lead,
.page-description,
.page-subtitle,
header .page__lead,
header .page-description,
header .page-subtitle {
  display: block !important;
  text-align: center !important;
  margin-left: auto !important;
  margin-right: auto !important;
  font-size: 1.5em !important;   /* 比之前大一号 */
  line-height: 1.5 !important;
  color: var(--fg) !important;
  width: 100% !important;        /* 撑满容器 */
}

/* main width */
.page-wrap{width:min(1280px, calc(100% - 48px)); margin: 28px auto 0; padding-bottom: 5vh;}
.footer-spacer{height: 20px;}

/* IMAGES — 与白底融合 */
.media-block{ max-width:1220px; margin:44px auto; padding:0 10px; }
.media{ display:block; width:100%; height:auto; border:0; border-radius:0; box-shadow:none; }
.media-block + .media-block{ margin-top:64px }

/* References block */
.refs h2 {
  color:#111;
  font-size:clamp(28px,2vw,28px);
  margin:38px 0 8px;
  text-align:left;
}
.refs-list, .refs-more {
  list-style: none; padding-left: 0; margin: 12px 0; text-align: left;
}
.refs-list li, .refs-more li {
  color: #333; opacity:.92; font-size:clamp(13px,1.6vw,15px);
  line-height:1.58; margin: 10px 0; padding-left: 1.5em; text-indent: -1.5em;
}
.refs-more[hidden]{ display:none }

/* Button */
.btn{ display:inline-block; padding:8px 12px; font-size:13px; font-weight:600; color:#222;
  background:#f7f7f7; border:1px solid #cfcfcf; border-radius:8px; }
.btn:hover{ background:#efefef }
.btn-row{ display:flex; justify-content:center; margin-top:10px; margin-bottom: 30vh; }
@supports (padding:max(0px)){
  .btn-row{ margin-bottom:max(30vh, env(safe-area-inset-bottom,0px) + 160px); }
}
</style>

<canvas id="fx-bg" aria-hidden="true"></canvas>

<div class="page-wrap">

  <!-- Slides -->
  <section class="media-block">
    <img class="media" src="{{ '/assets/img/Aftermath/Slide1.PNG' | relative_url }}" alt="Slide 1">
  </section>

  <section class="media-block">
    <img class="media" src="{{ '/assets/img/Aftermath/Slide2.PNG' | relative_url }}" alt="Slide 2">
  </section>

  <section class="media-block">
    <img class="media" src="{{ '/assets/img/Aftermath/Slide3.PNG' | relative_url }}" alt="Slide 3">
  </section>

  <section class="media-block">
    <img class="media" src="{{ '/assets/img/Aftermath/Slide4.PNG' | relative_url }}" alt="Slide 4">
  </section>

  <section class="media-block">
    <img class="media" src="{{ '/assets/img/Aftermath/slide5.gif' | relative_url }}" alt="Slide 5">
  </section>

  <!-- Publications -->
  <section class="refs" id="publications">
    <h2>Publications</h2>
    <ul class="refs-list">
      <li>Hu, D., Li, S., Du, J., & Cai, J. (2023). Automating building damage reconnaissance to optimize drone mission planning for disaster response. <em>Journal of Computing in Civil Engineering</em>, 37(3), 04023006.</li>
      <li>Li, S., Moslehy, A., Hu, D., Wang, M., Wierschem, N., Alshibli, K., & Huang, B. (2022). Drones and other technologies to assist in disaster relief efforts (No. RES2021-05). <em>Tennessee Department of Transportation</em>.</li>
      <li>Chen, J., Li, S., Liu, D., & Li, X. (2020). AiRobSim: Simulating a multisensor aerial robot for urban search and rescue operation and training. <em>Sensors</em>, 20(18), 5223.</li>
    </ul>
    <ul class="refs-more" id="refs-more" hidden></ul>

    <div class="btn-row">
      <button class="btn" id="toggle-refs" aria-expanded="false" aria-controls="refs-more">Show full list</button>
    </div>
  </section>

  <div class="footer-spacer"></div>
</div>

<script>
/* 0) Center Title/Subtitle — runtime hard lock */
(function(){
  const wantTitle = {{ page.title | jsonify }};
  const wantDesc  = {{ page.description | jsonify }};

  function lockCenterByText(txt){
    if(!txt) return;
    const all = document.querySelectorAll('h1,h2,h3,p,small,span,div');
    const el = Array.from(all).find(n => n && n.textContent && n.textContent.trim() === String(txt).trim());
    if(!el) return;
    // 自身强制
    el.style.setProperty('text-align','center','important');
    el.style.setProperty('margin-left','auto','important');
    el.style.setProperty('margin-right','auto','important');
    el.style.setProperty('display','block','important');
    el.style.setProperty('color','var(--fg)','important');
    // 向上最多 4 层容器也一并置中，避免 wrapper/flex 影响
    let p = el.parentElement, hops = 0;
    while(p && hops < 4){
      p.style.setProperty('text-align','center','important');
      p.style.setProperty('justify-content','center','important');
      p.style.setProperty('align-items','center','important');
      p = p.parentElement; hops++;
    }
  }

  lockCenterByText(wantTitle);
  lockCenterByText(wantDesc);
})();

/* 1) Toggle references */
const btn = document.getElementById('toggle-refs');
const more = document.getElementById('refs-more');
if(btn && more){
  btn.addEventListener('click', ()=>{
    const hidden = more.hasAttribute('hidden');
    if(hidden){ more.removeAttribute('hidden'); btn.textContent='Hide full list'; btn.setAttribute('aria-expanded','true'); }
    else{ more.setAttribute('hidden',''); btn.textContent='Show full list'; btn.setAttribute('aria-expanded','false'); }
  });
}

/* 2) Purple particle background on white */
const c = document.getElementById('fx-bg');
if(c){
  const ctx = c.getContext('2d');
  let W = innerWidth, H = innerHeight, DPR = Math.min(2, devicePixelRatio||1);
  const sizeCanvas = () => { c.width = W*DPR; c.height = H*DPR; ctx.setTransform(DPR,0,0,DPR,0,0); };
  sizeCanvas();

  const N = Math.min(120, Math.floor((W*H)/14000));
  const rgb = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '53,4,248';

  const pts = Array.from({length:N},()=>({ x:Math.random()*W, y:Math.random()*H, vx:(Math.random()-0.5)*0.4, vy:(Math.random()-0.5)*0.4 }));

  function step(){
    ctx.clearRect(0,0,W,H);
    for(const p of pts){
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>W) p.vx*=-1;
      if(p.y<0||p.y>H) p.vy*=-1;
      ctx.beginPath(); ctx.arc(p.x,p.y,1.5,0,Math.PI*2);
      ctx.fillStyle = `rgba(${rgb},0.95)`; ctx.fill();
    }
    for(let i=0;i<pts.length;i++){
      for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d2=dx*dx+dy*dy;
        if(d2<110*110){
          const alpha = Math.max(0, 0.42*(1 - d2/12100));
          ctx.strokeStyle = `rgba(${rgb},${alpha})`;
          ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke();
        }
      }
    }
    requestAnimationFrame(step);
  }
  step();

  addEventListener('resize', ()=>{ W = innerWidth; H = innerHeight; DPR = Math.min(2, devicePixelRatio||1); sizeCanvas(); });
}
</script>
