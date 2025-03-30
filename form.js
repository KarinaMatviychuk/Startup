// const formInputs = {
//     name: document.getElementById("name-form"),
//     email: document.getElementById("email"),
//     subject: document.getElementById("subject"),
//     company: document.getElementById("company"),
//     message: document.getElementById("message")
// }


// function saveData() {
//     const formData = formInputs.value;

//     localStorage.setItem("formData", JSON.stringify(formData));
// }

// function loadData() {
//     const savedData = localStorage.getItem("formData");
//     if (savedData) {
//         const formData = JSON.parse(savedData);
//         formInputs.name.value = formData.name;
//         formInputs.email.value = formData.email;
//         formInputs.subject.value = formData.subject;
//         formInputs.company.value = formData.company;
//         formInputs.message.value = formData.message;
//     }
// }

// document.addEventListener("DOMContentLoaded", loadData);

// const closePopupForm = document.getElementById("close-popup-form");
// const popupForm = document.getElementById("popup-form");
// const popupOverlay = document.getElementById("popupOverlay");

// closePopupForm.addEventListener("click", function () {
//     popupForm.style.display = "none";
//     popupOverlay.style.display = "none";
// });

// popupOverlay.addEventListener("click", function () {
//     popupForm.style.display = "none";
//     popupOverlay.style.display = "none";
// });

// document.getElementById("sendMessage").addEventListener("click", function () {
//     const name = document.getElementById("name-form").value;
//     const email = document.getElementById("email").value;
//     const subject = document.getElementById("subject").value;
//     const company = document.getElementById("company").value;
//     const message = document.getElementById("message").value;
//     // const getInputs = formInputs.value;

//     document.getElementById("confirmName").textContent = name;
//     document.getElementById("confirmEmail").textContent = email;
//     document.getElementById("confirmSubject").textContent = subject;
//     document.getElementById("confirmCompany").textContent = company;
//     document.getElementById("confirmMessage").textContent = message;

//     document.getElementById("popup-form").style.display = "block";
//     document.getElementById("popupOverlay").style.display = "block";
// });

// document.getElementById("editButton").addEventListener("click", function () {
//     document.getElementById("popup-form").style.display = "none";
//     document.getElementById("popupOverlay").style.display = "none";
// });

// document.getElementById("confirmButton").addEventListener("click", function () {
//     saveData();

//     document.getElementById("popup-form").style.display = "none";
//     document.getElementById("popupOverlay").style.display = "none";

//     setTimeout(function () {
//         alert("Form send!");
//         document.getElementById("contactForm").submit();
//     }, 100);
// });




const formInputs = {
    name: document.getElementById("name-form"),
    email: document.getElementById("email"),
    subject: document.getElementById("subject"),
    company: document.getElementById("company"),
    message: document.getElementById("message")
};

function saveData() {
    const formData = formInputs.value;

    localStorage.setItem("formData", JSON.stringify(formData));
}

function loadData() {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
        const formData = JSON.parse(savedData);
        formInputs.name.value = formData.name;
        formInputs.email.value = formData.email;
        formInputs.subject.value = formData.subject;
        formInputs.company.value = formData.company;
        formInputs.message.value = formData.message;
    }
}

document.addEventListener("DOMContentLoaded", loadData);

const closePopupForm = document.getElementById("close-popup-form");
const popupForm = document.getElementById("popup-form");
const popupOverlay = document.getElementById("popupOverlay");

closePopupForm.addEventListener("click", function () {
    popupForm.style.display = "none";
    popupOverlay.style.display = "none";
});

popupOverlay.addEventListener("click", function () {
    popupForm.style.display = "none";
    popupOverlay.style.display = "none";
});

document.getElementById("sendMessage").addEventListener("click", function () {
    const name = document.getElementById("name-form").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const company = document.getElementById("company").value;
    const message = document.getElementById("message").value;

    document.getElementById("confirmName").textContent = name;
    document.getElementById("confirmEmail").textContent = email;
    document.getElementById("confirmSubject").textContent = subject;
    document.getElementById("confirmCompany").textContent = company;
    document.getElementById("confirmMessage").textContent = message;

    document.getElementById("popup-form").style.display = "block";
    document.getElementById("popupOverlay").style.display = "block";
});

document.getElementById("editButton").addEventListener("click", function () {
    document.getElementById("popup-form").style.display = "none";
    document.getElementById("popupOverlay").style.display = "none";
});

document.getElementById("confirmButton").addEventListener("click", function () {
    saveData();

    document.getElementById("popup-form").style.display = "none";
    document.getElementById("popupOverlay").style.display = "none";

    setTimeout(function () {
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.textContent = "Form sent successfully!";

        document.body.appendChild(toast);

        setTimeout(function () {
            toast.classList.add("show-toast");
        }, 100);

        setTimeout(function () {
            toast.remove();
        }, 3000);

        document.getElementById("contactForm").submit();
    }, 100);
});