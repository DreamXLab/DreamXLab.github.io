---
layout: page
permalink: /engagement/
title: Engagement
description:
nav: true
nav_order: 6
---

<div class="fullscreen-engagement-container">
  <img src="/assets/img/engagement/image.png" alt="Engagement Activities">
</div>
<style>
.fullscreen-engagement-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* 让容器突破页面布局限制 */
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  /* 入场动画 */
  opacity: 0;
  animation: fadeIn 1.5s ease forwards;
}

.fullscreen-engagement-container img {
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
display: block;
}

/_ 只针对这个页面的内容容器进行调整 _/
.page .post-content,
.page .post-content .container {
padding: 0 !important;
margin: 0 !important;
max-width: none !important;
}

/_ 响应式调整 _/
@media (max-width: 768px) {
.fullscreen-engagement-container {
height: 70vh;
}
}

@media (max-width: 480px) {
.fullscreen-engagement-container {
height: 60vh;
}
}

@keyframes fadeIn {
to {
opacity: 1;
}
}
</style>
