(function () {
  "use strict";

  var navigation = document.querySelector(".navbar") || document.querySelector("header");
  if (!navigation) return;
  navigation.classList.add("back-navigation");
  var isDetailPage = !!document.querySelector(".navbar");
  var isUniversityListPage = !!document.querySelector(".major-grid");
  var isCategoryListPage = !isDetailPage && navigation.tagName === "HEADER";
  var mainUniversityListUrl = new URL("Uni.html", window.location.href).href;
  if (isUniversityListPage || isCategoryListPage) {
    if (isUniversityListPage) {
      sessionStorage.removeItem("detailReturnUrl");
    }
    document.querySelectorAll("a[href]").forEach(function (link) {
      link.addEventListener("click", function () {
        var returnUrl = new URL(window.location.href);
        returnUrl.search = "";
        returnUrl.hash = "";
        sessionStorage.setItem("detailReturnUrl", returnUrl.href);
      });
    });
  }

  var button = document.createElement("button");
  button.type = "button";
  button.className = "detail-back-button";
  button.textContent = "Back";
  button.addEventListener("click", function () {
    var params = new URLSearchParams(window.location.search);
    var cameFromCompare = params.get("from") === "compare";
    var referrer = document.referrer;
    var cameFromThisSite = referrer && new URL(referrer, window.location.href).origin === window.location.origin;
    var savedReturnUrl = sessionStorage.getItem("detailReturnUrl");
    var hasCompareSnapshot = sessionStorage.getItem("compareReturnState");
    var referrerUrl = referrer ? new URL(referrer, window.location.href) : null;
    var cameFromMainUniversityList = referrerUrl && /\/Uni\.html$/i.test(referrerUrl.pathname);
    var hasValidListReturnUrl = savedReturnUrl && /\/(Medicine|Engineering|Computer|Business|Art|Education|Poly)\.html$/i.test(new URL(savedReturnUrl, window.location.href).pathname);
    if (isUniversityListPage) {
      window.location.replace(mainUniversityListUrl);
    } else if (cameFromCompare && hasCompareSnapshot && window.history.length > 1) {
      window.history.back();
    } else if (cameFromCompare && hasCompareSnapshot) {
      window.location.href = "compare.html";
    } else if (cameFromMainUniversityList) {
      sessionStorage.removeItem("detailReturnUrl");
      window.location.replace(mainUniversityListUrl);
    } else if (isDetailPage && hasValidListReturnUrl) {
      sessionStorage.removeItem("detailReturnUrl");
      window.location.replace(savedReturnUrl);
    } else if (cameFromThisSite && window.history.length > 1) {
      window.history.back();
    } else if (cameFromThisSite) {
      window.location.href = referrer;
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
