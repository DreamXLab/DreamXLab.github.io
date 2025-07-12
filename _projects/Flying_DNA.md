---
layout: page
title: Flying DNA
img: /assets/img/fly/slide1.jpg
importance: 1
category: fun
slides:
  first: /assets/img/fly/slide2.png
  gifs:
    - url: /assets/img/fly/slide_3.gif
    - url: /assets/img/fly/slide_4.gif
  rest:
    - url: /assets/img/fly/slide6.png
    - url: /assets/img/fly/slide7.png
---


<!-- 显示第一张 PNG -->
<div style="margin-bottom: 2rem; text-align: center;">
  <img src="{{ page.slides.first }}" alt="First slide"
       style="width: 100%; max-width: 900px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
</div>

<!-- 插入多个 GIF -->
{% for gif in page.slides.gifs %}
  <div style="margin-bottom: 2rem; text-align: center;">
    <img src="{{ gif.url }}" alt="{{ gif.description }}"
         style="width: 100%; max-width: 900px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
  </div>
{% endfor %}

<!-- 渲染剩余 PNG 幻灯片 -->
{% for slide in page.slides.rest %}
  <div style="margin-bottom: 2rem; text-align: center;">
    <img src="{{ slide.url }}" alt="Slide image"
         style="width: 100%; max-width: 900px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
  </div>
{% endfor %}


