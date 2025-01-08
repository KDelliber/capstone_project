document.addEventListener('DOMContentLoaded', () => {
  /**
   * ================================
   *  Image Modal (Lightbox) Logic
   * ================================
   */
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('imgModal');
  const captionText = document.getElementById('caption');
  const closeBtn = document.querySelector('.close');

  if (modal && modalImg && captionText && closeBtn) {
    // Add click event to all images with class "zoom-img"
    document.querySelectorAll('.zoom-img').forEach((img) => {
      img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src; // Set modal image source to clicked image
        captionText.textContent = img.alt; // Set caption text to image's alt attribute
      });
    });

    // Close modal when "X" button is clicked
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  /**
   * ================================
   *  "Back to Top" Button Logic
   * ================================
   */
  const backToTopBtn = document.getElementById('backToTopBtn');
  const footer = document.querySelector('footer');

  if (backToTopBtn) {
    // Show/hide the button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block'; // Show button when scrolling down
      } else {
        backToTopBtn.style.display = 'none'; // Hide button near the top
      }

      // Prevent button from overlapping the footer
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (footerTop < viewportHeight) {
          // Footer is in view, adjust button position
          backToTopBtn.style.bottom = `${viewportHeight - footerTop + 20}px`;
        } else {
          // Footer is not in view, reset to default position
          backToTopBtn.style.bottom = '20px';
        }
      }
    });

    // Smooth scroll to the top when button is clicked
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling effect
      });
    });
  }
});
