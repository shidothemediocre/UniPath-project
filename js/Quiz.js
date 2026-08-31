/* ============================================
   UNIPATH MYANMAR
   FIELD RECOMMENDATION QUIZ
============================================ */


/* ============================================
   FIELD INFORMATION
============================================ */

const fields = {
    medicine: {
        name: "Medicine",
        icon: "🩺",
        reason: "You show strong empathy, responsibility, careful thinking, and an interest in helping people."
    },

    engineering: {
        name: "Engineering",
        icon: "🏗️",
        reason: "You show strong logical thinking, practical problem-solving, analytical ability, and interest in how things work."
    },

    computer: {
        name: "Computer Science",
        icon: "💻",
        reason: "You show strong logical thinking, problem-solving, pattern recognition, and interest in technology."
    },

    business: {
        name: "Business",
        icon: "💼",
        reason: "You show strong communication, organization, decision-making, leadership, and planning skills."
    },

    arts: {
        name: "Arts",
        icon: "🎨",
        reason: "You show strong creativity, imagination, self-expression, and interest in developing original ideas."
    },

    education: {
        name: "Education",
        icon: "📚",
        reason: "You show strong communication, patience, empathy, organization, and interest in helping others learn."
    }
};


/* ============================================
   QUESTIONS

   Each question belongs to one or more fields.

   Score:
   0 = Strongly Disagree
   1 = Disagree
   2 = Neutral
   3 = Agree
   4 = Strongly Agree
============================================ */

const questions = [

    {
        text: "I enjoy solving difficult problems step by step.",
        fields: ["engineering", "computer"]
    },

    {
        text: "I enjoy helping people when they are having difficulties.",
        fields: ["medicine", "education"]
    },

    {
        text: "I like creating original ideas and expressing myself creatively.",
        fields: ["arts"]
    },

    {
        text: "I enjoy organizing activities and making plans.",
        fields: ["business", "education"]
    },

    {
        text: "I am interested in understanding how technology and computer systems work.",
        fields: ["computer"]
    },

    {
        text: "I enjoy understanding how machines, structures, or physical systems work.",
        fields: ["engineering"]
    },

    {
        text: "I can remain patient when explaining something to another person.",
        fields: ["education"]
    },

    {
        text: "I am comfortable making decisions when several choices are available.",
        fields: ["business", "medicine"]
    },

    {
        text: "I enjoy thinking about different ways to solve the same problem.",
        fields: ["computer", "engineering", "arts"]
    },

    {
        text: "I am interested in science and how the human body works.",
        fields: ["medicine"]
    },

    {
        text: "I enjoy working with numbers, data, or logical information.",
        fields: ["computer", "engineering", "business"]
    },

    {
        text: "I enjoy drawing, designing, writing, music, or other creative activities.",
        fields: ["arts"]
    },

    {
        text: "I communicate my ideas clearly to other people.",
        fields: ["business", "education"]
    },

    {
        text: "I like finding mistakes and figuring out how to correct them.",
        fields: ["computer", "engineering", "medicine"]
    },

    {
        text: "I enjoy working with other people toward a common goal.",
        fields: ["business", "education", "medicine"]
    },

    {
        text: "I am curious about why people think, feel, and behave differently.",
        fields: ["medicine", "education", "arts"]
    },

    {
        text: "I prefer practical tasks where I can design, build, or improve something.",
        fields: ["engineering"]
    },

    {
        text: "I enjoy learning new software, programming concepts, or digital tools.",
        fields: ["computer"]
    },

    {
        text: "I enjoy persuading people and presenting ideas.",
        fields: ["business"]
    },

    {
        text: "I like imagining possibilities that do not have one fixed answer.",
        fields: ["arts"]
    },

    {
        text: "I feel satisfied when someone understands something because I explained it clearly.",
        fields: ["education"]
    },

    {
        text: "I can stay focused and careful when a task requires accuracy.",
        fields: ["medicine", "engineering", "computer"]
    },

    {
        text: "I enjoy taking responsibility for completing an important task.",
        fields: ["medicine", "business", "education"]
    },

    {
        text: "I like analyzing situations before deciding what to do.",
        fields: ["medicine", "computer", "business", "engineering"]
    }

];


/* ============================================
   ANSWER OPTIONS
============================================ */

const answers = [
    {
        text: "Strongly Disagree",
        score: 0
    },
    {
        text: "Disagree",
        score: 1
    },
    {
        text: "Neutral",
        score: 2
    },
    {
        text: "Agree",
        score: 3
    },
    {
        text: "Strongly Agree",
        score: 4
    }
];


