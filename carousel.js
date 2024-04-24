const prevBtn = document.getElementById('prev'); /* Bouton précédent */
const nextBtn = document.getElementById('next'); /* Bouton suivant */
const slides = document.querySelectorAll('.slide'); /* Selection de tous les élements "slide" */
let currentIndex = 0; /* currentidenx avec une variable "let" car elle ne sera pas constante */

/* Fonction qui va afficher l'image qui correpond au currentindex */

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${100 * index}%)`;
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});