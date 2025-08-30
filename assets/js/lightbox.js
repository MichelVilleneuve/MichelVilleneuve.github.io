// ===== App Data (images + features for each app) =====
const appData = {
  calcconv: {
    images: ["Images/CalcConv.jpg", "Images/CalcConv2.jpg"],
    features: `
      <ul>
        <li>Unit conversions</li>
        <li>Currency calculator</li>
        <li>Offline mode</li>
      </ul>
    `
  },
  cycling: {
    images: ["Images/CyclingTracker.png", "Images/CyclingTracker2.png"],
    features: `
      <ul>
        <li>Track speed & distance</li>
        <li>Save ride history</li>
        <li>Export to CSV</li>
      </ul>
    `
  }
};

let currentApp = null;
let currentIndex = 0;

// ===== Lightbox Controls =====
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

  // Show features only on first image
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
