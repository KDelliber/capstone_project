// modal.js

// Get the modal element
var modal = document.getElementById('myModal');
// Get the enlarged image within the modal
var modalImg = document.getElementById('imgModal');
// Get the caption text
var captionText = document.getElementById('caption');
// Get the <span> element to close the modal
var closeBtn = document.getElementsByClassName('close')[0];

// For each clickable image
document.querySelectorAll('.zoom-img').forEach(function(img) {
  img.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Optional: Close the modal if user clicks anywhere outside the image
modal.addEventListener('click', function(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
