document.getElementById("toggleButton").addEventListener("click", function() {
    let button = document.getElementById("toggleButton");

    if (button.textContent === "Hello") {
        button.textContent = "Goodbye";
    } else {
        button.textContent = "Hello";
    }
});
