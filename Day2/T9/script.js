function validateForm() {
    let email = document.getElementById("email").value;

    if (email.trim() === "") {
        alert("Please enter an Email address");
    } else {
        alert("Form submitted successfully!");
    }
}
