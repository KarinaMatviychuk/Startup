document.addEventListener('scroll', function () {
    let servicesSection = document.querySelector('.choose.wrapper');
    let position = servicesSection.getBoundingClientRect();

    if (position.top <= window.innerHeight && position.bottom >= 0) {
        servicesSection.classList.add('active');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const posts = document.querySelectorAll('.posts');

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        posts.forEach(post => {
            const postTop = post.getBoundingClientRect().top;

            if (postTop < triggerBottom) {
                post.classList.add('show-animation');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});


  