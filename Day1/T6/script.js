document.getElementById("displayButton").addEventListener("click", function() {
    let inputContent = document.getElementById("inputField").value;
    document.getElementById("displayParagraph").textContent = "Input Content: " + inputContent;
});