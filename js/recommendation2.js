/* =========================================================
   UNIPATH MYANMAR
   UNIVERSITY RECOMMENDATION SYSTEM
   ========================================================= */


/* =========================================================
   UNIVERSITY DATABASE
   ========================================================= */

var universities = [

  {
    name: "University of Medicine 1, Yangon",
    page: "../html/UM1.html",
    region: "yangon",
    majors: ["medicine"],
    minMarks: 500
  },

  {
    name: "University of Medicine, Mandalay",
    page: "../html/UMM.html",
    region: "mandalay",
    majors: ["medicine"],
    minMarks: 500
  },

  {
    name: "University of Medicine 2, Yangon",
    page: "../html/UM2.html",
    region: "yangon",
    majors: ["medicine"],
    minMarks: 500
  },

  {
    name: "University of Medicine, Magway",
    page: "../html/UMMG.html",
    region: "magway",
    majors: ["medicine"],
    minMarks: 500
  },

  {
    name: "University of Medicine, Taunggyi",
    page: "../html/UMTG.html",
    region: "taunggyi",
    majors: ["medicine"],
    minMarks: 500
  },

  {
    name: "University of Pharmacy, Yangon",
    page: "../html/UOPY.html",
    region: "yangon",
    majors: ["medicine"],
    minMarks: 450
  },

  {
    name: "University of Pharmacy, Mandalay",
    page: "../html/UOPM.html",
    region: "mandalay",
    majors: ["medicine"],
    minMarks: 450
  },

  {
    name: "University of Dental Medicine, Yangon",
    page: "../html/UDMY.html",
    region: "yangon",
    majors: ["medicine"],
    minMarks: 450
  },

  {
    name: "University of Dental Medicine, Mandalay",
    page: "../html/UDMM.html",
    region: "mandalay",
    majors: ["medicine"],
    minMarks: 450
  },

  {
    name: "Yangon Technological University",
    page: "../html/YTU.html",
    region: "yangon",
    majors: ["science", "it"],
    minMarks: 480
  },

  {
    name: "Mandalay Technological University",
    page: "../html/MTU.html",
    region: "mandalay",
    majors: ["science", "it"],
    minMarks: 470
  },

  {
    name: "University of Information Technology",
    page: "../html/UIT.html",
    region: "yangon",
    majors: ["it"],
    minMarks: 450
  },

  {
    name: "Yangon University",
    page: "../html/yu.html",
    region: "yangon",
    majors: ["arts", "science", "business"],
    minMarks: 350
  },

  {
    name: "Mandalay University",
    page: "../html/mul.html",
    region: "mandalay",
    majors: ["arts", "science", "business"],
    minMarks: 350
  },

  {
    name: "National University of Arts and Culture, Yangon",
    page: "../html/NUAC(YGN).html",
    region: "yangon",
    majors: ["arts"],
    minMarks: 240
  },

  {
    name: "National University of Arts and Culture, Mandalay",
    page: "../html/NUAC(MDY).html",
    region: "mandalay",
    majors: ["arts"],
    minMarks:240
  },

  {
    name: "Yangon University of Economics",
    page: "../html/yue.html",
    region: "yangon",
    majors: ["business"],
    minMarks: 400
  },

  {
    name: "University of Economics, Meiktila",
    page: "../html/MeiktilaUE.html",
    region: "Meiktila",
    majors: ["business"],
    minMarks: 400
  },

  {
    name: "University of Economics, Monywa",
    page: "../html/MonywaUE.html",
    region: "Monywa",
    majors: ["business"],
    minMarks: 400
  },

  {
    name: "University of Computer Studies, Yangon",
    page: "../html/UCSY.html",
    region: "yangon",
    majors: ["it"],
    minMarks: 400
  },

  {
    name: "University of Computer Studies, Mandalay",
    page: "../html/UCSM.html",
    region: "mandalay",
    majors: ["it"],
    minMarks: 400
  },

  {
    name: "University of Computer Studies, Pyay",
    page: "../html/Cupyay.html",
    region: "pyay",
    majors: ["it"],
    minMarks: 340
  }
];


/* =========================================================
   PAGE PATHS
   ========================================================= */

var HOME_PAGE = "../html/index.html";

var QUIZ_PAGE = "../html/Quiz2.html";


/* =========================================================
   REGION LABELS
   ========================================================= */

