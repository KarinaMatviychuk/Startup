const quotes = document.querySelectorAll('.quote');
const spans = document.querySelectorAll('.flex-span span');
let currentIndex = 0;
let interval;

function showQuote(index) {
    quotes.forEach(quote => quote.classList.remove('active'));
    spans.forEach(span => span.classList.remove('active'));
    
    quotes[index].classList.add('active');
    spans[index].classList.add('active');
    
    currentIndex = index;
}

function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    showQuote(currentIndex);
}

function startInterval() {
    if (interval) clearInterval(interval);
    interval = setInterval(nextQuote, 3000);
}

function stopInterval() {
    clearInterval(interval);
}

spans.forEach((span, index) => {
    span.addEventListener('click', () => {
        showQuote(index);
        startInterval();
    });
});

quotes.forEach(quote => {
    quote.addEventListener('mouseenter', stopInterval);
    quote.addEventListener('mouseleave', startInterval);
});

startInterval();