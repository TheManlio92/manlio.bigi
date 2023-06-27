// Selezione degli elementi
const images = document.querySelectorAll('.image');
const overlay = document.getElementById('overlay');
const expandedImage = document.getElementById('expanded-image');
const closeBtn = document.querySelector('.close');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
let currentIndex = 0;

// Funzione per visualizzare l'immagine espansa
function showImage(index) {
  overlay.style.display = 'block';
  expandedImage.src = images[index].src;
  currentIndex = index;
}

// Funzione per chiudere l'immagine espansa
function closeImage() {
  overlay.style.display = 'none';
}

// Funzione per passare all'immagine precedente
function previousImage() {
  if (currentIndex > 0) {
    showImage(currentIndex - 1);
  }
}

// Funzione per passare all'immagine successiva
function nextImage() {
  if (currentIndex < images.length - 1) {
    showImage(currentIndex + 1);
  }
}

// Aggiunta degli event listener
images.forEach((image, index) => {
  image.addEventListener('click', () => showImage(index));
});

closeBtn.addEventListener('click', closeImage);
leftArrow.addEventListener('click', previousImage);
rightArrow.addEventListener('click', nextImage);