var REGION_LABELS = {

  yangon: "Yangon",

  mandalay: "Mandalay",

  other: "Other regions",

  any: "No preference"

};


/* =========================================================
   QUIZ FIELD LABELS
   ========================================================= */

var QUIZ_FIELD_LABELS = {

  medicine: "Medicine / Health",

  engineering: "Science / Engineering",

  computer: "IT / Computer Science",

  business: "Business / Economics",

  arts: "Arts / Humanities",

  education: "Education"

};


/* =========================================================
   GET SELECTED MAJORS
   ========================================================= */

function getCheckedMajors() {

  var boxes =
    document.getElementsByName("major");

  var majors = [];

  for (
    var i = 0;
    i < boxes.length;
    i++
  ) {

    if (boxes[i].checked) {

      majors.push(boxes[i].value);

    }

  }

  return majors;
}


/* =========================================================
   CLEAR VALIDATION ERRORS
   ========================================================= */

function clearErrors() {

  var fields =
    document.querySelectorAll(".field");

  for (
    var i = 0;
    i < fields.length;
    i++
  ) {

    fields[i].classList.remove("error");

  }

}


/* =========================================================
   MARK FIELD AS ERROR
   ========================================================= */

function markError(name) {

  var field =
    document.querySelector(
      ".field[data-f='" + name + "']"
    );

  if (field) {

    field.classList.add("error");

  }

  return field;
}


/* =========================================================
   VALIDATE FORM
   ========================================================= */

function validate(
  marks,
  majors,
  region
) {

  clearErrors();

  var firstError = null;


  /* Marks */

  if (
    isNaN(marks) ||
    marks < 240 ||
    marks > 600
  ) {

    firstError =
      markError("marks");

  }


  /* Major */

  if (majors.length === 0) {

    firstError =
      firstError ||
      markError("majors");

  }


  /* Region */

  if (!region) {

    firstError =
      firstError ||
      markError("region");

  }


  if (firstError) {

    firstError.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    return false;

  }


  return true;
}


/* =========================================================
   SHOW UNIVERSITY RESULTS
   ========================================================= */

