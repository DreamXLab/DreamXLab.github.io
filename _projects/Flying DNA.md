---
layout: page
title: Flying DNA
description: TBD
img: /assets/img/UAM_intro.png
importance: 1
category: Mobility
slides:
  list:
    - url: /assets/img/fly/slide1.png
    - url: /assets/img/fly/slide2.png
    - url: /assets/img/fly/slide3.png
    - url: /assets/img/fly/slide4.png
    - url: /assets/img/fly/slide5.png
    - url: /assets/img/fly/slide6.png
    - url: /assets/img/fly/slide7.png
---

{% for slide in page.slides.list %}
  <div style="margin-bottom: 2rem; text-align: center;">
    <img src="{{ slide.url }}" alt="{{ slide.description }}" style="width: 100%; max-width: 900px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    <p style="margin-top: 0.5rem; font-style: italic;">{{ slide.description }}</p>
  </div>
{% endfor %}
