 1  document.addEventListener('DOMContentLoaded', () => {
 2    // ================
 3    // Image Modal Logic
 4    // ================
 5    const modal = document.getElementById('myModal');
 6    const modalImg = document.getElementById('imgModal');
 7    const captionText = document.getElementById('caption');
 8    const closeBtn = document.getElementsByClassName('close')[0];
 9
10    if (modal && modalImg && captionText && closeBtn) {
11      // For each clickable image
12      document.querySelectorAll('.zoom-img').forEach(function(img) {
13        img.addEventListener('click', function() {
14          modal.style.display = 'block';
15          modalImg.src = this.src;
16          captionText.innerHTML = this.alt;
17        });
18      });
19
20      // Close modal on X click
21      closeBtn.onclick = function() {
22        modal.style.display = 'none';
23      };
24
25      // Close modal if user clicks outside the image
26      modal.addEventListener('click', function(e) {
27        if (e.target === modal) {
28          modal.style.display = 'none';
29        }
30      });
31    }
32
33    // ========================
34    // "Back to Top" Logic
35    // ========================
36    const backToTopBtn = document.getElementById('backToTopBtn');
37    if (backToTopBtn) {
38      window.addEventListener('scroll', function() {
39        if (window.scrollY > 300) {
40          backToTopBtn.style.display = 'block';
41        } else {
42          backToTopBtn.style.display = 'none';
43        }
44      });
45
46      backToTopBtn.addEventListener('click', function() {
47        window.scrollTo({
48          top: 0,
49          behavior: 'smooth'
50        });
51      });
52    }
53  });
