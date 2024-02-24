document.getElementById("myForm").addEventListener("submit", function(event) {
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";

    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Fill in the Name field.";
        event.preventDefault();
    }

    let email = document.getElementById("email").value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Fill in the Email field.";
        event.preventDefault();
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email address!";
        event.preventDefault(); 
    }
});
