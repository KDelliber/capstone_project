document.addEventListener('DOMContentLoaded', () => {
  // Image Modal (Lightbox) Logic
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('imgModal');
  const captionText = document.getElementById('caption');
  const closeBtn = document.getElementsByClassName('close')[0];

  if (modal && modalImg && captionText && closeBtn) {
    document.querySelectorAll('.zoom-img').forEach(function(img) {
      img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      });
    });

    closeBtn.onclick = function() {
      modal.style.display = 'none';
    };

    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // "Back to Top" Button Logic
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });

    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
