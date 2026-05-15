/* Doppler/Edward — site.js v5 */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Mobile nav ---------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    var toggles = document.querySelectorAll("[data-nav-toggle]");
    var navLinks = document.querySelector(".links");

    if (toggles.length && navLinks) {
      toggles.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var isOpen = navLinks.classList.toggle("mobile-open");
          btn.setAttribute("aria-expanded", String(isOpen));
        });
      });

      // close on outside click
      document.addEventListener("click", function (e) {
        if (navLinks.classList.contains("mobile-open") &&
            !navLinks.contains(e.target) &&
            !e.target.closest("[data-nav-toggle]")) {
          navLinks.classList.remove("mobile-open");
          toggles.forEach(function (b) { b.setAttribute("aria-expanded", "false"); });
        }
      });

      // close on Escape
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && navLinks.classList.contains("mobile-open")) {
          navLinks.classList.remove("mobile-open");
          toggles.forEach(function (b) { b.setAttribute("aria-expanded", "false"); });
        }
      });
    }

    /* ---- Scroll reveal ----------------------------------- */
    var revealEls = document.querySelectorAll(".reveal");
    if (revealEls.length) {
      if (reducedMotion) {
        revealEls.forEach(function (el) { el.classList.add("visible"); });
      } else {
        var revealObs = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        revealEls.forEach(function (el) { revealObs.observe(el); });
      }
    }

    /* ---- Evidence bar count-up --------------------------- */
    var statNums = document.querySelectorAll("[data-count]");
    if (statNums.length) {
      if (reducedMotion) {
        statNums.forEach(function (el) {
          el.textContent = el.getAttribute("data-display");
        });
      } else {
        var countObs = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var el = entry.target;
              animateCount(el);
              countObs.unobserve(el);
            }
          });
        }, { threshold: 0.4 });
        statNums.forEach(function (el) { countObs.observe(el); });
      }
    }

    /* ---- Throughline skill card toggle ------------------- */
    document.querySelectorAll(".skill-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var card = btn.closest(".skill-card");
        var expanded = card.getAttribute("data-expanded") === "true";
        card.setAttribute("data-expanded", String(!expanded));
        btn.setAttribute("aria-expanded", String(!expanded));
        btn.innerHTML = !expanded ? "&#9660; Hide detail" : "&#9658; Show detail";
      });
    });

    /* ---- Experience card toggle -------------------------- */
    document.querySelectorAll(".exp-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var card = btn.closest(".exp-card");
        var expanded = card.getAttribute("data-expanded") === "true";
        card.setAttribute("data-expanded", String(!expanded));
        btn.setAttribute("aria-expanded", String(!expanded));
        btn.textContent = !expanded ? "▾ Hide detail" : "▸ Show detail";
      });
    });

    /* ---- Pillar card keyboard expand --------------------- */
    document.querySelectorAll(".pillar-card").forEach(function (card) {
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          var link = card.querySelector("a.card-link");
          if (link) link.click();
        }
      });
    });
  });

  /* ---- Count-up helper ----------------------------------- */
  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCount(el) {
    var target  = parseFloat(el.getAttribute("data-count"));
    var display = el.getAttribute("data-display");
    var duration = 1500;
    var start = null;
    var isInt = (target === Math.floor(target));

    function step(ts) {
      if (!start) start = ts;
      var elapsed = ts - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeOut(progress);
      var current = target * eased;
      el.textContent = isInt ? Math.floor(current) : current.toFixed(0);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = display;
      }
    }
    requestAnimationFrame(step);
  }
})();
