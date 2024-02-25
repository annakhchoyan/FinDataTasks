const form = document.getElementById("myForm");
const saveMessage = document.getElementById("saveMessage");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");


function throttle(func, delay) {
    let timeout = 0;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, delay);
    };
}

function saveFormData() {
    const formData = {
        name: nameInput.value,
        email: emailInput.value
    };

    if (validateEmail()) {
        localStorage.setItem("formData", JSON.stringify(formData))
        saveMessage.style.display = "block";
    
        setTimeout(() => {
            saveMessage.style.display = "none";
        }, 3000);
    } 
}

function clearForm() {
    nameInput.value = "";
    emailInput.value = "";

    saveMessage.style.display = 'none';
    nameError.textContent = '';
    emailError.textContent = '';
}

function validateEmail() {
    const emailValue = emailInput.value;

    if (emailInput.validity.valid || emailInput.hasFocus || emailValue === "") {
        emailError.textContent = "";
        return true;
    } else {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    }
}

function loadFormData() {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        nameInput.value = parsedData.name;
        emailInput.value = parsedData.email;
    }
}

const autoSave = throttle(saveFormData, 1000);

window.addEventListener("load", loadFormData);

