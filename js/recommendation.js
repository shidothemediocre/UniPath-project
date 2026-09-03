/* Recommendation page logic
   Edit the `universities` array below to match your real data.
*/


var universities = [
  {
    name: "University of Medicine 1, Yangon",
    page: "UM1.html",
    region: "yangon",
    majors: ["medicine"],
    minMarks: 500
  },
  {
    name: "University of Medicine, Mandalay",
    page: "umm.html",
    region: "mandalay",
    majors: ["medicine"],
    minMarks: 500
  },
  {
    name: "Yangon Technological University",
    page: "YTU.html",
    region: "yangon",
    majors: ["science", "it"],
    minMarks: 480
  },
  {
    name: "Mandalay Technological University",
    page: "MTU.html",
    region: "mandalay",
    majors: ["science", "it"],
    minMarks: 470
  },
  {
    name: "Yangon University",
    page: "yu.html",
    region: "yangon",
    majors: ["arts", "science", "business"],
    minMarks: 350
  },
  {
    name: "Mandalay University",
    page: "mul.html",
    region: "mandalay",
    majors: ["arts", "science", "business"],
    minMarks: 350
  },
  {
    name: "Yangon University of Economics",
    page: "yue.html",
    region: "yangon",
    majors: ["business"],
    minMarks: 400
  },
  {
    name: "University of Computer Studies, Yangon",
    page: "UCSY.html",
    region: "yangon",
    majors: ["it"],
    minMarks: 450
  }
];

var HOME_PAGE = "../index.html";
var QUIZ_PAGE = "quiz.html";

var REGION_LABELS = {
  yangon: "Yangon",
  mandalay: "Mandalay",
  other: "Other regions",
  any: "No preference"
};

function getCheckedMajors() {
  var boxes = document.getElementsByName("major");
  var majors = [];
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].checked) {
      majors.push(boxes[i].value);
    }
  }
  return majors;
}

/* ---------- inline validation ---------- */

function clearErrors() {
  var fields = document.querySelectorAll(".field");
  for (var i = 0; i < fields.length; i++) {
    fields[i].classList.remove("error");
  }
}

function markError(name) {
  var f = document.querySelector(".field[data-f='" + name + "']");
  if (f) f.classList.add("error");
  return f;
}
function validate(marks, majors, region) {
  clearErrors();
  var firstError = null;

  if (isNaN(marks) || marks < 0 || marks > 600) {
    firstError = markError("marks");
  }
  if (majors.length === 0) {
    firstError = firstError || markError("majors");
  }
  if (!region) {
    firstError = firstError || markError("region");
  }

  if (firstError) {
    firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    return false;
  }
  return true;
}

/* ---------- matching ---------- */

function showResults(marks, majors, region) {
  // Keep universities the user qualifies for, in the chosen region,
  // and matching at least one chosen major.
  var matched = universities.filter(function (uni) {
    var okMarks = marks >= uni.minMarks;
    var okRegion = (region === "any") || (uni.region === region);
    var okMajor = uni.majors.some(function (m) {
      return majors.indexOf(m) !== -1;
    });
    return okMarks && okRegion && okMajor;
  });

  // Highest-requirement universities first
  matched.sort(function (a, b) { return b.minMarks - a.minMarks; });

  var list = document.getElementById("recommendations");
  list.innerHTML = "";

  if (matched.length === 0) {
    list.innerHTML = "<li>No universities match all your choices. Try different majors or region, or browse the full list on <a href='Uni.html'>Universities page</a>.</li>";
  } else {
    matched.forEach(function (uni) {
      var reasons = [];
      reasons.push("your marks (" + marks + ") meet the " + uni.minMarks + "+ requirement");
      if (region !== "any") {
        reasons.push("located in " + REGION_LABELS[uni.region]);
      }

      var li = document.createElement("li");
      li.innerHTML =
        "<a href='" + uni.page + "'>" + uni.name + "</a>" +
        "<div class='uni-meta'>Region: " + REGION_LABELS[uni.region] +
        " | Minimum marks: " + uni.minMarks + "+</div>" +
        "<div class='uni-why'>Why this match: <b>" + reasons.join(", ") + "</b></div>";
      list.appendChild(li);
    });
  }

  document.getElementById("summary").textContent =
    "Based on your marks (" + marks + "), chosen majors (" + majors.join(", ") +
    "), and region: " + REGION_LABELS[region] + ".";

  document.getElementById("form-card").style.display = "none";
  document.getElementById("result-card").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showForm() {
  document.getElementById("form-card").style.display = "block";
  document.getElementById("result-card").style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  var recommendBtn = document.getElementById("recommend-btn");
  var quizBtn = document.getElementById("quiz-btn");
  var editBtn = document.getElementById("edit-btn");
  var homeBtn = document.getElementById("home-btn");
  var homeBtn2 = document.getElementById("home-btn-2");
  var marksInput = document.getElementById("marks");
  var regionSelect = document.getElementById("region");

  recommendBtn.addEventListener("click", function () {
    var marks = parseInt(marksInput.value, 10);
    var majors = getCheckedMajors();
    var region = regionSelect.value;

    if (!validate(marks, majors, region)) {
      return;
    }

    showResults(marks, majors, region);
  });
  // Clear error state as soon as the user fixes a field
  marksInput.addEventListener("input", function () {
    var f = this.closest(".field");
    if (f) f.classList.remove("error");
  });
  regionSelect.addEventListener("change", function () {
    var f = this.closest(".field");
    if (f) f.classList.remove("error");
  });
  var boxes = document.getElementsByName("major");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("change", function () {
      var f = this.closest(".field");
      if (f) f.classList.remove("error");
    });
  }

  quizBtn.addEventListener("click", function () {
    window.location.href = QUIZ_PAGE;
  });

  editBtn.addEventListener("click", showForm);

  function goHome() {
    window.location.href = HOME_PAGE;
  }
  homeBtn.addEventListener("click", goHome);
  homeBtn2.addEventListener("click", goHome);
});
