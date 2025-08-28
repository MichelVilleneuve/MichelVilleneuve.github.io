---
layout: default
title: MichelVilleneuve's Projects
---
<link rel="stylesheet" href="/assets/css/style.css">

<div class="gallery-container">

  <!-- First app with real features -->
  <figure class="gallery-item">
    <div class="img-container">
      <img src="Images/CyclingTracker.png" alt="CyclingTracker">
      <div class="click-instruction">Click to see full features</div>
      <div class="features-box">
        <strong>Features:</strong>
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
      </div>
    </div>
    <figcaption>CyclingTracker</figcaption>
  </figure>

  <!-- Other apps with "Coming soon" -->
  <figure class="gallery-item">
    <div class="img-container">
      <img src="Images/CalcConv.jpg" alt="CalcConv">
      <div class="click-instruction">Click to see full features</div>
      <div class="features-box">
        <strong>Features:</strong>
        <p>Coming soon...</p>
      </div>
    </div>
    <figcaption>CalcConv</figcaption>
  </figure>

  <figure class="gallery-item">
    <div class="img-container">
      <img src="Images/UnitsCalculator.jpg" alt="UnitsCalculator">
      <div class="click-instruction">Click to see full features</div>
      <div class="features-box">
        <strong>Features:</strong>
        <p>Coming soon...</p>
      </div>
    </div>
    <figcaption>UnitsCalculator</figcaption>
  </figure>

  <figure class="gallery-item">
    <div class="img-container">
      <img src="Images/FieldCAD.jpg" alt="FieldCAD">
      <div class="click-instruction">Click to see full features</div>
      <div class="features-box">
        <strong>Features:</strong>
        <p>Coming soon...</p>
      </div>
    </div>
    <figcaption>FieldCAD</figcaption>
  </figure>

  <figure class="gallery-item">
    <div class="img-container">
      <img src="Images/NotePad.jpg" alt="NotePad">
      <div class="click-instruction">Click to see full features</div>
      <div class="features-box">
        <strong>Features:</strong>
        <p>Coming soon...</p>
      </div>
    </div>
    <figcaption>NotePad</figcaption>
  </figure>

  <figure class="gallery-item">
    <div class="img-container">
      <img src="Images/FlowChart.jpg" alt="FlowChart">
      <div class="click-instruction">Click to see full features</div>
      <div class="features-box">
        <strong>Features:</strong>
        <p>Coming soon...</p>
      </div>
    </div>
    <figcaption>FlowChart</figcaption>
  </figure>

  <figure class="gallery-item">
    <div class="img-container">
      <img src="Images/BrushDraw.png" alt="BrushDraw">
      <div class="click-instruction">Click to see full features</div>
      <div class="features-box">
        <strong>Features:</strong>
        <p>Coming soon...</p>
      </div>
    </div>
    <figcaption>BrushDraw</figcaption>
  </figure>

</div>

<footer>
  <p>&copy; 2025 MichelVilleneuve</p>
</footer>

<!-- ===== JavaScript ===== -->
<script>
let topZ = 10;

document.querySelectorAll('.img-container').forEach(container => {

  const instruction = container.querySelector('.click-instruction');

  // Move instruction with mouse
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    instruction.style.left = `${offsetX + 10}px`;   // slightly right of cursor
    instruction.style.top = `${offsetY + 10}px`;    // slightly below cursor
  });

  container.addEventListener('mouseenter', () => {
    container.classList.add('hovered');
    container.style.zIndex = topZ++; 
    if (!container.classList.contains('active')) {
      instruction.textContent = 'Click to see full features';
      instruction.style.opacity = 1;
    }
  });

  container.addEventListener('mouseleave', () => {
    container.classList.remove('hovered');
    container.style.zIndex = container.classList.contains('active') ? topZ++ : 1;
    instruction.style.opacity = 0;
    container.classList.remove('active'); 
  });

  container.addEventListener('click', (e) => {
    e.stopPropagation();
    container.classList.toggle('active');
    container.style.zIndex = container.classList.contains('active') ? topZ++ : 1;
    instruction.textContent = container.classList.contains('active') ? 
      'Click to hide full features': 'Click to see full features';
    instruction.style.opacity = 1; // make sure it's visible after click
  });

});
</script>
