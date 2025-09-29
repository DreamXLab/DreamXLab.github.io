---
layout: page
title: "Awards and Honors"
permalink: /awards/award/
awards:
  - title: "Robotics/Automation Challenge Third Place"
    institution: "American Society of Civil Engineers"
    year: 2025
    description: >
      This award is presented to recognize our robotic AI agent that delivers in-situ guidance to frontline construction workers and enables real-time inspection on construction sites.
  - title: "Chancellor’s Innovation Fund Award"
    institution: "University of Tennessee Knoxville"
    year: 2024
    description: >
      This award is presented to recognize outstanding faculty who transform innovative research into commercially viable technologies, fostering a seamless pathway from discovery to market impact.
  - title: "Best Data Award Competition Second Place"
    institution: "American Society of Civil Engineers"
    year: 2024
    description: >
      This award is presented to the "Hospital Indoor Object Detection (HIOD) Dataset" for the Best Data Award Competition, hosted by the American Society of Civil Engineers. With 4,417 meticulously curated images and 51,809 precise annotations across 56 object categories, this dataset offers a critical resource for advancing object detection in hospital environments.
  - title: "Chancellor’s Professional Promise Award"
    institution: "University of Tennessee Knoxville"
    year: 2023
    description: >
      This award honors faculty who strives for and has achieved excellence in research, scholarship, and creative achievement.
  - title: "David Goodpasture Award"
    institution: "University of Tennessee Knoxville"
    year: 2022
    description: >
      This endowed professorship and award is granted for a four-year term to recognize outstanding achievements in both research and teaching in Civil and Environmental Engineering.
  - title: "Professional Promise in Research Award"
    institution: "University of Tennessee Knoxville"
    year: 2021
    description: >
      This award recognizes the faculty in the Tickle College of Engineering who have received national and international recognition in their fields and demonstrate strong professional promise in research excellence.
  - title: "Success in Multidisciplinary Research Award"
    institution: "University of Tennessee Knoxville"
    year: 2021
    description: >
      This Chancellor’s award recognizes faculty who have successfully secured major external funding and earned recognition for their contributions to multidisciplinary research.
  - title: "Best Paper Award, Building and Environment"
    institution: "Journal of Building and Environment"
    year: 2020
    description: >
      This award recognizes a significant contribution to the state of the art that was selected from 4000 papers submitted to the Journal of Building and Environment through four tiers of evaluation. The award was presented for the paper “Segmenting Areas of Potential Contamination for Adaptive Robotic Disinfection in Built Environments” (Shuai Li is the corresponding author).
  - title: "Collingwood Prize"
    institution: "American Society of Civil Engineers"
    year: 2018
    description: >
      The Collingwood Prize was instituted and endowed in 1984 by Francis Collingwood, past Secretary of American Society of Civil Engineers (ASCE). This award recognizes major contributions to knowledge in the field of civil engineering through a published paper in an ASCE journal. The award was presented for the paper “Integrating Natural Language Processing and Spatial Reasoning for Utility Compliance Checking” (Shuai Li is the first author).
  - title: "Outstanding Reviewer, Computing in Civil Engineering"
    institution: "Journal of Computing in Civil Engineering"
    year: 2017
    description: >
      This recognition acknowledges the outstanding effort of reviewers for the Journal of Computing in Civil Engineering and was selected based on the review quality and timeliness.
  - title: "Zimmerman Innovation Award"
    institution: "Purdue University"
    year: 2017
    description: >
      The Mary Ann Zimmerman Purdue Civil Engineering Innovation Award was initiated to recognize, encourage, and promote creative thinking and outreach. It is awarded to an individual to encourage and support civil engineering innovations that further the school’s progress through education, research, conferences, or other outreach activities.
  - title: "Pai Tao Yeh Fellowship"
    institution: "Purdue University"
    year: 2016
    description: >
      This fellowship recognizes the research achievement of a civil engineering student at Purdue University and supports the travel for research presentation at prestigious conferences.
  - title: "Pai Tao Yeh Fellowship"
    institution: "Purdue University"
    year: 2015
    description: >
      This fellowship recognizes the research achievement of a civil engineering student at Purdue University and supports the travel for research presentation at prestigious conferences.
---

<style>
  .awards-container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 1rem;
    font-family: Georgia, serif;
    line-height: 1.6;
    color: #222;
  }

  /* 单条奖项 */
  .award { padding: 0.75rem 0; }

  /* 头部三列：左标题｜右机构｜最右年份 */
  .award-row {
    display: grid;
    grid-template-columns: 1fr auto auto;
    column-gap: 1rem;
    align-items: baseline;
  }

  .award-title {
    font-weight: 600;
    font-size: 1rem;
  }

  .award-institution {
    font-style: italic;
    font-size: 0.95rem;
    justify-self: end;
    white-space: nowrap;
    text-align: right;
  }

  .award-year {
    font-size: 0.95rem;
    justify-self: end;
    white-space: nowrap;
    text-align: right;
  }

  .award-description { margin-top: 0.5rem; }

  /* 分隔线更轻一些 */
  .award-divider {
    border: 0;
    border-top: 1px solid #ddd;
    margin: 0.75rem 0 0;
  }

  /* 小屏改为纵向堆叠 */
  @media (max-width: 640px) {
    .award-row {
      grid-template-columns: 1fr;
      row-gap: 0.25rem;
    }
    .award-institution, .award-year {
      justify-self: start;
      text-align: left;
    }
  }
</style>

<div class="awards-container">
  {% for award in page.awards %}
    <div class="award">
      <div class="award-row">
        <div class="award-title">{{ award.title }}</div>
        <div class="award-institution">{{ award.institution }}</div>
        <div class="award-year">{{ award.year }}</div>
      </div>
      <p class="award-description">{{ award.description }}</p>
      <hr class="award-divider">
    </div>
  {% endfor %}
</div>
