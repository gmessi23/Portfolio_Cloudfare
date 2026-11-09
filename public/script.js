"use strict";

(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const flow = document.querySelector(".flow");
  const replay = document.getElementById("replay");
  if (!flow || !replay) return;

  // With reduced motion the pipeline is shown in its final state, so there is nothing to replay.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    replay.hidden = true;
    return;
  }

  replay.addEventListener("click", () => {
    flow.classList.add("reset");
    void flow.offsetWidth; // force a reflow so the animations restart from the beginning
    flow.classList.remove("reset");
  });
})();
