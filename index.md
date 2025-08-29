---
layout: default
title: MichelVilleneuve's Projects
---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MichelVilleneuve's Projects</title>
<style>
/* ===== Site Header ===== */
.site-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    text-align: center;
}

.site-logo { max-width: 60px; height: auto; border-radius: 10px; margin-bottom: 10px; }
.site-title { font-size: 1.5em; font-weight: bold; margin: 0; color: #222; }
.site-title a { text-decoration: none; color: inherit; }
.site-description { font-size: 1em; color: #555; margin-top: 5px; }

/* ===== Gallery Styles ===== */
body { font-family: sans-serif; margin: 0; padding: 20px; background: #f4f4f4; color: #333; }
.gallery-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
.gallery-item { flex: 1 1 150px; max-width: 180px; text-align: center; }
.img-container { position: relative; width: 160px; height: 280px; overflow: hidden; border-radius: 5px; margin: 0 auto; cursor: pointer; }
.img-container img { width: 100%; height: 100%; object-fit: contain; border-radius: 5px; transition: transform 0.4s ease; }
.img-container:hover img { transform: scale(1.2); z-index: 1; } /* slight zoom on hover */

/* Click instruction text */
.click-instruction {
  position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%);
  background: rgba(0,0,0,0.6); color: #fff; padding: 4px 8px; font-size: 0.75em;
  border-radius: 6px; opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
  white-space: nowrap; z-index: 5;
}
.img-container.hovered .click-instruction { opacity: 1; }

/* ===== Lightbox ===== */
#lightbox {
  display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.85); z-index: 1000; justify-content: center; align-items: center;
}
#lightbox-img { max-width: 90%; max-height: 90%; border-radius: 10px; }
#features-box {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  background: rgba(0,0,0,0.7); color: #fff; padding: 15px 20px;
  border-radius: 10px; font-size: 0.9em; text-align: left;
  max-width: 80%; line-height: 1.4em; z-index: 1010; display: none;
}
.lightbox-nav { position: absolute; top: 50%; transform: translateY(-50%);
  font-size: 2em; color: #fff; cursor: pointer; user-select: none; padding: 10px; z-index: 1020;
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
</head>
<body>

<div class="site-header">
  <h1 class="site-title">MichelVilleneuve's Projects</h1>
</div>

<div class="gallery-container">
  <!-- CyclingTracker -->
  <figure class="gallery-item">
    <div class="img-container" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')" onclick="openLightbox('cycling', this)">
      <img src="Images/CyclingTracker.png" alt="CyclingTracker">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>CyclingTracker</figcaption>
  </figure>

  <!-- CalcConv -->
  <figure class="gallery-item">
    <div class="img-container" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')" onclick="openLightbox('calcconv', this)">
      <img src="Images/CalcConv.jpg" alt="CalcConv">
      <div class="click-instruction">Click to see full features</div>
    </div>
    <figcaption>CalcConv</figcaption>
  </figure>
  
<!-- UnitsCalculator --> 
<figure class="gallery-item">
  <div class="img-container" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')" onclick="openLightbox('unitscalculator', this)">
    <img src="Images/UnitsCalculator.jpg" alt="UnitsCalculator">
    <div class="click-instruction">Click to see full features</div>
  </div>
  <figcaption>UnitsCalculator</figcaption>
</figure>

<!-- FieldCAD --> 
<figure class="gallery-item">
  <div class="img-container" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')" onclick="openLightbox('fieldcad', this)">
    <img src="Images/FieldCAD.jpg" alt="FieldCAD">
    <div class="click-instruction">Click to see full features</div>
  </div>
  <figcaption>FieldCAD</figcaption>
</figure>

<!-- NotePad --> 
<figure class="gallery-item">
  <div class="img-container" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')" onclick="openLightbox('notepad', this)">
    <img src="Images/NotePad.jpg" alt="NotePad">
    <div class="click-instruction">Click to see full features</div>
  </div>
  <figcaption>NotePad</figcaption>
</figure>

<!-- FlowChart --> 
<figure class="gallery-item">
  <div class="img-container" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')" onclick="openLightbox('flowchart', this)">
    <img src="Images/FlowChart.jpg" alt="FlowChart">
    <div class="click-instruction">Click to see full features</div>
  </div>
  <figcaption>FlowChart</figcaption>
</figure>

<!-- BrushDraw --> 
<figure class="gallery-item">
  <div class="img-container" onmouseover="this.classList.add('hovered')" onmouseout="this.classList.remove('hovered')" onclick="openLightbox('brushdraw', this)">
    <img src="Images/BrushDraw.png" alt="BrushDraw">
    <div class="click-instruction">Click to see full features</div>
  </div>
  <figcaption>BrushDraw</figcaption>
</figure>

</div>

<!-- Lightbox structure -->
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
// App data
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
  calcconv: {
    images: ["Images/CalcConv.jpg"],
    features: `<p>Coming soon...</p>`
  }
   unitscalculator = { 
    images: ["Images/UnitsCalculator.jpg"], 
    features: "<p>Coming soon...</p>" 
  }
fieldcad = { 
    images: ["Images/FieldCAD.jpg"], 
    features: "<p>Coming soon...</p>" 
}
notepad = { 
    images: ["Images/NotePad.jpg"], 
    features: "<p>Coming soon...</p>" 
}
flowchart = { 
    images: ["Images/FlowChart.jpg"], 
    features: "<p>Coming soon...</p>" 
}
brushdraw = { 
    images: ["Images/BrushDraw.png"], 
    features: "<p>Coming soon...</p>"
}
};

let currentApp = null;
let currentIndex = 0;

function openLightbox(app, element) {
  event.stopPropagation();
  currentApp = app;
  currentIndex = 0; // start with features overlay
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
</body>
</html>
