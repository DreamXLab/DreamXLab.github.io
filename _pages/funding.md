---
layout: default
permalink: /funding/
title: funding
nav: true
nav_order: 0
funding:
  - title: "Elements: A Convergent Physics-based and Data-driven Computing Platform for Building Modeling"
    period: "09/01/2023 – 08/31/2026"
    amount: "$584,094"
    categories:
      - "External Grants and Contracts"
      - "National Science Foundation"
      - "Co-PI"
  - title: "SCC-PG: Securing Underserved Communities from Drug Abuse with Drone-Based Smart Medication Delivery"
    period: "04/01/2023 – 03/31/2024" 
    amount: "$150,000"
    categories:
      - "External Grants and Contracts"
      - "National Science Foundation"
      - "Co-PI" 
  - title: "Lignin-Derived Carbon Storing Foams for High Performance Insulation"
    period: "11/01/2022 – 10/31/2024" 
    amount: "$2,707,550"
    categories:
      - "External Grants and Contracts"
      - "Department of Energy"
      - "Co-PI" 
  - title: "FW-HTF-R: Fair4Wise: Future AI and Robots for Women in Smart Engineering"
    period: "09/01/2022 – 08/31/2025" 
    amount: "$1,807,743"
    categories:
      - "External Grants and Contracts"
      - "National Science Foundation"
      - "PI"  
  - title: "I-Corps: Artificial Intelligence (AI)-Enabled and Digital Twin Interactive Robots for Facility Hygiene and Human Health"
    period: "07/01/2022 – 12/31/2023" 
    amount: "$49,971"
    categories:
      - "External Grants and Contracts"
      - "National Science Foundation"
      - "PI"  
  - title: "STEM Education and Apprenticeship Liaison (SEAL) for Navy"
    period: "05/01/2022 – 04/30/2025" 
    amount: "$600,000"
    categories:
      - "Senior Personnel"
      - "Office of Naval Research"
      - "External Grants and Contracts"
  - title: "FW-HTF-R/Collaborative Research: Human-Robot Sensory Transfer for Worker Productivity, Training, and Quality of Life in Remote Undersea Inspection and Construction Tasks"
    period: "12/01/2021 – 11/30/2025" 
    amount: "$224,999"
    categories:
      - "PI"
      - "National Science Foundation" 
      - "External Grants and Contracts"
  - title: "CPS: Medium: Bio-socially Adaptive Control of Robotics-Augmented Building-Human Systems for Infection Prevention by Cybernation of Pathogen Transmission"
    period: "01/01/2021 – 12/31/2024" 
    amount: "$1,199,129"
    categories:
      - "PI"
      - "National Science Foundation" 
      - "External Grants and Contracts"
  - title: "SCC-PG: Toward Disease-Resistant School Communities by Reinventing the Interface among Built Environments, Occupants, and Microbiomes"
    period: "10/01/2020 – 4/30/2022" 
    amount: "$149,998"
    categories:
      - "PI"
      - "National Science Foundation" 
      - "External Grants and Contracts"
  - title: "Drones and Other Technologies to Assist in Disaster Relief Efforts"
    period: "09/01/2020 – 2/28/2022" 
    amount: "$149,999"
    categories:
      - "PI"
      - "External Grants and Contracts"
      - "Tennessee Department of Transportation"
  - title: "Smart Design and Operation of Ventilation Systems to Reduce Indoor Pathogen Transmission"
    period: "09/01/2020 – 12/31/2020" 
    amount: "$9,956"
    categories:
      - "PI"
      - "External Grants and Contracts"
      - "Trimble, Inc."
  - title: "RAPID: Impacts of Design and Operation Attributes of Mass-Gathering Civil Infrastructure Systems on Pathogen Transmission and Exposure"
    period: "05/01/2020 – 8/31/2022" 
    amount: "$199,809"
    categories:
      - "PI"
      - "External Grants and Contracts"
      - "National Science Foundation"
  - title: "Pollutant Sourcing Identification in Impaired Surface Waters"
    period: "03/01/2020 – 02/29/2021" 
    amount: "$75,493"
    categories:
      - "Co-PI"
      - "External Grants and Contracts"
      - "United States Geological Survey"
  - title: "CRII: CPS: Coupling Subsurface Features with Connected Autonomous Vehicles as Networked Cyber-Physical Systems for Reciprocal Mapping and Localization"
    period: "05/01/2019 – 4/30/2022" 
    amount: "$175,000"
    categories:
      - "PI"
      - "External Grants and Contracts"
      - "National Science Foundation"
  - title: "Concrete Bridge Deck Deterioration Assessment Using Ground Penetrating Radar"
    period: "01/17/2019 – 5/31/2021" 
    amount: "$149,681"
    categories:
      - "PI"
      - "External Grants and Contracts"
      - "Tennessee Department of Transportation"
  - title: "Toward Precision Environmental Health Risk Management: Feasibility of Personalized Exposome Monitoring"
    period: "01/01/2021 – 12/31/2021" 
    amount: "$45,000"
    categories:
      - "Co-PI"
      - "University of Tennessee Knoxville"
      - "Internal Funding"
  - title: "Feasibility of Personalized Monitoring of Environmental Exposomes toward Prevention of Alzheimer’s Disease and Related Dementia"
    period: "01/01/2021 – 8/31/2021" 
    amount: "$5,000"
    categories:
      - "Co-PI"
      - "University of Tennessee"
      - "Internal Funding" 
  - title: "Artificial Intelligence Aided 3D Metagenomic Mapping of Built Environments and Humans to Model Pathogen Transmission"
    period: "08/01/2020 – 07/31/2022" 
    amount: "$149,331"
    categories:
      - "PI"
      - "University of Tennessee Oak Ridge Innovation Institute"
      - "Internal Funding" 
  - title: "Pathogen Transmission Pathway Identification by Fomite and Behavior Monitoring"
    period: "08/01/2020 – 07/31/2022" 
    amount: "$47,000"
    categories:
      - "Co-PI"
      - "University of Tennessee" 
      - "Internal Funding" 
  - title: "Trust-Aware Human-Robot Interface for Occluded and Uncertain Space Search"
    period: "05/01/2019 – 6/30/2020" 
    amount: "$69,962"
    categories:
      - "PI"
      - "University of Tennessee Knoxville"
      - "Internal Funding" 
  - title: "Visibility Enhancement for Autonomous Construction Machines Based on Prediction"
    period: "01/10/2018 – 05/08/2018" 
    amount: "$2,000"
    categories:
      - "PI"
      - "University of Tennessee Knoxville"
      - "Internal Funding" 
 
  
