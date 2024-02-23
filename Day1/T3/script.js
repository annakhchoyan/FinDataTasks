document.getElementById("toggleButton").addEventListener("click", function() {
    let content = document.getElementById("content");
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
});
