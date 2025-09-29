---
layout: page
permalink: /facility/
title: Facility
description:
nav: true
nav_order: 5
---

<style>
  .facility-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }
  .facility-page h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .facility-page p.intro {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #555;
  }
  .assets-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  .asset-card {
    background: #fff;
    border-radius: 0.75rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    text-align: center;
    transition: transform 0.3s ease;
  }
  .asset-card:hover {
    transform: translateY(-5px);
  }
  .asset-card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .asset-card h3 {
    font-size: 1.25rem;
    margin: 1rem 0 0.5rem;
  }
  .asset-card p {
    font-size: 0.95rem;
    padding: 0 1rem 1rem;
    color: #666;
  }
</style>

<div class="facility-page">

  <p class="intro">Explore the state-of-the-art equipment that powers our research in AI, robotics, and human–computer interaction.</p>

  <div class="assets-grid">
    <div class="asset-card">
      <img src="/assets/img/facilities/robot_arm.png" alt="Robotic Arm">
      <h3>Robotic Arms & Mobile Platforms</h3>
      <p>High-precision manipulators and mobile bases for testing advanced control algorithms, autonomous navigation, and robotic workflows.</p>
    </div>

    <div class="asset-card">
      <img src="/assets/img/facilities/hipergator.jpg" alt="Compute Cards">
      <h3>High-Performance Compute Cards</h3>
      <p>State-of-the-art GPUs and edge inference modules for training and deploying large-scale AI and robotics models.</p>
    </div>

    <div class="asset-card">
      <img src="/assets/img/facilities/robot_dog.png" alt="Robot Dog">
      <h3>Robot Dog</h3>
      <p>Bipedal platform designed for locomotion research, balance control, and advanced human–robot interaction experiments.</p>
    </div>

    <div class="asset-card">
      <img src="/assets/img/facilities/quest3.png" alt="VR Equipment">
      <h3>VR & AR Equipment</h3>
      <p>Immersive head-mounted displays and motion controllers for mixed-reality simulations and interactive experiments.</p>
    </div>

    <div class="asset-card">
      <img src="/assets/img/facilities/motion_capture.png" alt="Motion Capture">
      <h3>Motion Capture Suite</h3>
      <p>Full-body tracking system with high-speed cameras and markers for biomechanics, ergonomics, and human–robot collaboration research.</p>
    </div>

    <div class="asset-card">
      <img src="/assets/img/facilities/LiDAR.jpg" alt="Sensor Suite">
      <h3>Sensor Arrays & LiDAR</h3>
      <p>Multi-modal perception suite including LiDAR, depth cameras, and environmental sensors for mapping and autonomous navigation.</p>
    </div>

    <div class="asset-card">
      <img src="/assets/img/facilities/jetson.png" alt="Embedded Devices">
      <h3>Embedded & IoT Devices</h3>
      <p>Microcontrollers, FPGAs, and IoT development kits for prototyping embedded systems and intelligent robotic applications.</p>
    </div>

    <div class="asset-card">
      <img src="/assets/img/facilities/3d_printing.png" alt="3D Printer">
      <h3>3D Printing & Fabrication</h3>
      <p>Rapid prototyping and fabrication tools for custom robotics components, enclosures, and experimental hardware.</p>
    </div>

</div>