---
<div class="post">
  <h1>{{ page.title }}</h1>

  {% assign records = page.funding %}
  {% assign all_cats = records | map: "categories" | flatten | uniq | sort %}

  <!-- 分类导航 -->
  <div class="tag-category-list">
    <ul>
      <li><a href="#" data-cat="all">All</a></li>
      {% for cat in all_cats %}
        <li>
          <a href="#" data-cat="{{ cat | escape }}">{{ cat }}</a>
        </li>
      {% endfor %}
    </ul>
  </div>

  <!-- 单个列表，li 的 data-cats 存储为 JSON -->
  <ul id="fund-list">
    {% for item in records %}
      <li data-cats='{{ item.categories | jsonify }}'>
        <h3>{{ item.title }}</h3>
        <ul>
          <li><strong>Period:</strong> {{ item.period }}</li>
          <li><strong>Amount:</strong> {{ item.amount }}</li>
        </ul>
        {% if item.note %}
          <p><em>{{ item.note }}</em></p>
        {% endif %}
        <div style="height:1em"></div>
      </li>
    {% endfor %}
  </ul>

  <script>
  document.addEventListener('DOMContentLoaded', function() {
    // 只选 #fund-list 下的一级 <li>
    const listItems = document.querySelectorAll('#fund-list > li');
    const tagLinks  = document.querySelectorAll('.tag-category-list a');

    function showCat(catRaw) {
      const cat = catRaw.trim();
      listItems.forEach(el => {
        let cats = [];
        try {
          cats = JSON.parse(el.getAttribute('data-cats'))
                     .map(c => c.trim());
        } catch (e) {}
        const match = (cat === 'all' || cats.includes(cat));
        el.style.display = match ? 'block' : 'none';
      });
    }

    tagLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        showCat(link.getAttribute('data-cat'));
      });
    });

    // 初始状态显示所有
    showCat('all');
  });
</script>

</div>
