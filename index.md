---
layout: default
title: MichelVilleneuve's Projects
---

<link rel="stylesheet" href="/assets/css/style.css">

<div class="gallery-container">
  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('cycling')">
      <img src="Images/CyclingTracker.png" alt="CyclingTracker">
    </div>
    <figcaption>CyclingTracker</figcaption>
  </figure>

  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('calcconv')">
      <img src="Images/CalcConv.jpg" alt="CalcConv">
    </div>
    <figcaption>CalcConv</figcaption>
  </figure>

  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('unitscalc')">
      <img src="Images/UnitsCalculator.jpg" alt="UnitsCalculator">
    </div>
    <figcaption>UnitsCalculator</figcaption>
  </figure>

  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('fieldcad')">
      <img src="Images/FieldCAD.jpg" alt="FieldCAD">
    </div>
    <figcaption>FieldCAD</figcaption>
  </figure>

  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('notepad')">
      <img src="Images/NotePad.jpg" alt="NotePad">
    </div>
    <figcaption>NotePad</figcaption>
  </figure>

  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('flowchart')">
      <img src="Images/FlowChart.jpg" alt="FlowChart">
    </div>
    <figcaption>FlowChart</figcaption>
  </figure>

  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('brushdraw')">
      <img src="Images/BrushDraw.png" alt="BrushDraw">
    </div>
    <figcaption>BrushDraw</figcaption>
  </figure>
</div>

<!-- Lightbox overlay -->
<div id="lightbox" class="lightbox">
  <span class="close" onclick="closeLightbox()">&times;</span>
  <div class="lightbox-content">
    <img id="lightbox-img" src="">
    <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
    <button class="next" onclick="changeSlide(1)">&#10095;</button>
    <div id="features-box" class="features-box"></div>
  </div>
</div>

<footer>
  <p>&copy; 2025 MichelVilleneuve</p>
</footer>

<style>
/* ===== Lightbox Styles ===== */
.lightbox {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.9);
}

.lightbox-content {
  position: relative;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
  max-width: 90%;
  text-align: center;
}

.lightbox img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
}

.close {
  position: absolute;
  top: 20px; right: 40px;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 30px;
  background: rgba(0,0,0,0.5);
  border: none;
  border-radius: 6px;
  transform: translateY(-50%);
}

.prev { left: 0; }
.next { right: 0; }

.features-box {
  margin-top: 15px;
  color: #fff;
  background: rgba(0,0,0,0.7);
  padding: 12px;
  border-radius: 8px;
  text-align: left;
  display: inline-block;
}
</style>

<script>
const appData = {
  cycling: {
    images: [
      "Images/CyclingTracker.png",
      "Images/CyclingTracker1.png",
      "Images/CyclingTracker2.png",
      "Images/CyclingTracker3.png",
      "Images/CyclingTracker3.png"
    ],
    features: `
      <h3>Features:</h3>
      <ul>
        <li>Distance, Speed, Elevation</li>
        <li>Calories Burned</li>
        <li>Road Slope Calculation</li>
      </ul>
    `
  },
  calcconv: {
    images: ["Images/CalcConv.jpg"],
    features: `<p>Coming soon...</p>`
  },
  unitscalc: {
    images: ["Images/UnitsCalculator.jpg"],
    features: `<p>Coming soon...</p>`
  },
  fieldcad: {
    images: ["Images/FieldCAD.jpg"],
    features: `<p>Coming soon...</p>`
  },
  notepad: {
    images: ["Images/NotePad.jpg"],
    features: `<p>Coming soon...</p>`
  },
  flowchart: {
    images: ["Images/FlowChart.jpg"],
    features: `<p>Coming soon...</p>`
  },
  brushdraw: {
    images: ["Images/BrushDraw.png"],
    features: `<p>Coming soon...</p>`
  }
};

let currentApp = null;
let currentIndex = 0;

function openLightbox(app) {
  currentApp = app;
  currentIndex = 0;
  document.getElementById("lightbox").style.display = "block";
  showSlide(currentIndex);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeSlide(n) {
  if (!currentApp) return;
  currentIndex = (currentIndex + n + appData[currentApp].images.length) % appData[currentApp].images.length;
  showSlide(currentIndex);
}

function showSlide(index) {
  const img = document.getElementById("lightbox-img");
  const featuresBox = document.getElementById("features-box");
  img.src = appData[currentApp].images[index];
  featuresBox.innerHTML = appData[currentApp].features;
}
</script>
