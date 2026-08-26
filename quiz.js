/* University recommendation quiz logic
   Edit the `universities` array below to match your real data.
*/

var universities = [
  {
    name: "University of Medicine 1, Yangon",
    page: "um1.html",
    region: "yangon",
    fields: ["medicine"],
    careers: ["doctor"],
    minMarks: 500
  },
  {
    name: "University of Medicine, Mandalay",
    page: "umm.html",
    region: "mandalay",
    fields: ["medicine"],
    careers: ["doctor"],
    minMarks: 500
  },
  {
    name: "Yangon Technological University",
    page: "ytu.html",
    region: "yangon",
    fields: ["science", "it"],
    careers: ["engineer", "developer"],
    minMarks: 480
  },
  {
    name: "Mandalay Technological University",
    page: "mtu.html",
    region: "mandalay",
    fields: ["science", "it"],
    careers: ["engineer", "developer"],
    minMarks: 470
  },
  {
    name: "Yangon University",
    page: "yu.html",
    region: "yangon",
    fields: ["arts", "science", "business"],
    careers: ["teacher", "business"],
    minMarks: 350
  },
  {
    name: "Mandalay University",
    page: "mul.html",
    region: "mandalay",
    fields: ["arts", "science", "business"],
    careers: ["teacher", "business"],
    minMarks: 350
  },
  {
    name: "Yangon University of Economics",
    page: "yue.html",
    region: "yangon",
    fields: ["business"],
    careers: ["business"],
    minMarks: 400
  },
  {
    name: "University of Computer Studies, Yangon",
    page: "ucsy.html",
    region: "yangon",
    fields: ["it"],
    careers: ["developer"],
    minMarks: 450
  }
];

var HOME_PAGE = "home.html";

function getSelected(name) {
  var options = document.getElementsByName(name);
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      return options[i].value;
    }
  }
  return null;
}

function calculateScore(uni, answers) {
  var score = 0;

  // Field match (+3)
  if (uni.fields.indexOf(answers.field) !== -1) {
    score += 3;
  }

  // Region match (+2), or "any" gives +1
  if (answers.region === "any") {
    score += 1;
  } else if (uni.region === answers.region) {
    score += 2;
  }

  // Career match (+2)
  if (uni.careers.indexOf(answers.career) !== -1) {
    score += 2;
  }

  // Marks match (+2 if estimated marks >= required, +1 if not sure)
  var marks = parseInt(answers.marks, 10);
  if (isNaN(marks)) {
    score += 1; // "Not sure"
  } else if (marks >= uni.minMarks) {
    score += 2;
  }

  return score;
}

function showResults(answers) {
  var scored = universities.map(function (uni) {
    return {
      university: uni,
      score: calculateScore(uni, answers)
    };
  });

  // Sort by score descending, then by minMarks descending
  scored.sort(function (a, b) {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return b.university.minMarks - a.university.minMarks;
  });

  // Take top 5 matches that have at least some score
  var topMatches = scored.filter(function (item) {
    return item.score > 0;
  }).slice(0, 5);

  var list = document.getElementById("recommendations");
  list.innerHTML = "";

  if (topMatches.length === 0) {
    list.innerHTML = "<li>No strong matches found. Try adjusting your answers or browse the full list on <a href='universities.html'>Universities page</a>.</li>";
  } else {
    topMatches.forEach(function (item) {
      var li = document.createElement("li");
      li.innerHTML =
        "<a href='" + item.university.page + "'>" + item.university.name + "</a>" +
        "<div class='match-score'>Match score: " + item.score + " / 9 | Minimum marks: " + item.university.minMarks + "+</div>";
      list.appendChild(li);
    });
  }

  document.getElementById("summary").textContent =
    "Based on your interest in " + answers.field +
    ", region: " + answers.region +
    ", marks: " + answers.marks +
    ", and career: " + answers.career + ".";

  document.getElementById("quiz-card").style.display = "none";
  document.getElementById("result-card").style.display = "block";
}

function resetQuiz() {
  document.getElementById("quiz-card").style.display = "block";
  document.getElementById("result-card").style.display = "none";

  var inputs = document.querySelectorAll("input[type='radio']");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var submitBtn = document.getElementById("submit-quiz");
  var retakeBtn = document.getElementById("retake-btn");
  var homeBtn = document.getElementById("home-btn");
  var backBtn = document.getElementById("back-btn");

  submitBtn.addEventListener("click", function () {
    var answers = {
      field: getSelected("q1"),
      region: getSelected("q2"),
      marks: getSelected("q3"),
      career: getSelected("q4")
    };

    // Validate all answered
    for (var key in answers) {
      if (!answers[key]) {
        alert("Please answer all questions before submitting.");
        return;
      }
    }

    showResults(answers);
  });

  retakeBtn.addEventListener("click", resetQuiz);

  function goHome() {
    window.location.href = HOME_PAGE;
  }

  homeBtn.addEventListener("click", goHome);
  backBtn.addEventListener("click", goHome);
});
