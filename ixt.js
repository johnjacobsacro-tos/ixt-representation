/* ==========================================
   1. SLIDE NAVIGATION
========================================== */

const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const slideCounter = document.getElementById("slideCounter");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });

    currentSlide = index;

    if (slideCounter) {
        slideCounter.textContent =
            `${currentSlide + 1} / ${slides.length}`;
    }

    if (prevBtn) {
        prevBtn.disabled = currentSlide === 0;
    }

    if (nextBtn) {
        nextBtn.disabled = currentSlide === slides.length - 1;
    }
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        if (currentSlide < slides.length - 1) {
            showSlide(currentSlide + 1);
        }
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" &&
        currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }

    if (event.key === "ArrowLeft" &&
        currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
});


/* ==========================================
   2. ENERGIZER: WORD SCRAMBLE
========================================== */

const scrambleAnswers = [
    {
        scrambled: "GTA",
        answer: "TAG"
    },
    {
        scrambled: "MLHT",
        answer: "HTML"
    },
    {
        scrambled: "SCC",
        answer: "CSS"
    },
    {
        scrambled: "VARJSACIPT",
        answer: "JAVASCRIPT"
    },
    {
        scrambled: "WOBRESR",
        answer: "BROWSER"
    },
    {
        scrambled: "TNEMELE",
        answer: "ELEMENT"
    }
];


/* ==========================================
   3. REVIEWER: LOOPS AND ARRAYS
========================================== */

const reviewerTopics = [
    {
        title: "Loops",
        description:
            "Loops repeat a block of code while a condition is true or for a set number of times."
    },
    {
        title: "For Loop",
        description:
            "A for loop repeats code a specific number of times."
    },
    {
        title: "While Loop",
        description:
            "A while loop repeats code as long as its condition is true."
    },
    {
        title: "Arrays",
        description:
            "An array stores multiple values in a single variable."
    },
    {
        title: "Array Index",
        description:
            "An index tells the position of an item in an array. The first index is 0."
    }
];


/* ==========================================
   4. DOM DEMONSTRATION
========================================== */

const changeTextBtn =
    document.getElementById("changeTextBtn");

const demoText =
    document.getElementById("demoText");

if (changeTextBtn && demoText) {
    changeTextBtn.addEventListener("click", () => {
        demoText.textContent =
            "The DOM allows JavaScript to change HTML content!";

        demoText.classList.add("changed");
    });
}


/* ==========================================
   5. ACTIVITY: REVEAL ANSWER
========================================== */

const revealBtn =
    document.getElementById("revealBtn");

const activityAnswer =
    document.getElementById("activityAnswer");

if (revealBtn && activityAnswer) {
    revealBtn.addEventListener("click", () => {
        activityAnswer.classList.toggle("show");

        if (activityAnswer.classList.contains("show")) {
            revealBtn.textContent = "Hide Answer";
        } else {
            revealBtn.textContent = "Reveal Answer";
        }
    });
}


/* ==========================================
   6. QUIZ QUESTIONS
   QUESTIONS 1-4: MULTIPLE CHOICE
   QUESTIONS 5-10: IDENTIFICATION
========================================== */

