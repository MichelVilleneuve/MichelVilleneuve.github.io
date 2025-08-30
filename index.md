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
    <div class="img-container" onclick="openLightbox('cycling', 0)" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')">
      <img src="Images/CyclingTracker.png" alt="CyclingTracker">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>CyclingTracker</figcaption>
  </figure>

  <!-- CalcConv -->
  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('calcconv', 0)" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')">
      <img src="Images/CalcConv.jpg" alt="CalcConv">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>CalcConv</figcaption>
  </figure>

  <!-- Add remaining apps similarly -->

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
