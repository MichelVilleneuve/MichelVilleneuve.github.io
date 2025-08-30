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
