// Claude Agents Landing Page JavaScript

document.addEventListener("DOMContentLoaded", function() {
  // Initialize i18n (must run before Lucide to preserve icons)
  if (typeof window.i18n !== "undefined" && window.i18n.initI18n) {
    window.i18n.initI18n();
  }

  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Language switcher event listeners
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      if (lang && typeof window.i18n !== "undefined" && window.i18n.setLanguage) {
        window.i18n.setLanguage(lang);
        // Re-create icons after language change (they may have been affected)
        if (typeof lucide !== "undefined") {
          setTimeout(function() { lucide.createIcons(); }, 50);
        }
      }
    });
  });

  // Navigation scroll effect
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      nav.classList.add("nav--scrolled");
    } else {
      nav.classList.remove("nav--scrolled");
    }
  }, { passive: true });

  // Mobile menu toggle
  const navToggle = document.getElementById("navToggle");
  if (navToggle) {
    navToggle.addEventListener("click", function() {
      nav.classList.toggle("nav--open");
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if (href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Scroll animations using IntersectionObserver
  const animateElements = document.querySelectorAll(".service-card, .pricing-card, .process-step, .testimonial");
  
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    animateElements.forEach(function(el) {
      el.style.opacity = "0.5";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(el);
    });

    // Add CSS class for visible state
    const style = document.createElement("style");
    style.textContent = ".visible { opacity: 1 !important; transform: translateY(0) !important; }";
    document.head.appendChild(style);
  }

  // Form submission handler
  const demoForm = document.getElementById("demoForm");
  if (demoForm) {
    demoForm.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you! We will contact you shortly to schedule your demo.");
      demoForm.reset();
    });
  }
});
