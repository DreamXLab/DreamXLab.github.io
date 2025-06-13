---
layout: page
title: 
description: 
img: assets/img/UAM_intro.png
importance: 4
category: fun
---

<style>
  .video-footer {
    position: relative;
    width: 100%;
    height: 400px; /* 可根据需要调整高度 */
    overflow: hidden;
  }

  .video-footer video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    z-index: 1;
  }

  .video-overlay-text {
    position: absolute;
    bottom: 20%;
    width: 100%;
    text-align: center;
    color: white;
    font-family: "Helvetica Neue", sans-serif;
    z-index: 2;
  }

  .video-overlay-text h2,
  .video-overlay-text p {
    margin: 0.3em 0;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  }
</style>

<!-- 全宽视频部分，视频+文字居中 -->
<div style="width:100vw; margin-left:calc(-50vw + 50%);">
  <div style="position: relative; width: 100%; height: 400px; overflow: hidden;">
    <video autoplay muted loop playsinline style="
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      transform: translate(-50%, -50%);
      object-fit: cover;
      z-index: 1;">
      <source src="/assets/video/eVTOL.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div style="
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      font-family: 'Helvetica Neue', sans-serif;
      z-index: 2;">
      <h2 style="margin: 0.3em 0; text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">Flying into the Future</h2>
      <p style="margin: 0.3em 0; text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">Safer, Faster, Cheaper, Quieter, Comforter</p>
    </div>
  </div>
</div>


---

We imagine a future where cities use **eVTOL** aircraft for on-demand passenger transport—cutting traffic and noise, while revolutionizing urban mobility.

<div id="evtol-map" style="width:100%; height:400px; margin-bottom:2rem;"></div>

<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>

<script>
  const map = L.map('evtol-map').setView([40.7128, -74.0060], 12); // 设置中心点在纽约
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  // 单条线，起点终点之间约10km（例如：纽约市中心到北部）
  const line = [[40.7128, -74.0060], [40.8028, -74.0060]];

  // 绘制线与起止点
  L.polyline(line, {color: 'crimson', weight: 4, opacity: 0.7}).addTo(map);
  L.circleMarker(line[0], {radius: 6, color: 'blue'}).addTo(map);
  L.circleMarker(line[1], {radius: 6, color: 'green'}).addTo(map);
</script>


1. **Request flight** via app  
2. **VTOL approaches** from nearest vertiport  
3. **Passengers board**, safety checklist  
4. **Vertical ascent**, cruise over city  
5. **Descent and landing** at destination vertiport

---

<!-- <div style="position:relative; width:100%; max-width:600px; margin:auto;">
  <img src="{{ site.baseurl }}/images/evtol_snapshot.jpg"
       alt="eVTOL simulation"
       style="width:100%; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.2);">
  <div style="position:absolute; bottom:8px; left:8px; background:rgba(0,0,0,0.6); padding:0.3em 0.6em; color:#fff; font-size:0.9rem;">
    Urban flight simulation in Gazebo
  </div>
</div> -->

- 🎯 **Reduced ground congestion**  
- 🕸 **Faster travel times** across urban areas  
- 🌿 **Lower carbon emissions** and noise

---

## 📚 Learn more

- [FAA on AAM](https://www.faa.gov/air-taxis) :contentReference[oaicite:1]{index=1}  
- [Trajectory-Based Urban Air Mobility Simulator (TUS)](https://arxiv.org/abs/1908.08651) :contentReference[oaicite:2]{index=2}  