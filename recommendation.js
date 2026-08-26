/* Page to open for the survey/quiz */
var QUIZ_PAGE = "quiz.html";

/* Edit this list: name, page, marks needed, majors, region */
var universities = [
  { name: "University of Medicine 1 (Yangon)", page: "um1.html",  minMarks: 500, majors: ["medicine"], region: "yangon" },
  { name: "University of Medicine, Mandalay",  page: "umm.html",  minMarks: 495, majors: ["medicine"], region: "mandalay" },
  { name: "Yangon Technological University",   page: "ytu.html",  minMarks: 470, majors: ["engineering", "computer"], region: "yangon" },
  { name: "Mandalay Technological University", page: "mtu.html",  minMarks: 460, majors: ["engineering"], region: "mandalay" },
  { name: "University of Computer Studies, Yangon", page: "ucsy.html", minMarks: 420, majors: ["computer"], region: "yangon" },
  { name: "Yangon University of Economics",    page: "yue.html",  minMarks: 400, majors: ["economics"], region: "yangon" },
  { name: "University of Yangon",              page: "uy.html",   minMarks: 350, majors: ["arts", "economics"], region: "yangon" },
  { name: "Yangon University of Education",    page: "yuoe.html", minMarks: 340, majors: ["education"], region: "yangon" }
];

document.addEventListener("DOMContentLoaded", function () {
  var marksInput = document.getElementById("marks");
  var regionSelect = document.getElementById("region");
  var results = document.getElementById("results");
  var recommendBtn = document.getElementById("recommendBtn");
  var quizBtn = document.getElementById("quizBtn");

  function getSelectedMajors() {
    var boxes = document.querySelectorAll(".major:checked");
    var list = [];
    for (var i = 0; i < boxes.length; i++) list.push(boxes[i].value);
    return list;
  }

  function show(items) {
    results.innerHTML = "";
    if (items.length === 0) {
      results.innerHTML = '<li class="muted">No matching university found. Try lower marks or another region.</li>';
      return;
    }
    for (var i = 0; i < items.length; i++) {
      var u = items[i];
      var li = document.createElement("li");
      li.innerHTML = '<a href="' + u.page + '">' + u.name + "</a>" +
                     '<div class="muted">Minimum marks: ' + u.minMarks + " | Region: " + u.region + "</div>";
      results.appendChild(li);
    }
  }

  function recommend() {
    var marks = parseInt(marksInput.value, 10);
    if (isNaN(marks)) {
      alert("Please enter your marks first.");
      return;
    }
    var majors = getSelectedMajors();
    var region = regionSelect.value;

    var matched = universities.filter(function (u) {
      var okMarks = marks >= u.minMarks;
      var okRegion = region === "" || u.region === region;
      var okMajor = majors.length === 0 || u.majors.some(function (m) {
        return majors.indexOf(m) !== -1;
      });
      return okMarks && okRegion && okMajor;
    });

    matched.sort(function (a, b) { return b.minMarks - a.minMarks; });
    show(matched);
  }

  recommendBtn.addEventListener("click", recommend);
  quizBtn.addEventListener("click", function () {
    window.location.href = QUIZ_PAGE;
  });
});
