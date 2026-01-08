document.addEventListener("DOMContentLoaded", function () {
  var navToggles = document.querySelectorAll("[data-nav-toggle]");
  var navLinks = document.querySelector(".links");

  if (navToggles.length && navLinks) {
    navToggles.forEach(function (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.addEventListener("click", function () {
        var isOpen = navLinks.classList.toggle("mobile-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }

  var heroVideo = document.getElementById("heroVideo");
  var muteToggle = document.getElementById("muteToggle");

  if (heroVideo && muteToggle) {
    heroVideo.volume = 0.5;

    function updateMuteButton() {
      if (heroVideo.muted) {
        muteToggle.classList.add("muted");
        muteToggle.classList.remove("unmuted");
      } else {
        muteToggle.classList.add("unmuted");
        muteToggle.classList.remove("muted");
      }
    }

    updateMuteButton();

    muteToggle.addEventListener("click", function () {
      heroVideo.muted = !heroVideo.muted;
      updateMuteButton();
    });
  }
});
