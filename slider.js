// const images = document.querySelectorAll('.img-firm img');
// let currentIndexSlider = 0;
// let intervalSlider;

// function showImage(index) {
//     images.forEach((img, i) => {
//         img.classList.toggle('active', i === index);
//     });
// }

// function nextImage() {
//     currentIndexSlider = (currentIndexSlider + 1) % images.length;
//     showImage(currentIndexSlider);
// }

// function startIntervalSlider() {
//     intervalSlider = setInterval(nextImage, 3000);
// }

// function stopIntervalSlider() {
//     clearInterval(intervalSlider);
// }

// showImage(currentIndexSlider);
// startIntervalSlider();

const carousel = document.querySelector('.carousel');
document.addEventListener('DOMContentLoaded', () => {
    const imgFirm = document.querySelector('.img-firm');
    const images = Array.from(imgFirm.children);
    
    images.forEach(img => {
        const clone = img.cloneNode(true);
        imgFirm.appendChild(clone);
    });

    function startCarousel() {
        let currentOffset = 0;
        const step = images[0].offsetWidth + 20;

        function moveCarousel() {
            currentOffset -= step;
            imgFirm.style.transition = 'transform 0.5s linear';
            imgFirm.style.transform = `translateX(${currentOffset}px)`;
        }
        setInterval(moveCarousel, 1000);
    }
    startCarousel();
});