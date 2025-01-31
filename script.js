let score = 0;
const scoreDisplay = document.getElementById('score');
const gameButton = document.getElementById('gameButton');

function moveButton() {
    const randomX = Math.random() * (window.innerWidth - gameButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - gameButton.offsetHeight);
    
    gameButton.style.left = `${randomX}px`;
    gameButton.style.top = `${randomY}px`;
}

gameButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    moveButton();
});

moveButton();
setInterval(moveButton, 1000); // Move the button every 1 second
