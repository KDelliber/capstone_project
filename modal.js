document.addEventListener('DOMContentLoaded', () => {
  /**
   * Image Modal (Lightbox) Logic
   */
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('imgModal');
  const captionText = document.getElementById('caption');
  const closeBtn = document.querySelector('.close'); // Use querySelector for consistency

  // Check if modal elements exist
  if (modal && modalImg && captionText && closeBtn) {
    document.querySelectorAll('.zoom-img').forEach((img) => {
      img.addEventListener('click', () => {
        modal.style.display = 'block';         // Show the modal
        modalImg.src = img.src;                // Set modal image to the clicked image's source
        captionText.textContent = img.alt;     // Set caption text to the alt attribute
      });
    });

    // Close the modal when the "X" button is clicked
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Close the modal when clicking outside the image
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  /**
   * "Back to Top" Button Logic
   */
  const backToTopBtn = document.getElementById('backToTopBtn');

  if (backToTopBtn) {
    // Show/hide the button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block'; // Show button when scrolling down
      } else {
        backToTopBtn.style.display = 'none'; // Hide button near the top
      }
    });

    // Smooth scroll to the top when the button is clicked
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling effect
      });
    });
  }
});
