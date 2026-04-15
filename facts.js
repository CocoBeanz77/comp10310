// NOTES
// ans = selected option
// feedback = comment on correct/incorrect answer
// expl = explanation of correct answer

// QUESTION ONE
function submitq1() {
    const ans = document.querySelector('input[name="q1"]:checked'); //checked=selected
    const feedback = document.getElementById("feedback1");
    const expl = document.getElementById("expl1");
    const next = document.getElementById("next1");

    // no answer selected
    if (!ans) {
        feedback.textContent = "If you're unsure, take a guess!";
        return;
    }

    document.getElementById("cont1").style.display = "none";

    // upon submission
    if (ans.value === "1") {
        feedback.textContent = "Nice one!";
    } else {
        feedback.textContent = "Not quite. Archie would expect his fans to know this!";
    }

    // explanation card
    expl.textContent = "Archie is a fluffy ginger and white cat. Did you know, his tail is actually striped but you can only see it under sunlight!"

    // clear any selections before next question
    document.querySelectorAll('input[name="q1"]').forEach(input => input.disabled = true);

    // make 'next' button available
    next.style.display = "inline-block";
}

// hide question one and display question two
function go2() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "block";
}

// QUESTION TWO
function submitq2() {
    const ans = document.querySelector('input[name="q2"]:checked'); //checked=selected
    const feedback = document.getElementById("feedback2");
    const expl = document.getElementById("expl2");
    const next = document.getElementById("next2");

    // no answer selected
    if (!ans) {
        feedback.textContent = "What do you think it could be?";
        return;
    }

    document.getElementById("cont2").style.display = "none";

    // upon submission
    if (ans.value === "1") {
        feedback.textContent = "Yep, that's right!";
    } else {
        feedback.textContent = "Good attempt, but that's incorrect...";
    }

    // explanation card
    expl.textContent = "Archie started out on a farm in Kerry before living his current luxurious life!"

    // clear any selections before next question
    document.querySelectorAll('input[name="q2"]').forEach(input => input.disabled = true);

    // make 'next' button available
    next.style.display = "inline-block";
}

// hide question one and display question three
function go3() {
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "block";
}

//QUESTION THREE
function submitq3() {
    const ans = document.querySelector('input[name="q3"]:checked'); //checked=selected
    const feedback = document.getElementById("feedback3");
    const expl = document.getElementById("expl3");
    const next = document.getElementById("next3");

    // no answer selected
    if (!ans) {
        feedback.textContent = "Don't leave me hanging >.<";
        return;
    }

    // upon submission
    if (ans.value === "1") {
        feedback.textContent = "Exactly.";
    } else {
        feedback.textContent = "Maybe this can be a future hobby?";
    }

    // explanation card
    expl.textContent = "Archie lives life as most humans can only dream of. He eats, sleeps (probably dreaming of food), and causes chaos whenever he feels like it."

    // clear any selections before next question
    document.querySelectorAll('input[name="q3"]').forEach(input => input.disabled = true);

    // make 'next' button available
    next.style.display = "inline-block";
}

// hide question one and display question two
function go4() {
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "block";
}

//QUESTION FOUR

//QUESTION FIVE