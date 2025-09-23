---
layout: page
permalink: /engagement/
title: Engagement
description:
nav: true
nav_order: 6
---

<div class="fullscreen-image-container">
  <img src="/assets/img/engagement/image.png" alt="Engagement Activities">
</div>

<style>
.fullscreen-image-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* 确保容器从页面边缘开始 */
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

.fullscreen-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* 移除页面默认的padding和margin */
body {
  margin: 0;
  padding: 0;
}

/* 如果有页面容器的话，也要移除它的padding */
.page-content {
  padding: 0 !important;
  margin: 0 !important;
}

.container {
  padding: 0 !important;
  margin: 0 !important;
  max-width: none !important;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .fullscreen-image-container {
    height: 70vh; /* 在移动设备上稍微小一点，避免遮挡导航 */
  }
}

@media (max-width: 480px) {
  .fullscreen-image-container {
    height: 60vh;
  }
}

/* 入场动画 */
.fullscreen-image-container {
  opacity: 0;
  animation: fadeIn 1.5s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>