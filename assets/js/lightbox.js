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
    featuresFile: "features/cycling.html"
  },
  calcconv: {
    images: ["Images/CalcConv.jpg"],
    featuresFile: "features/calcconv.html"
  },
  unitscalculator: {
    images: ["Images/UnitsCalculator.jpg"],
    featuresFile: "features/unitscalculator.html"
  },
  fieldcad: {
    images: ["Images/FieldCAD.jpg"],
    featuresFile: "features/fieldcad.html"
  },
  notepad: {
    images: ["Images/NotePad.jpg"],
    featuresFile: "features/notepad.html"
  },
  flowchart: {
    images: ["Images/FlowChart.jpg"],
    featuresFile: "features/flowchart.html"
  },
  brushdraw: {
    images: ["Images/BrushDraw.png"],
    featuresFile: "features/brushdraw.html"
  }
};

let currentApp = null;
let currentIndex = 0;

function openLightbox(app, index) {
  currentApp = app;
  currentIndex = index;
  const appInfo = appData[app];

  document.getElementById("lightbox").style.display = "flex";
  updateLightbox();

  // Load features from file
  if (appInfo.featuresFile) {
    fetch(appInfo.featuresFile)
      .then(response => response.text())
      .then(data => {
        document.getElementById("features-box").innerHTML = data;
      })
      .catch(err => {
        document.getElementById("features-box").innerHTML = "<p>Features not available.</p>";
        console.error("Error loading features:", err);
      });
  }
}

function updateLightbox() {
  const appInfo = appData[currentApp];
  document.getElementById("lightbox-img").src = appInfo.images[currentIndex];
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextSlide(event) {
  event.stopPropagation();
  const appInfo = appData[currentApp];
  currentIndex = (currentIndex + 1) % appInfo.images.length;
  updateLightbox();
}

function prevSlide(event) {
  event.stopPropagation();
  const appInfo = appData[currentApp];
  currentIndex = (currentIndex - 1 + appInfo.images.length) % appInfo.images.length;
  updateLightbox();
}
