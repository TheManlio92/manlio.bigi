var currentIndex = 0;
var images = document.querySelectorAll('.gallery img');
var imageLinks = document.getElementById('imageLinks');

function showImage(index) {
  if (index >= 0 && index < images.length) {
    images[currentIndex].style.display = 'none';
    currentIndex = index;
    images[currentIndex].style.display = 'block';
  }
}

function previousImage() {
  var newIndex = currentIndex - 1;
  showImage(newIndex);
}

function nextImage() {
  var newIndex = currentIndex + 1;
  showImage(newIndex);
}

function updateImageLinks() {
  imageLinks.innerHTML = '';

  for (var i = 0; i < images.length; i++) {
    var link = document.createElement('a');
    link.href = '#';
    link.textContent = i + 1;
    link.onclick = (function(index) {
      return function() {
        showImage(index);
        return false;
      };
    })(i);
    imageLinks.appendChild(link);
  }
}

showImage(0);
updateImageLinks();
