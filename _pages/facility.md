---
layout: page
permalink: /facility/
title: Facility
description:
nav: true
nav_order: 9
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
  <h1>Our Laboratory Assets</h1>
  <p class="intro">Explore the state-of-the-art equipment that powers our research in AI, robotics, and human–computer interaction.</p>

  <div class="assets-grid">
    <div class="asset-card">
      <img src="/assets/img/robot.png" alt="Robotic Arm">
      <h3>Robotic Arms</h3>
      <p>High-precision manipulators for testing advanced control algorithms and automation workflows.</p>
    </div>

    <div class="asset-card">
      <img src="/assets/img/robot.png"  alt="Compute Cards">
      <h3>High-Performance Compute Cards</h3>
      <p>Latest GPUs and edge inference modules for training and deploying large-scale AI models.</p>
    </div>

    <div class="asset-card">
      <img src="/assets/img/robot.png"  alt="Eye-Tracking System">
      <h3>Eye-Tracking Systems</h3>
      <p>Precision gaze and pupilometry devices for studying visual attention and human factors.</p>
    </div>

    <div class="asset-card">
      <img src="/assets/img/robot.png"  alt="VR Equipment">
      <h3>VR & AR Equipment</h3>
      <p>Immersive headsets and motion controllers for mixed-reality experiments and simulations.</p>
    </div>

    <div class="asset-card">
      <img src="/assets/img/robot.png"  alt="Motion Capture">
      <h3>Motion Capture Suite</h3>
      <p>Full-body tracking cameras and markers for biomechanical analysis and human–robot interaction.</p>
    </div>

    <div class="asset-card">
      <img src="/assets/img/robot.png"  alt="Sensor Suite">
      <h3>Sensor Arrays & LIDAR</h3>
      <p>Multi-modal sensors, LIDAR, and depth cameras for environmental perception and mapping.</p>
    </div>

    <div class="asset-card">
      <img src="/assets/img/robot.png"  alt="Embedded Devices">
      <h3>Embedded & IoT Devices</h3>
      <p>Microcontrollers, FPGAs, and IoT kits for prototyping embedded robotic systems.</p>
    </div>

    <div class="asset-card">
      <img src="/assets/img/robot.png"  alt="3D Printer">
      <h3>3D Printing & Fabrication</h3>
      <p>Rapid prototyping tools for custom robotics components and laboratory fixtures.</p>
    </div>

  </div>
</div>