/* ============================================
   VARIABLES
============================================ */

let currentQuestion = 0;

let userAnswers = [];


/* ============================================
   INITIALIZE ANSWERS
============================================ */

function resetAnswers() {

    userAnswers = [];

    for (let i = 0; i < questions.length; i++) {
        userAnswers.push(null);
    }
}


/* ============================================
   GET HTML ELEMENTS
============================================ */

const introSection = document.getElementById("intro-section");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");

const startBtn = document.getElementById("start-btn");

const nextBtn = document.getElementById("next-btn");
const previousBtn = document.getElementById("previous-btn");

const retakeBtn = document.getElementById("retake-btn");

const recommendationBtn =
    document.getElementById("recommendation-btn");

const questionText =
    document.getElementById("question-text");

const optionsContainer =
    document.getElementById("options-container");

const questionNumber =
    document.getElementById("question-number");

const progressPercent =
    document.getElementById("progress-percent");

const progressFill =
    document.getElementById("progress-fill");

const recommendedField =
    document.getElementById("recommended-field");

const recommendedReason =
    document.getElementById("recommended-reason");

const recommendedIcon =
    document.getElementById("recommended-icon");

const scoresContainer =
    document.getElementById("scores-container");

const warningMessage =
    document.getElementById("warning-message");


/* ============================================
   CHECK ELEMENTS
   Helps detect HTML/JS mismatch
============================================ */

if (!introSection ||
    !quizSection ||
    !resultSection ||
    !startBtn ||
    !nextBtn ||
    !previousBtn ||
    !retakeBtn ||
    !recommendationBtn ||
    !questionText ||
    !optionsContainer ||
    !questionNumber ||
    !progressPercent ||
    !progressFill ||
    !recommendedField ||
    !recommendedReason ||
    !recommendedIcon ||
    !scoresContainer ||
    !warningMessage) {

    console.error(
        "Quiz Error: Some HTML elements are missing. " +
        "Make sure quiz.html uses the correct IDs."
    );
}


/* ============================================
   START QUIZ
============================================ */

startBtn.addEventListener("click", function () {

    currentQuestion = 0;

    resetAnswers();

    introSection.classList.add("hidden");

    resultSection.classList.add("hidden");

    quizSection.classList.remove("hidden");

    showQuestion();

});


/* ============================================
   SHOW QUESTION
============================================ */

function showQuestion() {

    const question =
        questions[currentQuestion];


    /* Question text */

    questionText.textContent =
        question.text;


    /* Question number */

    questionNumber.textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;


    /* Progress */

    const progress =
        Math.round(
            ((currentQuestion + 1) /
            questions.length) * 100
        );


    progressPercent.textContent =
        progress + "%";


    progressFill.style.width =
        progress + "%";


    /* Clear previous options */

    optionsContainer.innerHTML = "";


    /* Create answer buttons */

    for (let i = 0; i < answers.length; i++) {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className = "option";


        /* Answer letter */

        const letter =
            String.fromCharCode(65 + i);


        button.innerHTML = `
            <span class="option-letter">
                ${letter}
            </span>

            <span>
                ${answers[i].text}
            </span>
        `;


        /* Restore selected answer */

        if (userAnswers[currentQuestion] === i) {

            button.classList.add("selected");

        }


        /* Answer click */

        button.addEventListener("click", function () {

            selectAnswer(i);

        });


        optionsContainer.appendChild(button);
    }


    /* Previous button */

    if (currentQuestion === 0) {

        previousBtn.style.visibility = "hidden";

    } else {

        previousBtn.style.visibility = "visible";

    }


    /* Next button */

    if (currentQuestion === questions.length - 1) {

        nextBtn.textContent =
            "Finish Quiz ✓";

    } else {

        nextBtn.textContent =
            "Next →";

    }

}


/* ============================================
   SELECT ANSWER
============================================ */

function selectAnswer(answerIndex) {

    userAnswers[currentQuestion] =
        answerIndex;


    const optionButtons =
        optionsContainer.querySelectorAll(".option");


    optionButtons.forEach(function (button, index) {

        if (index === answerIndex) {

            button.classList.add("selected");

        } else {

            button.classList.remove("selected");

        }

    });

}


/* ============================================
   NEXT BUTTON
============================================ */

