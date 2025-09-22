---
layout: page
title: DreamX Lab
permalink: /projects/
description:
nav: true
nav_order: 3
display_categories: [Manufacturing, Mobility&Manipulation, Management]
horizontal: false
---

<!-- pages/projects.md -->

DREAM X Lab advances data science, robotics, environment transformation, AI, and manufacturing to create intelligent systems and use-inspired solutions that tackle humanity's pressing challenges.

<div class="projects">
<!-- Display all projects without categories -->
{% assign sorted_projects = site.projects | sort: "importance" %}
<!-- Generate cards for each project -->
{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
{% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>
