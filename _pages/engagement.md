---
layout: page
permalink: /engagement/
title: Engagement
description:
nav: true
nav_order: 6
---

<div class="fullscreen-engagement-container">
  <img src="{{ '/assets/img/engagement/image.png' | relative_url }}" alt="Engagement Activities">
</div>
<style>
.fullscreen-engagement-container {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100vw !important;
  height: 100vh !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden;
  z-index: -1;
  opacity: 0;
  animation: fadeIn 1.5s ease forwards;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fullscreen-engagement-container img {
max-width: 95vw; /_ 留一点点白边 _/
max-height: 95vh; /_ 留一点点白边 _/
object-fit: contain !important;
object-position: center !important;
display: block !important;
}

/_ 确保页面内容容器不干扰 _/
.page-content {
position: relative;
z-index: 1;
background: transparent;
}

@keyframes fadeIn {
to {
opacity: 1;
}
}
</style>
