---
layout: default
title: MichelVilleneuve's Projects
---
<link rel="stylesheet" href="/assets/css/style.css">

<div class="site-header">
   <!-- <h1 class="site-title">MichelVilleneuve's Projects</h1> -->
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

  <!-- UnitsCalculator -->
  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('unitscalculator', 0)" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')">
      <img src="Images/UnitsCalculator.jpg" alt="UnitsCalculator">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>UnitsCalculator</figcaption>
  </figure>

  <!-- FieldCAD -->
  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('fieldcad', 0)" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')">
      <img src="Images/FieldCAD.jpg" alt="FieldCAD">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>FieldCAD</figcaption>
  </figure>

  <!-- NotePad -->
  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('notepad', 0)" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')">
      <img src="Images/NotePad.jpg" alt="NotePad">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>NotePad</figcaption>
  </figure>

  <!-- FlowChart -->
  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('flowchart', 0)" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')">
      <img src="Images/FlowChart.jpg" alt="FlowChart">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>FlowChart</figcaption>
  </figure>

  <!-- BrushDraw -->
  <figure class="gallery-item">
    <div class="img-container" onclick="openLightbox('brushdraw', 0)" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')">
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

<style>
/* ===== Gallery Styles ===== */
.gallery-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.gallery-item {
  text-align: center;
  margin-bottom: 20px;
}

.img-container {
  position: relative;
  width: 160px;
  height: 280px;
  overflow: visible;  /* allow image to scale beyond container */
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
  transition: z-index 0.2s ease;
}

.img-container img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 5px;
  transition: transform 0.4s ease;
  position: relative;
  z-index: 1;
}

.img-container.hovered img, .img-container.active img { transform: scale(2.0); z-index: 100; /* scale above neighbors */ }
/* Features overlay */
.features-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,0.85);
  color: #fff;
  padding: 10px 14px;
  font-size: 0.8em;
  border-radius: 8px;
  opacity: 0;
  pointer-events: none;
  text-align: left;
  white-space: normal;
  max-width: 90%;
  width: max-content;
  min-width: 100px;
  transition: opacity 0.3s ease;
  z-index: 101;
}

/* Show features only when clicked */
.img-container.active .features-box {
  opacity: 1;
  pointer-events: auto;
}

/* Click instruction text */
.click-instruction {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.6);
  color: #fff;
  padding: 4px 8px;
  font-size: 0.75em;
  border-radius: 6px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  white-space: nowrap;
  z-index: 102;
}

.img-container.hovered .click-instruction {
  opacity: 1;
}

.gallery-item figcaption {
  margin-top: 6px;
  font-size: 1em;
  color: #555;
  position: relative;
  z-index: 0;
}

   .img-container.hovered,
.img-container.active {
  position: relative;
  z-index: 200; /* ensures scaled image sits above neighbors */
}
   
.click-instruction {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.6);
  color: #fff;
  padding: 4px 8px;
  font-size: 0.75em;
  border-radius: 6px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  white-space: nowrap;
}

.img-container.hovered .click-instruction { opacity: 1; }

/* ===== Lightbox Styles ===== */
#lightbox {
  display: none;
  position: fixed;
  top:0; left:0; width:100%; height:100%;
  background: rgba(0,0,0,0.85);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

#lightbox-img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}

#features-box {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,0.7);
  color: #fff;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 0.9em;
  text-align: left;
  max-width: 80%;
  line-height: 1.4em;
  display: none;
  z-index: 1010;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2em;
  color: #fff;
  cursor: pointer;
  user-select: none;
  padding: 10px;
  z-index: 1020;
}
#prev { left: 10px; }
#next { right: 10px; }
#close { position: absolute; top: 10px; right: 10px; font-size: 2em; color: #fff; cursor: pointer; z-index: 1020; }

/* ===== Responsive ===== */
@media (max-width: 600px) {
  .gallery-container { justify-content: flex-start; }
  .gallery-item { width: 100%; }
}
</style>

<script>
// App data
const appData = {
  cycling: {
    images: ["Images/CyclingTracker.png","Images/CyclingTracker1.png","Images/CyclingTracker2.png","Images/CyclingTracker3.png","Images/CyclingTracker4.png","Images/CyclingTracker5.png"],
    features: `<ul>
      <li>Distance</li><li>Road Slope</li><li>Calories</li><li>Current Time</li><li>AVG Speed</li><li>Max Speed</li><li>Elevation Gain</li><li>Elevation Loss</li><li>Elevation Net</li>
    </ul>`
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

function openLightbox(app, index) {
  currentApp = app;
  currentIndex = index;
  document.getElementById("lightbox").style.display = "flex";
  showSlide(currentIndex);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function showSlide(index) {
  const img = document.getElementById("lightbox-img");
  const featuresBox = document.getElementById("features-box");
  img.src = appData[currentApp].images[index];
  if (index === 0) {
    featuresBox.innerHTML = appData[currentApp].features;
    featuresBox.style.display = "block";
  } else {
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
