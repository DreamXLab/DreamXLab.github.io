---
layout: page
title: Flying DNA
description: AI-enabled flying ecosystem
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
    - url: /assets/img/fly/slide6.png
---
<!-- 遍历所有 slides -->
{% for slide in page.slides.order %}
  <div style="margin-bottom: 2rem; text-align: center;">
    <img src="{{ slide.url }}" alt="Slide image"
         style="width: 100%; max-width: 900px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
  </div>
{% endfor %}
