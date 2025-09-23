---
layout: page
permalink: /engagement/
title: Engagement
description:
nav: true
nav_order: 6
gallery:
  - title: "Field Trip"
    image: "/assets/img/engagement/field_trip.png"
  - title: "Student Workshop"
    image: "/assets/gallery/02.jpg"
  - title: "Community Outreach"
    image: "/assets/gallery/03.jpg"
  - title: "Lab Tour"
    image: "/assets/gallery/04.jpg"
  - title: "STEM Education"
    image: "/assets/gallery/05.jpg"
  - title: "Technology Demo"
    image: "/assets/gallery/06.jpg"
  - title: "Conference Presentation"
    image: "/assets/gallery/07.jpg"
  - title: "Hands-on Learning"
    image: "/assets/gallery/08.jpg"
  - title: "Team Collaboration"
    image: "/assets/gallery/09.jpg"
  - title: "Public Engagement"
    image: "/assets/gallery/10.jpg"
  - title: "Research Showcase"
    image: "/assets/gallery/11.jpg"
  - title: "Educational Event"
    image: "/assets/gallery/12.jpg"
  - title: "Innovation Display"
    image: "/assets/gallery/13.jpg"
  - title: "Group Photo"
    image: "/assets/gallery/14.jpg"
  - title: "Technical Demo"
    image: "/assets/gallery/15.jpg"
  - title: "Student Interaction"
    image: "/assets/gallery/16.jpg"
  - title: "Research Equipment"
    image: "/assets/gallery/17.jpg"
  - title: "Community Event"
    image: "/assets/gallery/18.jpg"
  - title: "Science Fair"
    image: "/assets/gallery/19.jpg"
  - title: "Lab Activity"
    image: "/assets/gallery/20.jpg"
  - title: "Presentation Setup"
    image: "/assets/gallery/21.jpg"
  - title: "Visitor Engagement"
    image: "/assets/gallery/22.jpg"
  - title: "Demo Session"
    image: "/assets/gallery/23.jpg"
  - title: "Team Building"
    image: "/assets/gallery/24.jpg"
---

<div class="compact-gallery" id="compact-gallery">
  {% for item in page.gallery %}
    <div class="circle-item" data-title="{{ item.title }}">
      <img src="{{ item.image | relative_url }}" alt="{{ item.title }}" loading="lazy">
    </div>
  {% endfor %}
</div>

<style>
.compact-gallery {
  position: relative;
  width: 100%;
  max-width: 95%;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3px;
  padding: 15px;
}

.circle-item {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}

.circle-item:hover {
  transform: scale(1.05);
  z-index: 10;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

.circle-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.circle-item:hover img {
  transform: scale(1.1);
}

/* 响应式调整 - 让每行放更多图片 */
@media (min-width: 1400px) {
  .circle-item {
    width: 110px;
    height: 110px;
  }
  .compact-gallery {
    gap: 2px;
  }
}

@media (max-width: 1200px) {
  .circle-item {
    width: 100px;
    height: 100px;
  }
  .compact-gallery {
    gap: 2px;
  }
}

@media (max-width: 768px) {
  .circle-item {
    width: 80px;
    height: 80px;
  }
  .compact-gallery {
    gap: 2px;
  }
}

@media (max-width: 480px) {
  .circle-item {
    width: 70px;
    height: 70px;
  }
  .compact-gallery {
    gap: 1px;
    padding: 10px;
  }
}

/* 添加渐入动画 */
.circle-item {
  opacity: 0;
  transform: scale(0);
  animation: fadeInScale 0.6s ease forwards;
}

.circle-item:nth-child(1) { animation-delay: 0.05s; }
.circle-item:nth-child(2) { animation-delay: 0.1s; }
.circle-item:nth-child(3) { animation-delay: 0.15s; }
.circle-item:nth-child(4) { animation-delay: 0.2s; }
.circle-item:nth-child(5) { animation-delay: 0.25s; }
.circle-item:nth-child(6) { animation-delay: 0.3s; }
.circle-item:nth-child(7) { animation-delay: 0.35s; }
.circle-item:nth-child(8) { animation-delay: 0.4s; }
.circle-item:nth-child(9) { animation-delay: 0.45s; }
.circle-item:nth-child(10) { animation-delay: 0.5s; }
.circle-item:nth-child(n+11) { 
  animation-delay: calc(0.55s + (var(--index, 0) * 0.02s)); 
}

@keyframes fadeInScale {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.getElementById('compact-gallery');
  const items = gallery.querySelectorAll('.circle-item');
  
  items.forEach((item, index) => {
    item.style.setProperty('--index', index);
    
    // 添加title显示
    item.addEventListener('mouseenter', function() {
      const title = this.getAttribute('data-title');
      this.setAttribute('title', title);
    });
  });
  
  // 动态计算最优排列
  function optimizeLayout() {
    const containerWidth = gallery.offsetWidth;
    const screenWidth = window.innerWidth;
    
    // 根据屏幕宽度动态调整图片大小和间距
    let itemSize, gap;
    
    if (screenWidth >= 1400) {
      itemSize = 110;
      gap = 2;
    } else if (screenWidth >= 1200) {
      itemSize = 100;
      gap = 2;
    } else if (screenWidth >= 768) {
      itemSize = 80;
      gap = 2;
    } else if (screenWidth >= 480) {
      itemSize = 70;
      gap = 1;
    } else {
      itemSize = 60;
      gap = 1;
    }
    
    const itemsPerRow = Math.floor(containerWidth / (itemSize + gap));
    console.log(`Screen: ${screenWidth}px, Container: ${containerWidth}px, Items per row: ${itemsPerRow}`);
  }
  
  optimizeLayout();
  window.addEventListener('resize', optimizeLayout);
});
</script>
