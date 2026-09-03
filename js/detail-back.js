(function () {
  "use strict";

  var navigation = document.querySelector(".navbar") || document.querySelector("header");
  if (!navigation) return;
  navigation.classList.add("back-navigation");

  var button = document.createElement("button");
  button.type = "button";
  button.className = "detail-back-button";
  button.textContent = "Back";
  button.addEventListener("click", function () {
    var referrer = document.referrer;
    var cameFromThisSite = referrer && new URL(referrer, window.location.href).origin === window.location.origin;
    if (cameFromThisSite && window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = navigation.tagName === "HEADER" ? "Uni.html" : "../index.html";
    }
  });
  button.style.cssText = "padding:8px 16px;border:1px solid rgba(255,255,255,.25);border-radius:10px;background:rgba(255,255,255,.10);color:inherit;font:inherit;cursor:pointer;order:-1;margin-right:24px;";
  var style = document.createElement("style");
  style.textContent = [
    ".back-navigation .detail-back-button { flex: 0 0 auto; }",
    "@media (max-width: 700px) {",
    "  .back-navigation { flex-direction: column; align-items: stretch; }",
    "  .back-navigation .detail-back-button { width: 100%; margin: 0 0 24px 0; }",
    "  .back-navigation .nav-title { text-align: center; }",
    "}"
  ].join("");
  document.head.appendChild(style);
  navigation.appendChild(button);
})();
