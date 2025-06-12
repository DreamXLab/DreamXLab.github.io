---
layout: page
title: "Awards and Honors"
permalink: /awards/award/
awards:
  - title: "Chancellor’s Innovation Fund Award"
    institution: "University of Tennessee Knoxville"
    year: 2024
    description: >
      The recipients were selected through a highly competitive and rigorous evaluation process. This award is designed to strengthen the entrepreneurial ecosystem by supporting faculty in transforming their innovative research into commercially viable technologies, fostering a seamless pathway from discovery to market impact.
  - title: "Second Place in Best Data Award Competition"
    institution: "American Society of Civil Engineers"
    year: 2024
    description: >
      This award is presented to the "Hospital Indoor Object Detection (HIOD) Dataset" for the Best Data Award Competition, hosted by the American Society of Civil Engineers. With 4,417 meticulously curated images and 51,809 precise annotations across 56 object categories, this dataset significantly enhances machine learning applications in healthcare, offering a critical resource for advancing object detection in hospital environments.
  - title: "Chancellor’s Professional Promise Award"
    institution: "University of Tennessee Knoxville"
    year: 2023
    description: >
      This award honors faculty members at the University of Tennessee Knoxville who are early in their careers for excellence in research, scholarship, and creative achievement.
  - title: "David Goodpasture Award"
    institution: "University of Tennessee Knoxville"
    year: 2022
    description: >
      This endowed award is given for a period of four years to recognize research and teaching accomplishments of a faculty member in the Department of Civil and Environmental Engineering at the University of Tennessee Knoxville.
  - title: "Professional Promise in Research Award"
    institution: "University of Tennessee Knoxville"
    year: 2021
    description: >
      This award recognizes the faculty members in the Tickle College of Engineering at the University of Tennessee Knoxville who have received national and international recognition in their fields and show professional promise in research excellence.
  - title: "Success in Multidisciplinary Research Award"
    institution: "University of Tennessee Knoxville"
    year: 2021
    description: >
      This award recognizes a team of faculty members from multiple disciplines at the University of Tennessee Knoxville working synergistically and have successfully secured major external resources and obtained recognition for their convergence research.
  - title: "Best Paper Award, Building and Environment"
    institution: "Journal of Building and Environment"
    year: 2020
    description: >
      This award recognizes a significant contribution to the state of the art that was selected from 4,000 papers submitted to the Journal of Building and Environment through four tiers of evaluation. The award was presented for the paper “Segmenting Areas of Potential Contamination for Adaptive Robotic Disinfection in Built Environments” (Shuai Li is the corresponding author).
  - title: "Collingwood Prize"
    institution: "American Society of Civil Engineers"
    year: 2018
    description: >
      The Collingwood Prize was instituted and endowed in 1984 by Francis Collingwood, past Secretary of the American Society of Civil Engineers (ASCE). This award recognizes major contributions to knowledge in the field of civil engineering through a published paper in an ASCE journal. The award was presented for the paper “Integrating Natural Language Processing and Spatial Reasoning for Utility Compliance Checking” (Shuai Li is the first author).
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
  .container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
    font-family: Georgia, serif;
    line-height: 1.5;
    color: #222;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid #ddd;
    padding-bottom: 0.5rem;
  }
  .award {
    margin-bottom: 2.5rem;
  }
  .award-header {
    display: grid;
    grid-template-columns: 2.5fr 2fr 0.5fr;
    align-items: baseline;
  }
  .award-title {
    font-weight: bold;
    font-size: 1.1rem;
  }
  .award-institution {
    font-style: italic;
    text-align: left;
  }
  .award-year {
    text-align: right;
    font-size: 0.95rem;
  }
  .award-description {
    margin-top: 0.5rem;
    text-indent: 1em;
  }
</style>

<div class="container">

{% for award in page.awards %}

<div class="award">
<div class="award-header">
<div class="award-title">{{ award.title }}</div>
<div class="award-institution">{{ award.institution }}</div>
<div class="award-year">{{ award.year }}</div>
</div>
<p class="award-description">{{ award.description }}</p>
{% raw %}<hr>{% endraw %}
</div>

{% endfor %}

</div>
