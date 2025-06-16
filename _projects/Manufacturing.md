---

layout: page
title: AI‑Powered Construction Jobsite 
description: "Integrating LLM‑guided robotic assembly with non‑intrusive audio emotion monitoring into a holistic digital‑twin jobsite pipeline."
img: assets/img/LLM_robot/background.png
importance: 2
category: Management
# related\_publications: true
---

> **A productive jobsite must be both *fast* and *humane*.** Current point solutions tackle automation *or* safety in isolation—yet the real breakthrough comes when the same AI brain orchestrates both.

---

## 1 Why This Matters

* **Productivity gap** – Manual block‑laying and component assembly still dominate, slowing prefab adoption.
* **Well‑being gap** – Construction records the highest suicide rate among U.S. industries; real‑time stress signals are rarely captured on site.
A single Large Language Model (LLM) can interpret free‑form human language, output robotic action plans, *and* hold empathetic, voice‑based conversations—unlocking a unified path to both gaps.

---

## 2 Our Unified LLM Jobsite Framework

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/LLM_robot/overview.png" title="overview" class="img-fluid border rounded shadow" %}
  </div>
</div>


<div class="caption">High‑level pipeline: central LLM core routes requests either to the Embodied Assembly Agent (left) or the Empathy Monitoring Agent (right), while streaming data to a live digital‑twin dashboard.</div>


1. **Embodied Assembly Agent (EAA)** – Converts spoken/text instructions to UR5 + 2F‑85 pick‑and‑place sequences for interlocking blocks.
2. **Empathy Monitoring Agent (EMA)** – Periodic audio check‑ins classify worker emotion in noisy environments and adapt dialogue accordingly.
3. **Digital‑Twin Dashboard** – Fuses robot KPIs, task state, and anonymized emotional curves for proactive decision‑making.

---

## 3 Pillar A – LLM‑Guided Robotic Assembly

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/LLM_robot/pick_concave.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/LLM_robot/pick_middle2.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/LLM_robot/pick_three.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">LLM‑driven UR5 installs interlocking blocks following a one‑sentence command.</div>


* **Prompt hierarchy** parses environment entities and maps intents to predefined robot skills.
* **Zero‑shot validation**: three simulated tasks (cube‑slot differentiation, slot insertion, multi‑step stack) succeeded.

## 4 Pillar B – Audio Emotion Guardian

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/LLM_robot/emotion_framework.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">SER model \+ clip‑on mic/speaker assistant engages workers and logs emotional signals.</div>


* **Noise‑augmented SER dataset** (65 k clips, 7 construction noises) balances 5 emotions.
* **CNN + CBAM + Bi‑LSTM + Self‑Attention** achieves F1 ≥ 0.86 on *anger*, 0.71 on *happy*.
* **Clip‑on AI assistant** initiates schedule‑aware dialogue; transcripts feed the SER model & refine future prompts.



---

## 5 Impact

Our unified LLM‑centric pipeline is more than an academic exercise—it delivers **tangible value for jobsites, contractors, and society**:

| Dimension                   | Why It Matters                                                                                                     | Our Contribution                                                                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Worker Well‑Being**       | Construction has the highest suicide rate among U.S. industries; stress often goes unnoticed until it is too late. | Audio‑based emotion guardian offers *non‑intrusive* early‑warning cues and empathetic micro‑dialogues that connect workers to help sooner.    |
| **Productivity & Quality**  | Manual assembly of repetitive components slows schedules and introduces re‑work.                                   | LLM‑prompted robots execute new assembly variants *zero‑shot*, cutting training time from weeks to minutes and reducing alignment errors. |
| **Scalability**             | Conventional task‑specific models break when the product mix or language shifts.                                   | One foundation LLM handles multilingual instructions and new block geometries through prompt engineering—no retraining required.                     |
| **Data‑Driven Decisions**   | Fragmented safety and production data often live in silos.                                                         | A unified digital‑twin dashboard fuses robot KPIs and aggregated well‑being metrics for holistic, real‑time oversight.                               |
| **Environmental Footprint** | Re‑work and lost time translate into wasted materials and fuel.                                                    | Precise first‑time‑right assembly and reduced incident downtime lower embodied carbon across the project.                                            |

> **Bottom line:** by coupling *smart machines* with *caring machines*, we advance the vision of Construction 4.0—projects that are faster, safer, and more sustainable.

---
---

## 6  Publications

* Wang, M., Li, Y., & Li, S. (2024, March). Robotic Assembly of Interlocking Blocks for Construction Based on Large Language Models. In Construction Research Congress 2024 (pp. 777-786).

* Wang, M. (2024). An Audio-Based Emotion Monitoring System for Enhancing Construction Worker Safety.

---

<style>
/* Optional tiny CSS tweak to tighten tables */
table { font-size: 0.9rem; }
</style>

