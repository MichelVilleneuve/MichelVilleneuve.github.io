---
layout: default
title: MichelVilleneuve's Projects
---
<link rel="stylesheet" href="/assets/css/style.css">

<div class="site-header">
  <!-- Optional logo or title -->
</div>

<div class="gallery-container">

  <!-- CyclingTracker -->
  <figure class="gallery-item">
    <div class="img-card" onclick="openLightbox('cycling',0)">
      <img src="Images/CyclingTracker.png" alt="CyclingTracker">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>CyclingTracker</figcaption>
  </figure>

  <!-- CalcConv -->
  <figure class="gallery-item">
    <div class="img-card" onclick="openLightbox('calcconv',0)">
      <img src="Images/CalcConv.jpg" alt="CalcConv">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>CalcConv</figcaption>
  </figure>

  <!-- UnitsCalculator -->
  <figure class="gallery-item">
    <div class="img-card" onclick="openLightbox('unitscalculator',0)">
      <img src="Images/UnitsCalculator.jpg" alt="UnitsCalculator">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>UnitsCalculator</figcaption>
  </figure>

  <!-- FieldCAD -->
  <figure class="gallery-item">
    <div class="img-card" onclick="openLightbox('fieldcad',0)">
      <img src="Images/FieldCAD.jpg" alt="FieldCAD">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>FieldCAD</figcaption>
  </figure>

  <!-- NotePad -->
  <figure class="gallery-item">
    <div class="img-card" onclick="openLightbox('notepad',0)">
      <img src="Images/NotePad.jpg" alt="NotePad">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>NotePad</figcaption>
  </figure>

  <!-- FlowChart -->
  <figure class="gallery-item">
    <div class="img-card" onclick="openLightbox('flowchart',0)">
      <img src="Images/FlowChart.jpg" alt="FlowChart">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>FlowChart</figcaption>
  </figure>

  <!-- BrushDraw -->
  <figure class="gallery-item">
    <div class="img-card" onclick="openLightbox('brushdraw',0)">
      <img src="Images/BrushDraw.png" alt="BrushDraw">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>BrushDraw</figcaption>
  </figure>

</div>

<!-- Lightbox -->
<div id="lightbox">
  <span id="close" onclick="closeLightbox()">&times;</span>
  <span id="prev" class="lightbox-nav" onclick="prevSlide(event)">&#10094;</span>
  <img id="lightbox-img" src="">
  <span id="next" class="lightbox-nav" onclick="nextSlide(event)">&#10095;</span>
  <div id="features-box"></div>
</div>

<footer>
  <p>&copy; 2025 MichelVilleneuve</p>
</footer>

<script src="/assets/js/lightbox.js"></script>
