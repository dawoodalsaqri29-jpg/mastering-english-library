// Listening lessons: read a transcript aloud with the browser's built-in English voice.
// Buttons: data-speak="<transcript id>" (optional data-rate), and data-speak-stop.
(function () {
  "use strict";
  var buttons = document.querySelectorAll("[data-speak], [data-speak-stop]");
  if (!buttons.length) return;

  if (!("speechSynthesis" in window)) {
    buttons.forEach(function (b) { b.disabled = true; });
    document.querySelectorAll("[data-speak-note]").forEach(function (n) {
      n.textContent = "Your browser cannot play audio here. Open the transcript and read it instead.";
    });
    return;
  }

  function englishVoice() {
    var voices = window.speechSynthesis.getVoices();
    return voices.find(function (v) { return /^en-GB/i.test(v.lang); }) ||
           voices.find(function (v) { return /^en/i.test(v.lang); }) || null;
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      window.speechSynthesis.cancel();
      if (b.hasAttribute("data-speak-stop")) return;
      var source = document.getElementById(b.getAttribute("data-speak"));
      if (!source) return;
      var u = new SpeechSynthesisUtterance(source.textContent.replace(/\s+/g, " ").trim());
      u.lang = "en-GB";
      u.rate = parseFloat(b.getAttribute("data-rate") || "1");
      var v = englishVoice();
      if (v) u.voice = v;
      u.onerror = function (e) {
        if (e.error === "canceled" || e.error === "interrupted") return; // Stop or a new Play
        document.querySelectorAll("[data-speak-note]").forEach(function (n) {
          n.textContent = "The audio could not play in this browser. Open the transcript and read it instead.";
        });
      };
      window.speechSynthesis.speak(u);
    });
  });
})();
