---
layout: page
title: Flying DNA
description: Digital Twin + Networked System + AI (DNA) Reshape Future Air Mobility.
img: /assets/img/fly/title.jpg
importance: 1
category: Mobility&Manipulation
slides:
  order:
    - url: /assets/img/fly/slide1.jpg
    - url: /assets/img/fly/slide2.jpg
    - url: /assets/img/fly/slide3.jpg
    - url: /assets/img/fly/slide4.jpg
    - url: /assets/img/fly/slide_3.gif
    - url: /assets/img/fly/slide6.gif
---

<!-- 遍历所有 slides -->

{% for slide in page.slides.order %}

  <div style="margin-bottom: 2rem; text-align: center;">
    <img src="{{ slide.url }}" alt="Slide image"
         style="width: 100%; max-width: 900px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
  </div>
{% endfor %}

<!-- Publications -->
<section class="refs a-reveal" id="publications">
  <h2>Publications</h2>

  <ul class="refs-list">
    <li>Liu, S., Li, S., Li, H., Li, W., & Tan, J. (2024). TEeVTOL: Balancing Energy and Time Efficiency in eVTOL Aircraft Path Planning Across City-Scale Wind Fields. <em>arXiv preprint</em> arXiv:2403.14877.</li>
    <li>Liu, S., Li, W., Li, H., & Li, S. (2025). Reinforcement learning based multi-perspective motion planning of manned electric vertical take-off and landing vehicle in urban environment with wind fields. <em>Engineering Applications of Artificial Intelligence</em>, 149, 110392.</li>
  </ul>
</section>

<style>
:root { --fg:#fff; --bg:#000; }

body {
  margin:0;
  background:var(--bg) !important;  /* 黑色背景 */
  font-family: Arial, sans-serif;
}

/* ✅ 正文部分全部白色（不影响导航栏） */
main, .page, .page-wrap, section, .refs {
  color: var(--fg) !important;
}
main *, .page *, .page-wrap *, section *, .refs * {
  color: var(--fg) !important;
}

/* Title 样式 */
h1 {
  text-align: center !important;
  font-size: 3.6em !important;   /* 放大字号 */
  margin: 1rem auto !important;
  display: block !important;
  color: var(--fg) !important;
}

/* Description 样式：通配 header 里的段落 */
.page__lead,
.page-description,
.page-subtitle,
header .page__lead,
header .page-description,
header .page-subtitle,
p.description,
header p {
  text-align: center !important;
  font-size: 1.4em !important;
  margin: 1rem auto !important;
  max-width: 900px !important;
  line-height: 1.5 !important;
  display: block !important;
  color: var(--fg) !important;
}

/* Publications / refs */
.refs h2 {
  font-size: 1.5em !important;
  text-align: left;
  color: var(--fg) !important;
}
.refs-list, .refs-more {
  list-style: none !important;   /* 去掉小圆点 */
  padding-left: 0 !important;
  margin: 12px 0;
}
.refs-list li, .refs-more li {
  font-size: 1em;
  line-height: 1.5;
  margin: 10px 0;
  color: var(--fg) !important;
}
</style>
