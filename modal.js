document.addEventListener('DOMContentLoaded', () => {
  /**
   * =============================
   *  Image Modal (Lightbox) Logic
   * =============================
   * This expects your HTML to have:
   *   <div id="myModal" class="modal">
   *     <span class="close">&times;</span>
   *     <img class="modal-content" id="imgModal">
   *     <div id="caption"></div>
   *   </div>
   *
   * And images with the class="zoom-img", e.g.:
   *   <img src="example.jpg" alt="Example" class="zoom-img">
   *
   * If you don’t use a modal or .zoom-img images, you can remove this section.
   */

  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('imgModal');
  const captionText = document.getElementById('caption');
  const closeBtn = document.getElementsByClassName('close')[0];

  // Check if modal elements exist (in case not on every page)
  if (modal && modalImg && captionText && closeBtn) {
    // For each clickable image
    document.querySelectorAll('.zoom-img').forEach(function(img) {
      img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;           // Set modal image to the clicked image
        captionText.innerHTML = this.alt;  // Set caption to alt text of clicked image
      });
    });

    // Close the modal on "X" click
    closeBtn.onclick = function() {
      modal.style.display = 'none';
    };

    // Optional: Close the modal if user clicks outside the image
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  /**
   * ============================
   *  "Back to Top" Button Logic
   * ============================
   * Expects a button:
   *   <button id="backToTopBtn">Back to Top</button>
   * in your HTML (usually in the footer).
   * 
   * This code:
   *   - Shows the button when scrolling beyond 300px from top
   *   - Smooth scrolls back to top when clicked
   */

  const backToTopBtn = document.getElementById('backToTopBtn');

  // Check if the button exists (in case not on every page)
  if (backToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });

    // Smooth scroll to top on click
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
