document.getElementById("toggleButton").addEventListener("click", function() {
    let paragraph = document.getElementById("paragraph");
    let button = document.getElementById("toggleButton");

    if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block";
        button.textContent = "Hide";
    } else {
        paragraph.style.display = "none";
        button.textContent = "Show";
    }
});
