function checkUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Archie" && password === "cuti3") {
        window.location.href = "index.html";
        return false;
    } else {
        alert("Uh oh...something has gone CATawampus! Try again!");
        return false;
    }
}