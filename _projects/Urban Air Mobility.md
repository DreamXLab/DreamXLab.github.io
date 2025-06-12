---
layout: page
title: Urban Air Mobility
description: Electric vertical-takeoff and landing (eVTOL) aircraft
img: assets/img/UAM_intro.png
importance: 4
category: Mobility
---

Electric vertical-takeoff and landing (eVTOL) aircraft, known for their maneuverability and flexibility present a promising alternative to traditional transportation systems. However, these aircraft face significant challenges from multiple perspectives, such as increasing energy efficiency, enhancing passenger experience, and reducing noise impact on urban environments. While mathematical modeling-based approaches have been employed for flight motion planning, they often struggle to adapt to dynamic and complex environments. In this work, we introduce a three-dimensional motion planning method based on deep reinforcement learning (DRL), tailored for manned eVTOL flights through urban wind fields. Our approach considers three crucial aspects: aircraft energy consumption, passenger concerns, and noise impact on urban environment. We modify the Proximal Policy Optimization (PPO) algorithm and design comprehensive reward function that considers these objectives. By incorporating energy efficiency, passenger concerns, and noise impact into our reward function, our method demonstrates improved policy learning compared to existing approaches. Comparative experiments conducted under various wind conditions show that our method outperforms commonly used techniques, effectively optimizing multiple objectives in challenging urban environments.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/teaser.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Multi-objective motion planning of eVTOL aircraft flight, from origin to destination,  through urban wind fields enabled by deep reinforcement learning. We consider eVTOL aircraft energy consumption and efficiency, passenger concern and noise impact on urban environment as objectives. We only study the flight phase, not takeoff and landing phase of eVTOL.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wind.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Wind sim-sim.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wind_firstRevise.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    City-scale wind field simulation. The left figure shows the OpenStreetMap (OSM) model of city Atlanta,  state GA, USA. The simulation environment is imported into OpenFOAM via scripting. This allows for the visualization of the environment in Paraview. In the right figure, one part of the result of wind field simulation is visualized as volumetric rendering of velocity field magnitude.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
