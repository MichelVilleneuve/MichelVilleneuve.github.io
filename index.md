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
    <div class="img-container" onclick="openLightbox('cycling',0)" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')">
      <img src="Images/CyclingTracker.png" alt="CyclingTracker">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>CyclingTracker</figcaption>
  </figure>

  <!-- CalcConv -->
  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('calcconv',0)" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')">
      <img src="Images/CalcConv.jpg" alt="CalcConv">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>CalcConv</figcaption>
  </figure>

  <!-- UnitsCalculator -->
  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('unitscalculator',0)" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')">
      <img src="Images/UnitsCalculator.jpg" alt="UnitsCalculator">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>UnitsCalculator</figcaption>
  </figure>

  <!-- FieldCAD -->
  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('fieldcad',0)" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')">
      <img src="Images/FieldCAD.jpg" alt="FieldCAD">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>FieldCAD</figcaption>
  </figure>

  <!-- NotePad -->
  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('notepad',0)" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')">
      <img src="Images/NotePad.jpg" alt="NotePad">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>NotePad</figcaption>
  </figure>

  <!-- FlowChart -->
  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('flowchart',0)" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')">
      <img src="Images/FlowChart.jpg" alt="FlowChart">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>FlowChart</figcaption>
  </figure>

  <!-- BrushDraw -->
  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('brushdraw',0)" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')">
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

<script>
  src="/assets/js/lightbox.js";

function showClickText(event) {
    const text = event.currentTarget.querySelector('.click-instruction');
    text.style.opacity = 1;
}

function moveClickText(event) {
    const text = event.currentTarget.querySelector('.click-instruction');
    text.style.left = (event.clientX + 12) + 'px';   // offset from pointer
    text.style.top = (event.clientY + 12) + 'px';
}

function hideClickText(event) {
    const text = event.currentTarget.querySelector('.click-instruction');
    text.style.opacity = 0;
}
</script>

