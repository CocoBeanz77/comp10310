// comments section
function addRow() {

    // get user input
    const comment = document.getElementById("form").value;

    // new div
    const div = document.createElement("div");

    // new div class
    div.className = "row";

    // insert input into row div
    div.innerHTML = `<p>${comment}</p>`;

    document.getElementById("comments").appendChild(div);
}