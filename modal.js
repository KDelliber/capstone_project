document.addEventListener('DOMContentLoaded', () => {
  /**
   * ============================
   * Back to Top Button Logic
   * ============================
   */
  const backToTopBtn = document.getElementById('backToTopBtn');
  const footer = document.querySelector('footer');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      // Show or hide the button based on scroll position
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }

      // Prevent button from overlapping the footer
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (footerTop < viewportHeight) {
          backToTopBtn.style.bottom = `${viewportHeight - footerTop + 20}px`;
        } else {
          backToTopBtn.style.bottom = '20px';
        }
      }
    });

    // Smooth scroll to top when button is clicked
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  /**
   * ============================
   * Three.js Shapes in Sidebar
   * ============================
   */
  const container = document.getElementById('threejs-container');

  if (container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0xefefef); // Match sidebar background
    container.appendChild(renderer.domElement);

    // Vertical positions for shapes
    const positions = [-15, -8, 0, 8, 15];

    // Shape 1: Cube (Red)
    const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      metalness: 0.5,
      roughness: 0.2,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0, positions[0], 0);
    scene.add(cube);

    // Shape 2: Pyramid (Yellow)
    const pyramidGeometry = new THREE.TetrahedronGeometry(2.5);
    const pyramidMaterial = new THREE.MeshStandardMaterial({
      color: 0xffff00,
      metalness: 0.5,
      roughness: 0.2,
    });
    const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
    pyramid.position.set(0, positions[1], 0);
    scene.add(pyramid);

    // Shape 3: Sphere (Green)
    const sphereGeometry = new THREE.SphereGeometry(2.5, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      metalness: 0.5,
      roughness: 0.2,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(0, positions[2], 0);
    scene.add(sphere);

    // Shape 4: Icosahedron (Purple)
    const icosahedronGeometry = new THREE.IcosahedronGeometry(2.5, 0);
    const icosahedronMaterial = new THREE.MeshStandardMaterial({
      color: 0x800080,
      metalness: 0.5,
      roughness: 0.2,
    });
    const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
    icosahedron.position.set(0, positions[3], 0);
    scene.add(icosahedron);

    // Shape 5: Torus (Blue)
    const torusGeometry = new THREE.TorusGeometry(2.5, 0.6, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x0000ff,
      metalness: 0.5,
      roughness: 0.2,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(0, positions[4], 0);
    scene.add(torus);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    camera.position.z = 45;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      pyramid.rotation.x += 0.015;
      pyramid.rotation.y += 0.015;

      sphere.rotation.x += 0.02;
      sphere.rotation.y += 0.02;

      icosahedron.rotation.x += 0.015;
      icosahedron.rotation.y += 0.015;

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();

    // Handle window resizing
    window.addEventListener('resize', () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
  }
});
