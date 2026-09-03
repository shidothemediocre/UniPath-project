(function () {
  "use strict";

  var searchInput = document.getElementById("globalSearch");
  var searchButton = document.getElementById("searchBtn");
  var resultsContainer = document.getElementById("searchResults");
  if (!searchInput || !searchButton || !resultsContainer) return;

  // These are the existing category pages; their card markup remains the source of truth.
  var sourcePages = [
    "html/Medicine.html", "html/Engineering.html", "html/Computer.html", "html/Business.html",
    "html/Art.html", "html/Education.html", "html/Poly.html"
  ];
  var universities = [];
  var loadedSources = 0;

  function normalize(value) {
    return value.toLowerCase().replace(/\s+/g, " ").trim();
  }

  function cleanName(element) {
    return (element.innerText || element.textContent).replace(/\s+/g, " ").trim();
  }

  function acronym(name) {
    return name.split(/\s+/).filter(function (word) {
      return word.length > 2 && word.toLowerCase() !== "the";
    }).map(function (word) {
      return word.charAt(0);
    }).join("").toLowerCase();
  }

  function addUniversity(name, absoluteHref, searchableText, isLinkedCard) {
    var existing = universities.find(function (university) {
      return university.href === absoluteHref &&
        (isLinkedCard || university.isLinkedCard);
    });
    if (existing) {
      if (isLinkedCard) existing.name = name;
      existing.searchableText = normalize(existing.searchableText + " " + searchableText);
      return;
    }
    universities.push({
      name: name,
      href: absoluteHref,
      isLinkedCard: isLinkedCard,
      searchableText: normalize(searchableText)
    });
  }

  function addCardsFromPage(html, page) {
    var documentParser = new DOMParser();
    var sourceDocument = documentParser.parseFromString(html, "text/html");
    var cards = sourceDocument.querySelectorAll(".university-list .card");

    for (var i = 0; i < cards.length; i++) {
      var link = cards[i].querySelector("a[href]");
      var name = (link || cards[i]).textContent.replace(/\s+/g, " ").trim();
      var href = link ? link.getAttribute("href") : page;
      var absoluteHref = new URL(href, new URL(page, window.location.href)).href;
      addUniversity(
        name,
        absoluteHref,
        sourceDocument.title + " " +
        (sourceDocument.querySelector("h1") ? sourceDocument.querySelector("h1").textContent : "") + " " +
        cards[i].textContent + " " + acronym(name),
        Boolean(link)
      );
    }

  }

  function addFeatured(nameSelector, href, searchableSelector) {
    var nameElement = document.querySelector(nameSelector);
    if (!nameElement) return;
    var absoluteHref = new URL(href, window.location.href).href;
    addUniversity(
      cleanName(nameElement),
      absoluteHref,
      nameElement.textContent + " " +
      document.querySelector(searchableSelector).textContent,
      true
    );
  }

  addFeatured(".feature-left h2", "html/UM1.html", ".feature-left");
  addFeatured(".small-content h3", "html/UM2.html", ".small-content");
  addFeatured(".right-text h4", "html/UM2.html", ".right-text");
  addFeatured(".footer-text h2", "html/YTU.html", ".footer-text");
  addFeatured(".computer-content h2", "html/UIT.html", ".computer-content");

  function render(query) {
    var terms = normalize(query).split(" ").filter(Boolean);
    var seenLinks = {};
    var matches = universities.filter(function (university) {
      return terms.every(function (term) {
        return university.searchableText.indexOf(term) !== -1;
      });
    }).filter(function (university) {
      if (!university.isLinkedCard || seenLinks[university.href]) return !university.isLinkedCard;
      seenLinks[university.href] = true;
      return true;
    });

    resultsContainer.innerHTML = "";
    resultsContainer.style.display = terms.length ? "block" : "none";
    if (!terms.length) return;

    if (matches.length === 0) {
      resultsContainer.textContent = "No universities found";
      return;
    }

    for (var i = 0; i < matches.length; i++) {
      var result = document.createElement("a");
      result.className = "search-result";
      result.href = matches[i].href;
      result.textContent = matches[i].name;
      resultsContainer.appendChild(result);
    }
  }

  function loadSource(page) {
    return fetch(page)
      .then(function (response) {
        if (!response.ok) throw new Error("Unable to load " + page);
        return response.text();
      })
      .then(function (html) {
        addCardsFromPage(html, page);
      })
      .catch(function (error) {
        console.error("University search source failed:", error);
      })
      .then(function () {
        loadedSources += 1;
        if (loadedSources === sourcePages.length) render(searchInput.value);
      });
  }

  searchInput.addEventListener("input", function () {
    render(this.value);
  });

  searchButton.addEventListener("click", function () {
    render(searchInput.value);
  });

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      render(searchInput.value);
    }
  });

  sourcePages.forEach(loadSource);
})();
