const popupMore = document.getElementById("popup-more");
const closeBtn = document.querySelector(".popup-more .close");
const readMoreBtns = document.querySelectorAll(".read-more");

document.addEventListener("DOMContentLoaded", function () {
    readMoreBtns.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            popupMore.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        popupMore.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === popupMore) {
            popupMore.style.display = "none";
        }
    });
});

