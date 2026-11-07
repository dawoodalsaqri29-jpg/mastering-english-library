// Quick level check on levels.html: 12 questions, three per level, scored in the browser.
// Nothing is sent or stored.
(function () {
  "use strict";
  var root = document.getElementById("placement");
  if (!root) return;

  var LEVELS = ["B1", "B2", "C1", "C2"];
  var Q = [
    ["B1", "I ___ to Dubai three times.", ["go", "have been", "am going"], 1],
    ["B1", "If it rains tomorrow, we ___ at home.", ["stay", "will stay", "would stay"], 1],
    ["B1", "She's very interested ___ photography.", ["on", "in", "at"], 1],
    ["B2", "By the time we arrived, the film ___.", ["started", "has started", "had started"], 2],
    ["B2", "He denied ___ the window.", ["to break", "breaking", "break"], 1],
    ["B2", "The report ___ by Friday.", ["must finish", "must be finished", "must finished"], 1],
    ["C1", "___ had I sat down than the phone rang.", ["No sooner", "Hardly", "As soon as"], 0],
    ["C1", "___ the evidence, the committee rejected the proposal.", ["Considered", "Having considered", "To consider"], 1],
    ["C1", "Which is the formal equivalent of \"look into\" a problem?", ["investigate", "check out", "dig into"], 0],
    ["C2", "It is essential that he ___ informed immediately.", ["is", "be", "will be"], 1],
    ["C2", "What she lacks ___ experience.", ["are", "is", "be"], 1],
    ["C2", "\"Her remarks were, to put it mildly, ill-judged.\" The speaker thinks the remarks were:", ["slightly unwise", "very bad", "acceptable"], 1]
  ];

  var form = document.createElement("form");
  form.className = "placement";
  form.noValidate = true;
  form.innerHTML = Q.map(function (q, i) {
    return '<fieldset><legend><span class="qn">' + (i + 1) + ".</span> " + q[1].replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</legend>" +
      q[2].map(function (opt, j) {
        return '<label><input type="radio" name="q' + i + '" value="' + j + '"> ' + opt + "</label>";
      }).join("") + "</fieldset>";
  }).join("") +
    '<p><button type="submit" class="toggle">See my level</button> <button type="reset" class="toggle secondary">Start again</button></p>' +
    '<div class="result" role="status" aria-live="polite"></div>';
  root.innerHTML = "";
  root.appendChild(form);
  var result = form.querySelector(".result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var score = { B1: 0, B2: 0, C1: 0, C2: 0 };
    var answered = 0;
    Q.forEach(function (q, i) {
      var fs = form.querySelectorAll("fieldset")[i];
      var picked = form.querySelector('input[name="q' + i + '"]:checked');
      fs.classList.remove("right", "wrong");
      var tag = fs.querySelector(".verdict");
      if (tag) tag.remove();
      if (!picked) return;
      answered++;
      var ok = Number(picked.value) === q[3];
      if (ok) score[q[0]]++;
      fs.classList.add(ok ? "right" : "wrong");
      tag = document.createElement("span");
      tag.className = "verdict";
      tag.textContent = ok ? " Correct" : " Review: " + q[2][q[3]];
      fs.querySelector("legend").appendChild(tag);
    });
    if (answered < Q.length) {
      result.innerHTML = "<p>Please answer all " + Q.length + " questions (" + (Q.length - answered) + " left).</p>";
      return;
    }
    // Your level is the highest one you pass (2 of 3), as long as every level below it is passed too.
    var level = null;
    for (var k = 0; k < LEVELS.length; k++) {
      if (score[LEVELS[k]] >= 2) level = LEVELS[k]; else break;
    }
    var total = score.B1 + score.B2 + score.C1 + score.C2;
    var start = level ? (level === "C2" ? "C2" : LEVELS[LEVELS.indexOf(level) + 1]) : "B1";
    var msg = level
      ? "You are comfortable at <strong>" + level + "</strong>." + (level === "C2" ? " Keep polishing your style with the C2 lessons." : " The best place to grow is <strong>" + start + "</strong>.")
      : "Start with <strong>B1</strong> and build a strong base.";
    result.innerHTML = "<p>You scored " + total + " out of " + Q.length + ". " + msg + "</p>" +
      '<p><a class="toggle" href="library.html?level=' + start + '">Open the ' + start + " lessons</a></p>" +
      "<p><small>This is a short guide, not an exam. Each question now shows whether it was correct, and the right answer for any to review.</small></p>";
  });

  form.addEventListener("reset", function () {
    form.querySelectorAll("fieldset").forEach(function (fs) { fs.classList.remove("right", "wrong"); });
    form.querySelectorAll(".verdict").forEach(function (t) { t.remove(); });
    result.innerHTML = "";
  });
})();
