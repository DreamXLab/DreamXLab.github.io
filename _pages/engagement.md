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
  position: fixed !important;  /* 使用fixed而不是relative */
  top: 0;
  left: 0;
  width: 100vw !important;
  height: 100vh !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden;
  z-index: -1; /* 确保在导航栏下方 */
  opacity: 0;
  animation: fadeIn 1.5s ease forwards;
}

.fullscreen-engagement-container img {
width: 100% !important;
height: 100% !important;
object-fit: cover !important;
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