const questions = [

    // QUESTION 1
    {
        question:
            "What is a property in a JavaScript object?",

        type: "multiple",

        choices: [
            "A. A named value inside an object",
            "B. A type of loop",
            "C. An HTML tag",
            "D. A CSS selector"
        ],

        answer: "A",

        explanation:
            "A property is a named value that describes an object."
    },

    // QUESTION 2
    {
        question:
            "Which is a valid JavaScript object?",

        type: "multiple",

        choices: [
            "A. let student = [name: 'Mia'];",
            "B. let student = {name: 'Mia'};",
            "C. let student = (name: 'Mia');",
            "D. let student = <name: 'Mia'>;"
        ],

        answer: "B",

        explanation:
            "JavaScript objects use curly braces and store properties as key-value pairs."
    },

    // QUESTION 3
    {
        question:
            "What does student.age access?",

        type: "multiple",

        choices: [
            "A. The age property of the student object",
            "B. The student object itself",
            "C. A new array",
            "D. An HTML element"
        ],

        answer: "A",

        explanation:
            "Dot notation accesses a specific property inside an object."
    },

    // QUESTION 4
    {
        question:
            "Given person = {name: 'Mia'}, what is person.name?",

        type: "multiple",

        choices: [
            "A. person",
            "B. name",
            "C. Mia",
            "D. undefined"
        ],

        answer: "C",

        explanation:
            "The value stored in the name property is 'Mia'."
    },

    // QUESTION 5
    {
        question:
            "What notation uses square brackets to access an object's property?",

        type: "identification",

        answer: "Bracket Notation",

        explanation:
            "Bracket notation uses square brackets to access an object's property."
    },

    // QUESTION 6
    {
        question:
            "What does DOM stand for?",

        type: "identification",

        answer: "Document Object Model",

        explanation:
            "DOM stands for Document Object Model."
    },

    // QUESTION 7
    {
        question:
            "What structure does the DOM use to represent an HTML document?",

        type: "identification",

        answer: "Tree Structure",

        explanation:
            "The DOM represents an HTML document as a tree of nodes."
    },

    // QUESTION 8
    {
        question:
            "What type of node represents an HTML element?",

        type: "identification",

        answer: "Element Node",

        explanation:
            "An element node represents HTML elements such as headings and paragraphs."
    },

    // QUESTION 9
    {
        question:
            "What JavaScript method selects an HTML element using its ID?",

        type: "identification",

        answer: "getElementById()",

        explanation:
            "getElementById() selects an HTML element through its unique ID."
    },

    // QUESTION 10
    {
        question:
            "What property gets or changes the text inside an HTML element?",

        type: "identification",

        answer: "textContent",

        explanation:
            "textContent gets or changes the text content of an HTML element."
    }

];


/* ==========================================
   7. DISPLAY QUIZ QUESTIONS
========================================== */

const quizQuestions =
    document.getElementById("quizQuestions");

if (quizQuestions) {

    questions.forEach((item, index) => {

        const questionCard =
            document.createElement("div");

        questionCard.className = "quiz-question";

        const questionTitle =
            document.createElement("h3");

        questionTitle.textContent =
            `${index + 1}. ${item.question}`;

        questionCard.appendChild(questionTitle);

        // IDENTIFICATION QUESTIONS
        if (item.type === "identification") {

            const instruction =
                document.createElement("p");

            instruction.className = "quiz-instruction";

            instruction.textContent =
                "IDENTIFICATION: Write your answer.";

            questionCard.appendChild(instruction);

        }

        // MULTIPLE CHOICE QUESTIONS
        else {

            const choicesContainer =
                document.createElement("div");

            choicesContainer.className = "quiz-choices";

            item.choices.forEach(choice => {

                const choiceText =
                    document.createElement("p");

                choiceText.className = "quiz-choice";

                choiceText.textContent = choice;

                choicesContainer.appendChild(choiceText);

            });

            questionCard.appendChild(choicesContainer);
        }

        quizQuestions.appendChild(questionCard);

    });

}


/* ==========================================
   8. DISPLAY QUIZ ANSWER KEY
========================================== */

const quizAnswers =
    document.getElementById("quizAnswers");

if (quizAnswers) {

    questions.forEach((item, index) => {

        const answerCard =
            document.createElement("div");

        answerCard.className = "answer-card";

        const questionTitle =
            document.createElement("h3");

        questionTitle.textContent =
            `${index + 1}. ${item.question}`;

        const correctAnswer =
            document.createElement("p");

        correctAnswer.className = "correct-answer";

        // IDENTIFICATION ANSWERS
        if (item.type === "identification") {

            correctAnswer.textContent =
                `Answer: ${item.answer}`;

        }

        // MULTIPLE CHOICE ANSWERS
        else {

            const correctChoice =
                item.choices.find(choice =>
                    choice.startsWith(item.answer + ".")
                );

            correctAnswer.textContent =
                `Correct Answer: ${correctChoice || item.answer}`;

        }

        const explanation =
            document.createElement("p");

        explanation.className = "answer-explanation";

        explanation.textContent = item.explanation;

        answerCard.appendChild(questionTitle);
        answerCard.appendChild(correctAnswer);
        answerCard.appendChild(explanation);

        quizAnswers.appendChild(answerCard);

    });

}


/* ==========================================
   9. START PRESENTATION
========================================== */

showSlide(0);