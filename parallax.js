document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.header, .parallax-container');
    
    headers.forEach(header => {
        const parallaxBg = header.querySelector('.header-bg, .touch-bg');
        
        if (!parallaxBg) return;

        header.addEventListener('mousemove', function(e) {
            const rect = header.getBoundingClientRect();
            const mouseX = (e.clientX - rect.left) / header.offsetWidth;
            const mouseY = (e.clientY - rect.top) / header.offsetHeight;
            
            const offsetX = (mouseX - 0.5) * 80;
            const offsetY = (mouseY - 0.5) * 80;

            parallaxBg.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    });
});


