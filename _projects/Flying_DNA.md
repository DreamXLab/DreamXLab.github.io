---
layout: page
title: Flying DNA
description: Flying DNA integrates Digital Twin, Networked Systems, and Artificial Intelligence to create virtual replicas, connect agents and infrastructure, and enable intelligent design and optimization
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

<!-- Publications (first 5 + button to show rest) -->
<section class="refs a-reveal" id="publications">
  <h2>Publications</h2>

  <ul class="refs-list">
    <li>Liu, S., Li, S., Li, H., Li, W., & Tan, J. (2024). TEeVTOL: Balancing Energy and Time Efficiency in eVTOL Aircraft Path Planning Across City-Scale Wind Fields. arXiv preprint arXiv:2403.14877.</li>
    <li>Liu, S., Li, W., Li, H., & Li, S. (2025). Reinforcement learning based multi-perspective motion planning of manned electric vertical take-off and landing vehicle in urban environment with wind fields. Engineering Applications of Artificial Intelligence, 149, 110392.</li>
  </ul>

  <ul class="refs-more" id="refs-more" hidden>
  </ul>

  <div class="btn-row">
    <button class="btn" id="toggle-refs" aria-expanded="false" aria-controls="refs-more">Show full list</button>
  </div>

</section>

<style>
  body {
    background-color: #000000 !important;  /* 黑色背景 */
  }
</style>

<style>
  h1 {
    font-family: Arial, sans-serif !important;
    font-size: 32px !important;
  }

  p.description {
    font-family: Arial, sans-serif !important;
    font-size: 24px !important;
  }
</style>
