---

layout: page
title: UnderCity Twin
description: "AI‑enabled sensing and analytics that turn invisible utilities into actionable, geospatial intelligence."
img: assets/img/Subsurface/background.png
importance: 1
category: Management
# related_publications: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Subsurface/undercity.png" title="undercity image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

> **What lies beneath a street can make—or break—a city.** Buried pipes carry water, energy, and data; voids and aging tunnels undermine roadbeds; undocumented cables stall new construction. Yet today most cities still rely on decades‑old paper maps and guesswork.
>
> **Dream X Lab is building a next‑generation *Subsurface Digital‑Twin Platform* that makes the underground as measurable and manageable as the sky‑line.**



---

## 1 Why This Matters at City Scale

| **Urban Challenge**          | **Underground Pain‑Point**                                  | **Societal Impact**              |
| ------------------------ | ------------------------------------------------------- | ---------------------------- |
| Safe Excavation          | 400k+ utility strikes / yr in North America             | Injuries, \$30 B annual cost |
| Resilient Infrastructure | 20 % water lost to hidden leaks                         | Energy waste, sinkholes      |
| Smart‑City Upgrades      | 5G and district‑energy trenches clash with legacy pipes | Project delays               |
| Climate Adaptation       | Green stormwater needs precise sub‑grade space          | Flood mitigation             |
| Emergency Response       | Gas‑main breaks & sinkholes demand real‑time intel      | Lives at stake               |

>A living subsurface twin gives **engineers, planners, and first‑responders a common, trusted map**—unlocking faster projects, safer streets, and sustainable growth.

---

## 2 Platform Vision & Architecture

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Subsurface/overview.png" title="accident image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

1. **Multi‑Modal Sensing** – Rugged cart fuses wideband GPR with stereo/IMU for GPS‑denied odometry.
2. **Edge AI Inversion** – ResNet‑ASPP turns raw radargrams into 3‑D permittivity volumes in real time.
3. **Cloud Twin Database** – Version‑controlled voxel store that tracks change over time.
4. **Open Interfaces** – REST/IFC/CityGML endpoints let utilities, contractors, and robot fleets tap the data.

---

## 3 Core Innovations

* **Synthetic‑to‑Real Data Factory** – GAN‑enhanced radargrams reduce field data needs by 80 %.
* **Centimetre‑Accurate Depth & Diameter** – ≤ 1.8 cm depth error on simulated test bed; continuous learning improves with each scan.
* **Vision‑GPR SLAM** – Stereo camera keeps drift under decent threshold in city space.

---

## 4 High‑Impact Applications 

| **Sector**             | **What We Enable**                                                        | **Potential Partners**                 |
| ---------------------- | --------------------------------------------------------------------- | ---------------------------------- |
| **Utility Owners**     | Auto‑generate accurate as‑built maps; plan trenchless rehab           | Gas, water, telecom utilities      |
| **Civil Contractors**  | AR‑guided digging that avoids strikes; autonomous trenchers           | Construction & robotics OEMs       |
| **Smart‑City Ops**     | Dynamic “traffic‑light” for street‑opening permits                    | DOTs, city CIOs                    |
| **Climate‑Resilience** | Site selection for blue‑green infrastructure; leak‑loss analytics     | Environmental agencies, NGOs       |
| **Emergency Services** | Rapid underground situational awareness during gas leaks or collapses | Fire, EMS, urban search‑and‑rescue |


>Looking to deploy or extend these use cases? **Let’s co‑create pilots.**

---

## 5 Future Roadmap 

1. **Field‑Robot Integration** – Mount sensor stack on autonomous rover for 24 h mapping.
2. **Real‑Time Uncertainty Maps** – Propagate model confidence to guide re‑survey decisions.
3. **Crowd‑Sourced Updates** – Lightweight smartphone GPR add‑on for utilities to scan small digs.
4. **Digital‑Twin Marketplace** – API monetisation for insurers, AR navigation, and IoT twins.

---

## 6 Selected Results

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/Subsurface/application.jpg" title="AI inversion + SLAM fusion" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

Pipeline geo-registration process --- these results showcase the proposed model's capability to detect and localize buried pipelines in real-world scenarios.

---

## 7 References

1. **Wang, Hu, Chen, Li.** “Underground infrastructure detection and localization using deep learning enabled radargram inversion and vision‑based mapping.” *Automation in Construction* 154 (2023): 105004.
2. **Wang, Hu, Li, Cai.** “Urban subsurface mapping via deep learning based GPR data inversion.” *IEEE Winter Simulation Conference* (2022).


<div class="alert alert-secondary mt-4" role="alert">
<strong>Get Involved →</strong> We invite municipalities, utility firms, robotics integrators, and researchers to pilot the platform, share data, or co‑develop new sensing modules. <a href="mailto:dreamxlab@outlook.com">Email us</a> to explore partnerships.
</div>
