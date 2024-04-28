function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');

    const navbar = document.querySelector('.navbar'); // Sélectionnez la barre de menu
    const menuWidth = navbar.offsetWidth; // Obtenez la largeur de la barre de menu

    const carousel = document.querySelector('.carousel');
    if (menu.classList.contains('active')) {
        // Si le menu est ouvert, ajustez la disposition des éléments du menu et du carousel
        menu.style.flexDirection = 'row';
        carousel.style.marginLeft = `calc(20% + ${menuWidth}px)`; // Déplacer le carousel vers la droite en tenant compte de la largeur du menu
        carousel.style.zIndex = '1';
    } else {
        // Si le menu est fermé, rétablissez la disposition par défaut des éléments du menu et du carousel
        menu.style.flexDirection = 'column';
        carousel.style.marginLeft = '20%'; // Rétablir la marge par défaut
        carousel.style.zIndex = '1';
    }
    
}