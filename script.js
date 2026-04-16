/* ============================================================
   Muhammad Umar Shinwari — Portfolio Site
   Minimal JS: mobile menu, smooth scroll active-link highlighting,
   and dynamic footer year.
   ============================================================ */

(function () {
    'use strict';

    // ---------- Footer year ----------
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ---------- Mobile nav toggle ----------
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('open');
        });

        // Close menu when a link is clicked (mobile)
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('open');
            });
        });
    }

    // ---------- Active section highlighting ----------
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function setActiveLink() {
        const scrollY = window.pageYOffset;
        let currentId = '';

        sections.forEach(function (section) {
            const top = section.offsetTop - 120;
            if (scrollY >= top) currentId = section.id;
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === '#' + currentId) link.classList.add('active');
        });
    }

    // Throttle via requestAnimationFrame for smooth scroll perf
    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                setActiveLink();
                ticking = false;
            });
            ticking = true;
        }
    });

    setActiveLink();
})();
