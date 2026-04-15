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
        na: "What would you eat if you were Archie?",
        correct: "Yum yum!",
        incorrect: "Meow. Archie doesn't eat that.",
        explanation: "Archie loves prawns and will wait in front of the freezer until someone boils some for him!"
    },
    {
        id: "q5",
        na: "Psst. There are hints in the answers.",
        correct: "You must be really smart!",
        incorrect: "It will be assumed the only reason you selected that is because you have a cat whom you love just as much as Archie's owners love him, every cat deserves all the love!",
        explanation: "Archie believes that he is the best in the world in every aspect imaginable!"
    },
];

//SUBMIT FUNCTION
function submit() {
    //define elements in quiz
    const q = responses[current];
    const question = document.getElementById(q.id);

    //selected = question class with input
    const selected = question.querySelector(`input[type="radio"]:checked`);
    const feedback = question.querySelector(".feedback");
    const explanation = question.querySelector(".explanation");
    const next = question.querySelector(".next");
    const content = question.querySelector(".content");

    //no answer selected
    if(!selected) {
        feedback.textContent = q.na;
        return;
    }

    //hide answer options
    content.style.display = "none";

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