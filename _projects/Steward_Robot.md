---
layout: page
title: Robots That Care
category: Management
img: /assets/img/Steward_Robot/cover.png
description: "Free Humans for What Matters. Let Robots Handle the Dull, Dirty, and Dangerous.
"
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
    <img class="media" src="{{ '/assets/img/Steward_Robot/slide_1.png' | relative_url }}" alt="Slide 1">
  </section>
