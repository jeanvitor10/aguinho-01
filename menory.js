const cards = ['card1', 'card2', 'card3', 'card4', 'card1', 'card2', 'card3', 'card4'];
let flippedCards = [];

function startGame() {
    const gameBoard = document.getElementById('game-board');
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.card = card;
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    if (flippedCards[0].dataset.card === flippedCards[1].dataset.card) {
        flippedCards.forEach(card => card.classList.add('matched'));
    } else {
        flippedCards.forEach(card => card.classList.remove('flipped'));
    }
    flippedCards = [];
}

function restartGame() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    startGame();
}

document.addEventListener('DOMContentLoaded', startGame);