// main.js
window.addEventListener('DOMContentLoaded', (event) => {
    const character = document.getElementById('character');
    let characterX = 0; // Position horizontale initiale du personnage
    let characterY = 0; // Position verticale initiale du personnage
    const stepSize = 10; // Taille du pas de déplacement
    const gameContainer = document.querySelector('.game-container');
    const containerWidth = gameContainer.offsetWidth;
    const containerHeight = gameContainer.offsetHeight;

    let movingLeft = false;
    let movingRight = false;
    let movingUp = false;
    let movingDown = false;

    // Fonction pour mettre à jour le mouvement du personnage
    function updateMovement() {
        if (movingLeft) {
            characterX -= stepSize;
        }
        if (movingRight) {
            characterX += stepSize;
        }
        if (movingUp) {
            characterY -= stepSize;
        }
        if (movingDown) {
            characterY += stepSize;
        }

        // Vérifier les limites du jeu
        if (characterX < 0) {
            characterX = 0;
        }
        if (characterX > containerWidth - character.offsetWidth) {
            characterX = containerWidth - character.offsetWidth;
        }
        if (characterY < 0) {
            characterY = 0;
        }
        if (characterY > containerHeight - character.offsetHeight) {
            characterY = containerHeight - character.offsetHeight;
        }

        character.style.top = characterY + 'px';
        character.style.left = characterX + 'px';
    }

    // Événements de pression et de relâchement des touches
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                movingUp = true;
                break;
            case 'ArrowDown':
                movingDown = true;
                break;
            case 'ArrowLeft':
                movingLeft = true;
                break;
            case 'ArrowRight':
                movingRight = true;
                break;
        }
    });

    document.addEventListener('keyup', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                movingUp = false;
                break;
            case 'ArrowDown':
                movingDown = false;
                break;
            case 'ArrowLeft':
                movingLeft = false;
                break;
            case 'ArrowRight':
                movingRight = false;
                break;
        }
    });

    // Mettre à jour le mouvement du personnage à intervalles réguliers
    setInterval(updateMovement, 16); // Mettez à jour toutes les 16 millisecondes (environ 60 FPS)
});
