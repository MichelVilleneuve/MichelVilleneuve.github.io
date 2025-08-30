const appData = {
  cycling: {
    images: ["Images/CyclingTracker.png","Images/CyclingTracker1.png"],
    features: "<ul><li>Distance</li><li>Road Slope</li><li>Calories</li></ul>"
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
  if(currentIndex >= appData[currentApp].images.length) currentIndex=0;
  showSlide(currentIndex);
}

function prevSlide(event) {
  event.stopPropagation();
  currentIndex--;
  if(currentIndex <0) currentIndex= appData[currentApp].images.length-1;
  showSlide(currentIndex);
}
document.addEventListener('DOMContentLoaded', () => {
    const imgContainers = document.querySelectorAll('.img-container');
    imgContainers.forEach(container => {
        container.addEventListener('mouseover', showClickText);
        container.addEventListener('mousemove', moveClickText);
        container.addEventListener('mouseout', hideClickText);
    });
});

function showClickText(event) {
    const text = event.currentTarget.querySelector('.click-instruction');
    text.style.opacity = 1;
}

function moveClickText(event) {
    const text = event.currentTarget.querySelector('.click-instruction');
    text.style.left = (event.clientX + 12) + 'px';
    text.style.top = (event.clientY + 12) + 'px';
}

function hideClickText(event) {
    const text = event.currentTarget.querySelector('.click-instruction');
    text.style.opacity = 0;
}
