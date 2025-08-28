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

      <!-- Instruction text -->
      <div class="click-instruction">Click to see full features</div>

      <!-- Features box -->
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

  <!-- All other apps with "Coming soon" -->
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
document.querySelectorAll('.img-container').forEach(container => {

  // Hover zoom
  container.addEventListener('mouseenter', () => {
    container.classList.add('hovered');
  });

  container.addEventListener('mouseleave', () => {
    container.classList.remove('hovered'); // remove zoom
    container.classList.remove('active');  // hide features box
  });

  // Click to toggle features box
  container.addEventListener('click', (e) => {
    e.stopPropagation();
    container.classList.toggle('active');
  });

});
</script>
