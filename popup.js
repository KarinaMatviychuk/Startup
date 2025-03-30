const openPopup = document.getElementById("open-popup");
const closePopup = document.getElementById("close-popup");
const popup = document.getElementById("popup");
const overlay = document.createElement("div"); 

document.addEventListener("DOMContentLoaded", function () {
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    openPopup.addEventListener("click", function (e) {
        e.preventDefault();
        popup.classList.add("show");
        overlay.classList.add("show");
    });

    closePopup.addEventListener("click", function () {
        popup.classList.remove("show");
        overlay.classList.remove("show");
    });

    overlay.addEventListener("click", function () {
        popup.classList.remove("show");
        overlay.classList.remove("show");
    });
});



const confirmCheckbox = document.getElementById('confirm');
const checkContainer = document.getElementById('check-container');
const dragItem = document.getElementById('drag-item');
const dropZone = document.getElementById('drop-zone');
const registerButton = document.getElementById('register-button');
const nameInput = document.getElementById('name');
const welcomeText = document.querySelector('.main-header p:first-child');
const registrationForm = document.querySelector('.form-popup');


document.addEventListener('DOMContentLoaded', function() {
    let isDragging = false;
    let startX, startY;
    let dragItemX = 0, dragItemY = 0;
    
    confirmCheckbox.addEventListener('change', function() {
        if (this.checked) {
            checkContainer.style.display = 'block';
        } else {
            checkContainer.style.display = 'none';
        }
    });
   
    dragItem.addEventListener('mousedown', function(e) {
        isDragging = true;
        
        startX = e.clientX;
        startY = e.clientY;
        
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        
        const newX = dragItemX + dx;
        const newY = dragItemY + dy;
        
        dragItem.style.left = newX + 'px';
        dragItem.style.top = newY + 'px';
    });
    
    document.addEventListener('mouseup', function(e) {
        if (!isDragging) return;
        
        isDragging = false;
        
        const dragRect = dragItem.getBoundingClientRect();
        const dropRect = dropZone.getBoundingClientRect();
        
        const isInDropZone = (
            dragRect.left >= dropRect.left && dragRect.right <= dropRect.right && dragRect.top >= dropRect.top && dragRect.bottom <= dropRect.bottom
        );
       
        if (isInDropZone) {
            checkContainer.style.display = 'none';
            registerButton.disabled = false;
            registerButton.classList.add('active');
        } else {
            dragItem.style.left = '0px';
            dragItem.style.top = '0px';
        }
    });

    dragItem.addEventListener('touchstart', function(e) {
        isDragging = true;
        
        const touch = e.touches[0];
        
        startX = touch.clientX;
        startY = touch.clientY;
        
        dragItemX = parseInt(dragItem.style.left) || 0;
        dragItemY = parseInt(dragItem.style.top) || 0;
        
        e.preventDefault();
    });
    
    document.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        
        const touch = e.touches[0];
        
        const dx = touch.clientX - startX;
        const dy = touch.clientY - startY;
        
        const newX = dragItemX + dx;
        const newY = dragItemY + dy;
        
        dragItem.style.left = newX + 'px';
        dragItem.style.top = newY + 'px';
        
        e.preventDefault();
    });
    
    document.addEventListener('touchend', function(e) {
        if (!isDragging) return;
        
        isDragging = false;
        
        const dragRect = dragItem.getBoundingClientRect();
        const dropRect = dropZone.getBoundingClientRect();
        
        const isInDropZone = (
            dragRect.left >= dropRect.left &&
            dragRect.right <= dropRect.right &&
            dragRect.top >= dropRect.top &&
            dragRect.bottom <= dropRect.bottom
        );
        
        if (isInDropZone) {
            checkContainer.style.display = 'none';
            registerButton.disabled = false;
            registerButton.classList.add('active');
        } else {
            dragItem.style.left = '0px';
            dragItem.style.top = '0px';
        }
    });

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const userName = nameInput.value.trim();
        
        if (userName) {
            welcomeText.textContent = `welcome ${userName}`;
            
            popup.style.display = 'none';
            
            const overlay = document.querySelector('.overlay');
            if (overlay) {
                overlay.style.display = 'none';
                overlay.classList.remove('show');
            }

            if (openPopup) {
                openPopup.style.display = "none";
            }
        }
    });
});


