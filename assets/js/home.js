/**
 * Home Page – Factory Image Slider
 * Controls the interactive slider in the "Inside the Factory" section.
 */
(function() {
  'use strict';

  const slides = [
    {
      title: "Cutting Department — Automated CAD Precision Spreading & Cutting",
      desc: "Computerized pattern nesting algorithms minimizing fabric waste below 12% across jersey and heavyweight fleece.",
      counter: "01 / 05",
      station: "Station 01"
    },
    {
      title: "High-Speed Circular Knitting Floor",
      desc: "Precision German needles maintaining flawless gauge consistency across single jersey, interlock, and French terry.",
      counter: "02 / 05",
      station: "Station 02"
    },
    {
      title: "Computerized Sewing & Overlock Line",
      desc: "45 synchronized sewing operators producing 3,500 finished garments per working shift with automated thread trims.",
      counter: "03 / 05",
      station: "Station 03"
    },
    {
      title: "Continuous Steam Tunnel Finishing",
      desc: "Steam relaxation chambers stabilizing fabric dimensional changes before entering poly-bag barcoding stations.",
      counter: "04 / 05",
      station: "Station 04"
    },
    {
      title: "In-House Quality Audit & Needle Scan",
      desc: "100% garment inspection protocol preventing foreign metal contaminants prior to seaworthy master carton packing.",
      counter: "05 / 05",
      station: "Station 05"
    }
  ];

  let current = 0;
  const titleEl = document.getElementById('slide-title');
  const descEl = document.getElementById('slide-desc');
  const counterEl = document.getElementById('slide-counter');
  const progressEl = document.getElementById('slide-progress');
  const stationEl = document.getElementById('slide-station');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');

  if (!titleEl || !prevBtn) return;

  function updateSlide(index) {
    current = ((index % slides.length) + slides.length) % slides.length;
    
    titleEl.textContent = slides[current].title;
    if (descEl) descEl.textContent = slides[current].desc;
    if (counterEl) counterEl.textContent = slides[current].counter;
    if (stationEl) stationEl.textContent = slides[current].station;
    if (progressEl) progressEl.style.width = ((current + 1) / slides.length * 100) + '%';

    dots.forEach(function(dot, idx) {
      if (idx === current) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  prevBtn.addEventListener('click', function() { updateSlide(current - 1); });
  nextBtn.addEventListener('click', function() { updateSlide(current + 1); });
  
  dots.forEach(function(dot, idx) {
    dot.addEventListener('click', function() { updateSlide(idx); });
  });

  // Auto-advance every 6 seconds
  let autoPlay = setInterval(function() { updateSlide(current + 1); }, 6000);
  
  // Pause auto-play on hover
  var sliderContainer = prevBtn.closest('.slider__container');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', function() { clearInterval(autoPlay); });
    sliderContainer.addEventListener('mouseleave', function() {
      autoPlay = setInterval(function() { updateSlide(current + 1); }, 6000);
    });
  }

  // Initialize first slide
  updateSlide(0);
})();
