---
layout: page
title: See-Through Robots
description: Endowing Robots with AI-Based See-Through Capabilities To Save Lives and Sense Hidden Hazards
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

<!-- Publications (first 5 + button to show rest) -->
<section class="refs a-reveal" id="publications">
  <h2>Publications</h2>

  <ul class="refs-list">
    <li>Hu, D., Chen, J., & Li, S. (2022). Reconstructing unseen spaces in collapsed structures for search and rescue via deep learning based radargram inversion. Automation in Construction, 140, 104380.</li>
  </ul>

  <ul class="refs-more" id="refs-more" hidden>
  </ul>

  <div class="btn-row">
    <button class="btn" id="toggle-refs" aria-expanded="false" aria-controls="refs-more">Show full list</button>
  </div>
</section>

<style>
  body {
    background-color: #ffffff !important;  /* 白色背景 */
  }

  /* Title */
  h1 {
    font-family: Arial, sans-serif !important;
    font-size: 36px !important;   /* 放大两号 */
    text-align: center !important; /* 居中 */
  }

  /* Description */
  p.description,
  .page__lead,
  .page-description {
    font-family: Arial, sans-serif !important;
    font-size: 28px !important;   /* 放大两号 */
    text-align: center !important; /* 居中 */
    margin: 1rem auto !important;
    max-width: 900px !important;
    display: block !important;
  }

  /* Publications / refs 去掉 bullet */
  section.refs ul {
    list-style-type: none !important;
    padding-left: 0 !important;
    margin-left: 0 !important;
  }
</style>
