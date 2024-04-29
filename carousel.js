const prevBtn = document.getElementById('prev'); /* Bouton précédent */
const nextBtn = document.getElementById('next'); /* Bouton suivant */
const slides = document.querySelectorAll('.slide'); /* Selection de tous les élements "slide" */
let currentIndex = 0; /* currentidenx avec une variable "let" car elle ne sera pas constante */

/* Fonction qui va afficher l'image qui correpond au currentindex */
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active'); // Afficher la diapositive actuelle
        } else {
            slide.classList.remove('active'); // Masquer les autres diapositives
        }
    });
}

/* Passe a la précédente slide avec le bouton previous et revient a la precedente si on appuie encore dessus */
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

/* Passe a la prochaine slide avec le bouton suivant et revient a la precedente si on appuie encore dessus */
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

/* Interval entre chaque changement de slide (en millisecondes) */
const interval = 3000; // 3 secondes

/* Fonction pour passer automatiquement au prochain slide */
function autoPlay() {
    currentIndex = (currentIndex + 1) % slides.length; // Passage au prochain slide
    showSlide(currentIndex);
}

/* Démarre le défilement automatique */
const autoPlayInterval = setInterval(autoPlay, interval);