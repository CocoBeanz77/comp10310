//counter for function to identify question and match response
let current = 0;
let score = 0;

//store custom feedback in array
const responses = [
    {
        id: "q1",
        na: "If you're unsure, take a guess!",
        correct: "Nice one!",
        incorrect: "Not quite. Archie would expect his fans to know this!",
        explanation: "Archie is a fluffy ginger and white cat. Did you know, his tail is actually striped but you can only see it under sunlight!",
    },
    {
        id: "q2",
        na: "What do you think it could be?",
        correct: "Yep, that's right!",
        incorrect: "Good attempt, but that's incorrect...",
        explanation: "Archie started out on a farm in Kerry before living his current luxurious life!"
    },
    {
        id: "q3",
        na: "Don't leave me hanging >.<",
        correct: "Exactly.",
        incorrect: "No, but maybe this can be a future hobby?",
        explanation: "Archie lives life as most humans can only dream of. He eats, sleeps (probably dreaming about food), and causes chaos whenever he feels like it."
    },
    {
        id: "q4",
        na: "",
        correct: "",
        incorrect: "",
        explanation: ""
    },
    {
        id: "q5",
        na: "",
        correct: "",
        incorrect: "",
        explanation: ""
    },
];

//SUBMIT FUNCTION
function submit() {
    //define elements in quiz
    const q = responses[current];
    const selected = document.querySelector(`input[name = "${q.id}"]:checked`);
    const feedback = document.getElementById(`feedback${current + 1}`);
    const explanation = document.getElementById(`expl${current + 1}`);
    const next = document.getElementById(`next${current + 1}`);
    const content = document.getElementById(`cont${current + 1}`);

    //no answer selected
    if(!selected) {
        feedback.textContent = q.na;
        return;
    }

    //hide answer options
    if(content) {
        content.style.display = "none";
    }

    //feedback for correct/incorrect answer
    if(selected.value === "1") {
        feedback.textContent = q.correct;
        score++;
    } else {
        feedback.textContent = q.incorrect;
    }

    //explanation/developement of correct answer
    explanation.textContent = q.explanation;

    //make 'next' button visible
    next.style.display = "inline-block";
}

//NEXT QUESTION FUNCTION
function next() {
    //hide finishes question
    document.getElementById(responses[current].id).style.display = "none";

    current++;
    //check if next question exists and display, or display result
    if (current < responses.length) {
        document.getElementById(responses[current].id).style.display = "block";
    } else {
        results();
    }
}

//RESULT FUNCTION
function results() {
    const resultBox = document.getElementById("results");
    const resultNum = document.getElementById("resultNum");

    resultBox.style.display = "Block";
    resultNum.textContent = `You got ${score} out of ${responses.length} correct!`;
}