nextBtn.addEventListener("click", function () {

    /* Check if user answered */

    if (userAnswers[currentQuestion] === null) {

        alert(
            "Please select an answer before continuing."
        );

        return;
    }


    /* Last question */

    if (currentQuestion === questions.length - 1) {

        calculateResults();

        return;
    }


    currentQuestion++;

    showQuestion();

});


/* ============================================
   PREVIOUS BUTTON
============================================ */

previousBtn.addEventListener("click", function () {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

});


/* ============================================
   CALCULATE FIELD SCORES
============================================ */

function calculateResults() {

    /* Create score object */

    const scores = {};


    Object.keys(fields).forEach(function (field) {

        scores[field] = 0;

    });


    /* Add points */

    questions.forEach(function (question, index) {

        const selectedAnswer =
            userAnswers[index];


        if (selectedAnswer === null) {
            return;
        }


        const points =
            answers[selectedAnswer].score;


        question.fields.forEach(function (field) {

            scores[field] += points;

        });

    });


    /* Find maximum possible score for
       each individual field */

    const maxScores = {};


    Object.keys(fields).forEach(function (field) {

        maxScores[field] = 0;


        questions.forEach(function (question) {

            if (question.fields.includes(field)) {

                maxScores[field] += 4;

            }

        });

    });


    /* Convert scores to percentages */

    const percentages = {};


    Object.keys(fields).forEach(function (field) {

        if (maxScores[field] === 0) {

            percentages[field] = 0;

        } else {

            percentages[field] =
                Math.round(
                    (scores[field] /
                    maxScores[field]) * 100
                );

        }

    });


    /* Find best field */

    let bestField = null;

    let highestPercentage = -1;


    Object.keys(fields).forEach(function (field) {

        if (
            percentages[field] >
            highestPercentage
        ) {

            highestPercentage =
                percentages[field];

            bestField =
                field;

        }

    });


    /* Display results */

    showResults(
        percentages,
        bestField
    );

}


/* ============================================
   SHOW RESULTS
============================================ */

function showResults(percentages, bestField) {

    quizSection.classList.add("hidden");

    resultSection.classList.remove("hidden");


    const field =
        fields[bestField];


    /* Main recommendation */

    recommendedIcon.textContent =
        field.icon;


    recommendedField.textContent =
        field.name;


    recommendedReason.textContent =
        field.reason;


    /* Clear old scores */

    scoresContainer.innerHTML = "";


    /* Sort fields from highest to lowest */

    const sortedFields =
        Object.keys(fields).sort(function (a, b) {

            return percentages[b] -
                   percentages[a];

        });


    /* Create score cards */

    sortedFields.forEach(function (fieldKey) {

        const fieldData =
            fields[fieldKey];


        const percentage =
            percentages[fieldKey];


        const card =
            document.createElement("div");

        card.className =
            "score-card";


        card.innerHTML = `

            <div class="score-top">

                <div class="score-name">

                    <span>
                        ${fieldData.icon}
                    </span>

                    <span>
                        ${fieldData.name}
                    </span>

                </div>

                <span class="score-number">
                    ${percentage}%
                </span>

            </div>

            <div class="score-bar">

                <div
                    class="score-fill"
                    style="width: ${percentage}%">
                </div>

            </div>
        `;


        scoresContainer.appendChild(card);

    });


    /* ========================================
       LOW SCORE MESSAGE
    ======================================== */

    if (percentages[bestField] < 50) {

        warningMessage.classList.remove("hidden");

    } else {

        warningMessage.classList.add("hidden");

    }


    /* ========================================
       SAVE RESULT
    ======================================== */

    localStorage.setItem(
        "quizRecommendedField",
        bestField
    );


    localStorage.setItem(
        "quizRecommendedFieldName",
        field.name
    );


    localStorage.setItem(
        "quizScores",
        JSON.stringify(percentages)
    );


    /* Save complete result */

    const result = {

        field: bestField,

        fieldName: field.name,

        percentages: percentages

    };


    localStorage.setItem(
        "quizResult",
        JSON.stringify(result)
    );

}


/* ============================================
   RETAKE QUIZ
============================================ */

retakeBtn.addEventListener("click", function () {

    currentQuestion = 0;

    resetAnswers();


    resultSection.classList.add("hidden");

    introSection.classList.remove("hidden");

});


/* ============================================
   GO TO RECOMMENDATION PAGE
============================================ */

recommendationBtn.addEventListener(
    "click",
    function () {

        window.location.href =
            "recommendation.html";

    }
);


/* ============================================
   INITIALIZE
============================================ */

resetAnswers();