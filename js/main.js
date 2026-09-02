/**
 * PORTFOLIO MAIN SCRIPT
 * ==========================================================
 * Adarsh Kumar Singh — Engineering Portfolio
 * 
 * Simple, accessible vanilla JavaScript for navigation, scrollspy,
 * clipboard copy, and contact data hydration.
 * ==========================================================
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollSpy();
    initCopyButtons();
    hydrateContactLinks();
  });

  // --------------------------------------------------------
  // 1. STICKY HEADER & MOBILE NAVIGATION
  // --------------------------------------------------------
  function initNavigation() {
    const header = document.getElementById('site-header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Subtle scroll header border
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.style.borderBottomColor = 'var(--border)';
      } else {
        header.style.borderBottomColor = 'var(--border-subtle)';
      }
    }, { passive: true });

    // Mobile Menu Toggle
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!isExpanded));
        navMenu.classList.toggle('open');
      });

      // Close menu on link click
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        });
      });

      // Close menu on outside click
      document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  // --------------------------------------------------------
  // 2. SCROLLSPY (ACTIVE SECTION INDICATOR)
  // --------------------------------------------------------
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!('IntersectionObserver' in window) || !sections.length) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${activeId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  // --------------------------------------------------------
  // 3. COPY TO CLIPBOARD UTILITY
  // --------------------------------------------------------
  function initCopyButtons() {
    const copyBtns = document.querySelectorAll('.copy-btn');

    copyBtns.forEach(btn => {
      btn.addEventListener('click', async () => {
        const textToCopy = btn.getAttribute('data-clipboard');
        if (!textToCopy) return;

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(textToCopy);
          } else {
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
          }

          const originalText = btn.textContent;
          btn.textContent = 'Copied!';
          btn.classList.add('copied');

          setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.warn('Clipboard copy error:', err);
        }
      });
    });
  }

  // --------------------------------------------------------
  // 4. HYDRATE CONTACT LINKS FROM CONFIG
  // --------------------------------------------------------
  function hydrateContactLinks() {
    if (typeof PORTFOLIO_CONFIG === 'undefined' || !PORTFOLIO_CONFIG.contact) return;

    const contact = PORTFOLIO_CONFIG.contact;
    const emailLink = document.getElementById('contact-email-link');
    const githubLink = document.getElementById('contact-github-link');
    const linkedinLink = document.getElementById('contact-linkedin-link');
    const copyEmailBtn = document.getElementById('copy-email-btn');

    if (emailLink && contact.email) {
      emailLink.href = `mailto:${contact.email}`;
      emailLink.textContent = contact.email;
    }

    if (copyEmailBtn && contact.email) {
      copyEmailBtn.setAttribute('data-clipboard', contact.email);
    }

    if (githubLink && contact.github) {
      githubLink.href = contact.github;
      if (contact.githubDisplay) {
        githubLink.textContent = contact.githubDisplay;
      }
    }

    if (linkedinLink && contact.linkedin) {
      linkedinLink.href = contact.linkedin;
      if (contact.linkedinDisplay) {
        linkedinLink.textContent = contact.linkedinDisplay;
      }
    }
  }

})();
