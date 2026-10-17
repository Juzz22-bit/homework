"use strict";

/* =========================================
   MY HANDYMAN — INTERACTIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal();
  initMobileMenu();
  initBookingForm();
  initServiceButtons();
  initFooterYear();
});

/* =========================================
   1. SCROLL REVEAL ANIMATIONS
========================================= */

function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      element.classList.add("is-visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          // Each element animates only once.
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

/* =========================================
   2. MOBILE NAVIGATION
========================================= */

function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (!toggle || !navLinks) return;

  const links = navLinks.querySelectorAll("a");

  function setMenuState(isOpen) {
    navLinks.classList.toggle("open", isOpen);
    toggle.classList.toggle("active", isOpen);

    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    document.body.classList.toggle("menu-open", isOpen);
  }

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("open");
    setMenuState(!isOpen);
  });

  // Close the menu after selecting a navigation link.
  links.forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  // Close with Escape.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });

  // Reset mobile navigation when returning to desktop width.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 780) {
      setMenuState(false);
    }
  });
}

/* =========================================
   3. SERVICE SELECTION
========================================= */

function initServiceButtons() {
  const serviceLinks = document.querySelectorAll("[data-service]");
  const serviceSelect = document.getElementById("service");

  if (!serviceSelect) return;

  serviceLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const serviceName = link.dataset.service;

      const matchingOption = Array.from(serviceSelect.options)
        .find((option) => option.value === serviceName);

      if (matchingOption) {
        serviceSelect.value = serviceName;
      }

      // Let the browser update the select field before scrolling.
      window.setTimeout(() => {
        serviceSelect.focus({ preventScroll: true });
      }, 350);
    });
  });
}

/* =========================================
   4. BOOKING FORM
========================================= */

function initBookingForm() {
  const form = document.getElementById("bookingForm");
  const dateInput = document.getElementById("date");
  const message = document.getElementById("formMessage");

  if (!form || !dateInput || !message) return;

  // Use the visitor's local date, not a UTC date.
  function getLocalDateString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  // Prevent selecting dates


// in the past.
  dateInput.min = getLocalDateString();

  function showMessage(type, title, description) {
    message.className = `form-message ${type}`;
    message.replaceChildren();

    const heading = document.createElement("strong");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = description;

    message.append(heading, paragraph);
    message.hidden = false;
    message.focus();
  }

  // Clear old feedback when the user edits the form.
  form.addEventListener("input", () => {
    if (!message.hidden) {
      message.hidden = true;
    }
  });

  form.addEventListener("change", () => {
    if (!message.hidden) {
      message.hidden = true;
    }
  });

  form.addEventListener("submit", (event) => {
    // This demo deliberately does not send data to a server.
    event.preventDefault();

    // Run native browser validation first.
    if (!form.reportValidity()) {
      return;
    }

    // Extra date validation.
    const selectedDate = dateInput.value;

    if (selectedDate < getLocalDateString()) {
      showMessage(
        "error",
        "Please choose a future date.",
        "The preferred date cannot be in the past."
      );

      dateInput.focus();
      return;
    }

    // Check the required description length.
    const details = document.getElementById("details");

    if (details.value.trim().length < 10) {
      showMessage(
        "error",
        "Please add more details.",
        "Describe the job in at least 10 characters."
      );

      details.focus();
      return;
    }

    /*
      Demo behaviour only:
      No network request is made.
      No personal data is stored or transmitted.
      Connect a real form backend before launch.
    */

    showMessage(
      "success",
      "Your form has been validated!",
      "This is a demo: your request has NOT been sent to the handyman. " +
      "Connect an email service or backend to submit real booking requests. " +
      "Your appointment is not confirmed."
    );

    message.scrollIntoView({
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches ? "auto" : "smooth",
      block: "nearest"
    });
  });
}

/* =========================================
   5. AUTOMATIC FOOTER YEAR
========================================= */

function initFooterYear() {
  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}