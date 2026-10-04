/**
 * Main JavaScript for KZ Hosiery website.
 * Shared across all pages.
 */

// 1. Mobile Navigation Toggle
(function() {
  'use strict';
  
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;
  
  if (!hamburger || !mobileMenu) return;
  
  // Toggle mobile menu
  hamburger.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.contains('is-open');
    
    if (isOpen) {
      mobileMenu.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
    } else {
      mobileMenu.classList.add('is-open');
      hamburger.classList.add('is-active');
      hamburger.setAttribute('aria-expanded', 'true');
      body.style.overflow = 'hidden';
    }
  });
  
  // Close menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
    });
  });
  
  // Close menu on resize if open and screen becomes large
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
    }
  });
})();

// 2. Smooth Scroll for Anchor Links
(function() {
  'use strict';
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      
      // Skip if it's just '#' or empty
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
})();

// 3. Active Nav Link Highlighting
(function() {
  'use strict';
  
  // Get the current page path or default to 'index.html' if root
  let currentPath = window.location.pathname.split('/').pop();
  if (currentPath === '' || currentPath === '/') {
    currentPath = 'index.html';
  }
  
  // Find all nav links
  const navLinks = document.querySelectorAll('nav a, .nav__link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Check if link matches current page or if it's index.html and we're at root
    if (href === currentPath || (currentPath === 'index.html' && (href === '/' || href === ''))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();
