function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');

    const navbar = document.querySelector('.navbar'); // Sélectionnez la barre de menu

    if (menu.classList.contains('active')) {
        navbar.style.height = '17%'; // Augmentez la hauteur de la barre de menu à 20%
    } else {
        navbar.style.height = '5%'; // Rétablissez la hauteur de la barre de menu à 5%
    }
}