function showResults(
  marks,
  majors,
  region
) {

  /*
    A university is recommended when:

    1. Student's marks >= minimum marks
    2. Region matches
    3. At least one major matches
  */

  var matched =
    universities.filter(function (uni) {

      var okMarks =
        marks >= uni.minMarks;


      var okRegion =
        region === "any" ||
        uni.region === region;


      var okMajor =
        uni.majors.some(function (major) {

          return majors.indexOf(major) !== -1;

        });


      return (
        okMarks &&
        okRegion &&
        okMajor
      );

    });


  /* Highest requirement first */

  matched.sort(function (a, b) {

    return b.minMarks - a.minMarks;

  });


  /* Get result list */

  var list =
    document.getElementById(
      "recommendations"
    );

  list.innerHTML = "";


  /* No match */

  if (matched.length === 0) {

    list.innerHTML = `

      <li>

        No universities match all your choices.

        <br><br>

        Try different majors or region, or browse
        the full list on the

        <a href="../html/Uni.html">
          Universities page
        </a>.

      </li>

    `;

  }


  /* Matches */

  else {

    matched.forEach(function (uni) {

      var reasons = [];


      reasons.push(
        "your marks (" +
        marks +
        ") meet the " +
        uni.minMarks +
        "+ requirement"
      );


      if (region !== "any") {

        reasons.push(
          "located in " +
          REGION_LABELS[uni.region]
        );

      }


      var li =
        document.createElement("li");


      li.innerHTML =

        "<a href='" +
        uni.page +
        "'>" +

        uni.name +

        "</a>" +

        "<div class='uni-meta'>" +

        "Region: " +
        REGION_LABELS[uni.region] +

        " | Minimum marks: " +
        uni.minMarks +
        "+" +

        "</div>" +

        "<div class='uni-why'>" +

        "Why this match: <b>" +

        reasons.join(", ") +

        "</b>" +

        "</div>";


      list.appendChild(li);

    });

  }


  /* Summary */

  document.getElementById(
    "summary"
  ).textContent =

    "Based on your marks (" +
    marks +
    "), chosen majors (" +
    majors.join(", ") +
    "), and region: " +
    REGION_LABELS[region] +
    ".";


  /* Hide form */

  document.getElementById(
    "form-card"
  ).style.display = "none";


  /* Show result */

  document.getElementById(
    "result-card"
  ).style.display = "block";


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   SHOW FORM
   ========================================================= */

function showForm() {

  document.getElementById(
    "form-card"
  ).style.display = "block";


  document.getElementById(
    "result-card"
  ).style.display = "none";


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   APPLY QUIZ RESULT
   ========================================================= */

function applyQuizResult() {

  var quizField =
    localStorage.getItem(
      "unipathQuizField"
    );


  var quizScore =
    localStorage.getItem(
      "unipathQuizScore"
    );


  if (!quizField) {

    return;

  }


  /*
    Convert quiz field into
    recommendation-page major
  */

  var majorMap = {

    medicine: "medicine",

    engineering: "science",

    computer: "it",

    business: "business",

    arts: "arts",

    education: "education"

  };


  var selectedMajor =
    majorMap[quizField];


  if (!selectedMajor) {

    return;

  }


  /* Select matching checkbox */

  var boxes =
    document.getElementsByName(
      "major"
    );


  for (
    var i = 0;
    i < boxes.length;
    i++
  ) {

    boxes[i].checked =
      boxes[i].value === selectedMajor;

  }


  /* Show quiz information */

  var info =
    document.getElementById(
      "quiz-result-info"
    );


  var text =
    document.getElementById(
      "quiz-field-text"
    );


  if (info && text) {

    text.textContent =
      " " +
      QUIZ_FIELD_LABELS[quizField];


    if (quizScore) {

      text.textContent +=
        " — Skills match: " +
        quizScore +
        "%";

    }


    info.style.display =
      "block";

  }

}


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {


    var recommendBtn =
      document.getElementById(
        "recommend-btn"
      );


    var quizBtn =
      document.getElementById(
        "quiz-btn"
      );


    var editBtn =
      document.getElementById(
        "edit-btn"
      );


    var homeBtn =
      document.getElementById(
        "home-btn"
      );


    var homeBtn2 =
      document.getElementById(
        "home-btn-2"
      );


    var marksInput =
      document.getElementById(
        "marks"
      );


    var regionSelect =
      document.getElementById(
        "region"
      );


    /* Apply quiz result */

    applyQuizResult();


    /* =====================================================
       RECOMMEND BUTTON
       ===================================================== */

    recommendBtn.addEventListener(
      "click",
      function () {

        var marks =
          parseInt(
            marksInput.value,
            10
          );


        var majors =
          getCheckedMajors();


        var region =
          regionSelect.value;


        if (
          !validate(
            marks,
            majors,
            region
          )
        ) {

          return;

        }


        showResults(
          marks,
          majors,
          region
        );

      }
    );


    /* =====================================================
       CLEAR MARK ERROR
       ===================================================== */

    marksInput.addEventListener(
      "input",
      function () {

        var field =
          this.closest(".field");

        if (field) {

          field.classList.remove(
            "error"
          );

        }

      }
    );


    /* =====================================================
       CLEAR REGION ERROR
       ===================================================== */

    regionSelect.addEventListener(
      "change",
      function () {

        var field =
          this.closest(".field");

        if (field) {

          field.classList.remove(
            "error"
          );

        }

      }
    );


    /* =====================================================
       CLEAR MAJOR ERROR
       ===================================================== */

    var boxes =
      document.getElementsByName(
        "major"
      );


    for (
      var i = 0;
      i < boxes.length;
      i++
    ) {

      boxes[i].addEventListener(
        "change",
        function () {

          var field =
            this.closest(".field");

          if (field) {

            field.classList.remove(
              "error"
            );

          }

        }
      );

    }


    /* =====================================================
       QUIZ BUTTON
       ===================================================== */

    quizBtn.addEventListener(
      "click",
      function () {

        window.location.href =
          QUIZ_PAGE;

      }
    );


    /* =====================================================
       EDIT BUTTON
       ===================================================== */

    editBtn.addEventListener(
      "click",
      showForm
    );


    /* =====================================================
       HOME
       ===================================================== */

    function goHome() {

      window.location.href =
        HOME_PAGE;

    }


    homeBtn.addEventListener(
      "click",
      goHome
    );


    homeBtn2.addEventListener(
      "click",
      goHome
    );

  }
);