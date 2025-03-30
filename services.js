const codeDiv = document.querySelector('.code-solid');
const typographyParagraph = document.querySelector('.typography > p:first-of-type');
const codeParagraph = document.querySelector('.code-solid > p:first-of-type');
const supportParagraph = document.querySelector('.support > p:first-of-type');
let clickCount = 0;

document.addEventListener('DOMContentLoaded', function() {
    codeDiv.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount === 3) {
            typographyParagraph.textContent = "letter A";
            typographyParagraph.style.fontWeight = 'bold';
            typographyParagraph.style.color = 'red';
            
            codeParagraph.textContent = "html";
            codeParagraph.style.fontWeight = 'bold';
            codeParagraph.style.color = 'red';
            
            supportParagraph.textContent = "help";
            supportParagraph.style.fontWeight = 'bold';
            supportParagraph.style.color = 'red';

            clickCount = 0;
        }
    });
});