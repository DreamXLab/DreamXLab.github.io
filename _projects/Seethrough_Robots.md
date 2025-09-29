---
layout: page
title: See-Through Robots
description: Endowing Robots with AI-Based See-Through Capabilities To Save Lives and Sense Hidden Hazards.
img: /assets/img/seethrough_Robots/title.jpg
importance: 1
category: Mobility&Manipulation
slides:
  order:
    - url: /assets/img/seethrough_Robots/slide1.jpg
    - url: /assets/img/seethrough_Robots/Slide2.jpg
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
    <li>Hu, D., Chen, J., & Li, S. (2022). Reconstructing unseen spaces in collapsed structures for search and rescue via deep learning based radargram inversion. <em>Automation in Construction</em>, 140, 104380.</li>
  </ul>

  <ul class="refs-more" id="refs-more" hidden>
  </ul>
</section>

<style>
:root { --fg:#000; --bg:#fff; }

body {
  margin:0;
  background:var(--bg);
  color:var(--fg);
  font-family: Arial, sans-serif;
}

/* ✅ Title 居中 + 放大 */
h1 {
  display: block !important;
  text-align: center !important;
  font-size: 3.6em !important;   /* 放大字号 */
  margin: 1rem auto !important;
  color: var(--fg) !important;
}

/* ✅ Description 居中，兼容所有常见 class */
.page__lead,
.page-description,
.page-subtitle,
header .page__lead,
header .page-description,
header .page-subtitle,
p.description,
header.page__header p {
  text-align: center !important;
  font-size: 1.6em !important;   /* 比 h1 小一号 */
  margin: 1rem auto !important;
  max-width: 900px !important;
  line-height: 1.5 !important;
  display: block !important;
  color: var(--fg) !important;
  justify-content: center !important;
  align-items: center !important;
}

/* ✅ 如果 header 是 flex，强制覆盖 */
header.page__header {
  display: block !important;
  text-align: center !important;
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
  color: var(--fg) !important;
  font-size: 1em;
  line-height: 1.5;
  margin: 10px 0;
}
</style>
