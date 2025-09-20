---
layout: page
title: Seethrough Robots
description: 
img: /assets/img/seethrough_Robots/slide1.jpg
importance: 1
category: Mobility&Manipulation
slides:
  order:
    - url: /assets/img/seethrough_Robots/slide1.jpg
    - url: /assets/img/seethrough_Robots/slide2.jpg
    - url: /assets/img/seethrough_Robots/slide3.jpg
---
<!-- 遍历所有 slides -->
{% for slide in page.slides.order %}
  <div style="margin-bottom: 2rem; text-align: center;">
    <img src="{{ slide.url }}" alt="Slide image"
         style="width: 100%; max-width: 900px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
  </div>
{% endfor %}