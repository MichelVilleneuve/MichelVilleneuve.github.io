---
layout: default
title: MichelVilleneuve's Projects
---

<link rel="stylesheet" href="/assets/css/style.css">

<div class="site-header">
  <h1 class="site-title">MichelVilleneuve's Projects</h1>
</div>

<div class="gallery-container">

  <!-- CyclingTracker -->
  <figure class="gallery-item">
    <div class="img-container" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')" onclick="openLightbox('cycling')">
      <img src="Images/CyclingTracker.png" alt="CyclingTracker">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>CyclingTracker</figcaption>
  </figure>

  <!-- CalcConv -->
  <figure class="gallery-item">
    <div class="img-container" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')" onclick="openLightbox('calcconv')">
      <img src="Images/CalcConv.jpg" alt="CalcConv">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>CalcConv</figcaption>
  </figure>

  <!-- UnitsCalculator -->
  <figure class="gallery-item">
    <div class="img-container" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')" onclick="openLightbox('unitscalculator')">
      <img src="Images/UnitsCalculator.jpg" alt="UnitsCalculator">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>UnitsCalculator</figcaption>
  </figure>

  <!-- FieldCAD -->
  <figure class="gallery-item">
    <div class="img-container" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')" onclick="openLightbox('fieldcad')">
      <img src="Images/FieldCAD.jpg" alt="FieldCAD">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>FieldCAD</figcaption>
  </figure>

  <!-- NotePad -->
  <figure class="gallery-item">
    <div class="img-container" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')" onclick="openLightbox('notepad')">
      <img src="Images/NotePad.jpg" alt="NotePad">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>NotePad</figcaption>
  </figure>

  <!-- FlowChart -->
  <figure class="gallery-item">
    <div class="img-container" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')" onclick="openLightbox('flowchart')">
      <img src="Images/FlowChart.jpg" alt="FlowChart">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>FlowChart</figcaption>
  </figure>

  <!-- BrushDraw -->
  <figure class="gallery-item">
    <div class="img-container" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')" onclick="openLightbox('brushdraw')">
      <img src="Images/BrushDraw.png" alt="BrushDraw">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>BrushDraw</figcaption>
  </figure>

</div>

<!-- Lightbox -->
<div id="lightbox" onclick="closeLightbox()">
  <span id="close">&times;</span>
  <span id="prev" class="lightbox-nav" onclick="prevSlide(event)">&#10094;</span>
  <img id="lightbox-img" src="">
  <span id="next" class="lightbox-nav" onclick="nextSlide(event)">&#10095;</span>
  <div id="features-box"></div>
</div>

<footer>
  <p>&copy; 2025 MichelVilleneuve</p>
</footer>

<script>
const appData = {
  cycling: {
    images: [
      "Images/CyclingTracker.png",
      "Images/CyclingTracker1.png",
      "Images/CyclingTracker2.png",
      "Images/CyclingTracker3.png",
      "Images/CyclingTracker4.png",
      "Images/CyclingTracker5.png"
    ],
    features: `
      <ul>
        <li>Distance</li>
        <li>Road Slope</li>
        <li>Calories</li>
        <li>Current Time</li>
        <li>AVG Speed</li>
        <li>Max Speed</li>
        <li>Elevation Gain</li>
        <li>Elevation Loss</li>
        <li>Elevation Net</li>
      </ul>
    `
  },
  calcconv: { images: ["Images/CalcConv.jpg"], features: "<p>Coming soon...</p>" },
  unitscalculator: { images: ["Images/UnitsCalculator.jpg"], features: "<p>Coming soon...</p>" },
  fieldcad: { images: ["Images/FieldCAD.jpg"], features: "<p>Coming soon...</p>" },
  notepad: { images: ["Images/NotePad.jpg"], features: "<p>Coming soon...</p>" },
  flowchart: { images: ["Images/FlowChart.jpg"], features: "<p>Coming soon...</p>" },
  brushdraw: { images: ["Images/BrushDraw.png"], features: "<p>Coming soon...</p>" }
};

let currentApp = null;
let currentIndex = 0;

function openLightbox(app) {
  event.stopPropagation();
  currentApp = app;
  currentIndex = 0;
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "flex";
  showSlide(currentIndex);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function showSlide(index) {
  const img = document.getElementById("lightbox-img");
  const featuresBox = document.getElementById("features-box");

  if (index === 0 && appData[currentApp].features) {
    img.src = appData[currentApp].images[0];
    featuresBox.innerHTML = appData[currentApp].features;
    featuresBox.style.display = "block";
  } else {
    img.src = appData[currentApp].images[index];
    featuresBox.style.display = "none";
  }
}

function nextSlide(event) {
  event.stopPropagation();
  currentIndex++;
  if (currentIndex >= appData[currentApp].images.length) currentIndex = 0;
  showSlide(currentIndex);
}

function prevSlide(event) {
  event.stopPropagation();
  currentIndex--;
  if (currentIndex < 0) currentIndex = appData[currentApp].images.length - 1;
  showSlide(currentIndex);
}
</script>
