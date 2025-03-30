document.addEventListener('DOMContentLoaded', function() {
    const sliderPeople = document.querySelector('.slider-people');
    const prevBtn = document.getElementById('firstBtn');
    const nextBtn = document.getElementById('lastBtn');
    const persons = document.querySelectorAll('.person');
    
    let currentIndexSlider = 0;
    const totalPersons = persons.length;

    function updateSlider(direction) {
        if (direction === 'next') {
            currentIndexSlider = (currentIndexSlider + 1) % totalPersons;
        } else {
            currentIndexSlider = (currentIndexSlider - 1 + totalPersons) % totalPersons;
        }

        const reorderedPersons = Array.from(persons).map((_, index) => {
            const personIndex = (currentIndexSlider + index) % totalPersons;
            return persons[personIndex];
        });

        // sliderPeople.style.transition = 'transform 0.5s ease';


        sliderPeople.innerHTML = '';
        reorderedPersons.forEach(person => {
            sliderPeople.appendChild(person);
        });

        // sliderPeople.style.transform = `translateX(-${currentIndexSlider * 100 / totalPersons}%)`;
    }

    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        updateSlider('next');
    });

    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        updateSlider('prev');
    });
});


  






