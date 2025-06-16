---
layout: page
title: Urban Subsurface Mapping
description: "Preventing utility strikes through next‑gen subsurface digital twins"
img: assets/img/Subsurface/background.png
importance: 1
category: Management
# related_publications: true
---

> **Every 8 hours in the U.S., an excavation accidentally hits a buried utility line.**
> Our mission is to bring those numbers to **zero** by turning the hidden world beneath our streets into a precise, living digital twin.

---

## 1  Problem & Motivation

- **640+ pipeline incidents** and **\$30 B** in societal costs occur annually because planners cannot “see” what lies below ground.
- Existing records are incomplete & GPS signals fail in dense urban corridors.
- Traditional Ground‑Penetrating Radar (GPR) analyses rely on hand‑crafted feature detection, which struggles with noisy, multi‑layer soils and overlapping utilities.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Subsurface/accident.webp" title="accident image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## 2  Knowledge Gap

| **Challenge**                            | **State‑of‑the‑Art Limitation**                        |
| ---------------------------------------- | ------------------------------------------------------ |
| Detecting multiple, closely‑spaced pipes | Hyperbola‑fitting methods blur in cluttered radargrams |
| Geo‑registering utilities in 3‑D         | GPS outages & un‑calibrated sensor rigs                |
| Scalable labelled data                   | Real GPR + ground‑truth permittivity maps are scarce   |

Our work closes **all three gaps** with a unified sensing‑and‑AI pipeline.

---

## 3  Our Solution at a Glance

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/Subsurface/workflow.jpg" title="System workflow" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

1. **Data Factory** – Thousands of synthetic radargrams \+ GAN realism enhancer \= rich training corpus.
2. **Deep Inversion Network** – ResNet‑ASPP encoder–decoder directly reconstructs permittivity maps ⇒ pipe size & depth in one shot.
3. **Visual SLAM Fusion** – ZED stereo camera localizes the GPR rig and rebuilds the streetscape, free from GPS.
4. **Geo‑Registration** – Calibrated transforms fuse subsurface and surface models into an interactive 3‑D utility twin.

---

## 4  Key Contributions

1. **End‑to‑End Pipeline Detection** – 96.2 % precision on synthetic & field radargrams.
2. **Centimetre‑Level Depth Estimation** – ≤ 1.8 cm avg. error; diameter error ≈ 20 % in simulation data. ~ 0.4 m depth discrepancy in real data.
3. **GAN‑Powered Domain Bridging** – Cuts synthetic‑to‑real FID from **365 → 66**.

---

## 5  Why It Matters

- **Safety:** Fewer strikes protect workers & the public.
- **Cost:** Accurate as‑built data slashes re‑design & delay expenses.
- **Sustainability:** Minimises needless pavement cuts and material waste.
- **Smart‑City Readiness:** Provides a foundational layer for digital‑twin‑enabled maintenance and AR guidance.

---

## 6  Results Snapshot

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/Subsurface/application.jpg" title="System applictaion" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">Pipeline geo-registration process --- these results showcase the proposed model's capability to detect and localize buried pipelines in real-world scenarios.</div>

---

## 7  Publications

- Wang, M., Hu, D., Chen, J., & Li, S. (2023).* “ Underground infrastructure detection and localization using deep learning enabled radargram inversion and vision based mapping. ” *Automation in Construction\* 154, 105004.

- Wang, M., Hu, D., Li, S., & Cai, J. (2022, December).\* “ Urban subsurface mapping via deep learning based GPR data inversion. ” In 2022 Winter Simulation Conference (WSC) (pp. 2440-2450). IEEE.

---
