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
  color:var(--fg) !important;       /* 白色字体 */
  font-family: Arial, sans-serif;
}

/* Title + Description 居中 + 白色 */
.page__lead,
.page-description,
.page-subtitle,
header .page__lead,
header .page-description,
header .page-subtitle,
h1,
p.description {
  display: block !important;
  text-align: center !important;
  margin-left: auto !important;
  margin-right: auto !important;
  font-size: 1.8em !important;   /* description 基准字号 */
  line-height: 1.5 !important;
  color: var(--fg) !important;   /* 白色 */
  width: 100% !important;
}

/* Title 单独放大 */
h1 {
  font-size: 2.4em !important;   /* 比 description 大三个字号 */
}

/* Publications / refs */
.refs h2 {
  color: var(--fg) !important;
  font-size: 1.5em !important;
  text-align: left;
}
.refs-list, .refs-more {
  list-style: none !important;   /* 去掉小圆点 */
  padding-left: 0 !important;
  margin: 12px 0;
}
.refs-list li, .refs-more li {
  color: var(--fg) !important;   /* 白色 */
  font-size: 1em;
  line-height: 1.5;
  margin: 10px 0;
}
</style>
