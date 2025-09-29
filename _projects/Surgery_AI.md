---
layout: page
title: Redefine Sugery Intelligence with Physical AI
category: Management
img: /assets/img/surgery_ai/cover.png
description: "A Biomimetic Soft Robotic System That Cognitively and Physically Assists Surgeons in Minimally Invasive Surgery"
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
  font-size: 1.5em !important;
  line-height: 1.5 !important;
  color: var(--fg) !important;
  width: 100% !important;
}

/* main width */
.page-wrap{width:min(1280px, calc(100% - 48px)); margin: 28px auto 0; padding-bottom: 5vh;}
.footer-spacer{height: 20px;}

/* IMAGES / MEDIA — 与白底融合 */
.media-block{ max-width:1220px; margin:44px auto; padding:0 10px; }
.media{ display:block; width:100% !important; height:auto; border:0; border-radius:0; box-shadow:none; min-width:0; }
.media-block + .media-block{ margin-top:64px }

/* 两列媒体栅格（用于并排两个视频） */
.media-grid-2{
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:1rem;
}
.media-grid-2 .media{
  aspect-ratio:16/9;      /* 统一高度，可按需移除 */
  object-fit:cover;       /* 想完整显示可改为 contain */
}

/* 小屏自适应为单列 */
@media (max-width: 768px){
  .media-grid-2{ grid-template-columns:1fr; }
}

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
/* Innovation & Impacts block */
.innovation h2 {
  color:#111;
  font-size:clamp(28px,2vw,28px);
  margin:38px 0 8px;
  text-align:left;
}
.innovation p {
  margin: 8px 0 16px;
  text-align:left;     /* 强制左对齐 */
  color:#333;
  font-size:clamp(14px,1.6vw,16px);
  line-height:1.6;
}
.innovation ul {
  list-style: disc;
  padding-left: 1.5em;
  margin: 12px 0;
  text-align: left;
}
.innovation li {
  color: #333;
  opacity:.92;
  font-size:clamp(13px,1.6vw,15px);
  line-height:1.58;
  margin: 10px 0;
}
.innovation b,
.innovation strong {
  font-weight: 700;               /* 加粗 */
  font-size: 1.05em;              /* 稍微大一点 */
  color: #111;                    /* 可选，更醒目 */
}

</style>

<canvas id="fx-bg" aria-hidden="true"></canvas>

<div class="page-wrap">

  <!-- Slides -->
  <section class="media-block">
    <img class="media" src="{{ '/assets/img/surgery_ai/slide_1.png' | relative_url }}" alt="Slide 1">
  </section>

  <!-- 两个视频并排（宽度相加正好一行） -->
  <section class="media-block media-grid-2">
    <video class="media" controls preload="metadata" playsinline>
      <source src="{{ '/assets/video/surgery_ai/video_1.mp4' | relative_url }}" type="video/mp4">
      Your Browser does not support video.
    </video>
    <video class="media" controls preload="metadata" playsinline>
      <source src="{{ '/assets/video/surgery_ai/video_2.mp4' | relative_url }}" type="video/mp4">
      Your Browser does not support video.
    </video>
  </section>

  <section class="media-block">
    <video class="media" controls preload="metadata" playsinline>
      <source src="{{ '/assets/video/surgery_ai/video_3.mp4' | relative_url }}" type="video/mp4">
     Your Browser does not support video.
    </video>
  </section>
  <section class="innovation">
  <h2>INNOVATION & IMPACTS</h2>
  <p><strong>SAM</strong> - Redefine Surgery Intelligence</p>
  
  <ul>
    <li><b>S</b>upervision - Enable precision surgery through real-time 3D vision and spatial intelligence to improve patient outcomes and operational efficiency.</li>
    <li><b>A</b>utomation - Provide autonomous and personalized laparoscope control to alleviate staffing shortages and elevate surgical productivity at scale.</li>
    <li><b>M</b>odel - Streamline preoperative planning, intraoperative guidance, and postoperative analysis, while advancing surgeon–AI co-learning with a surgical foundational model.</li>
  </ul>
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

  addEventListener('resize', ()=>{ W = innerWidth; H = innerHeight; DPR = Math.min(2, devicePixelRatio||1); sizeCanvas(); });
}
</script>
