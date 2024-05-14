document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) { // Tecla de espaço
        jump();
    }
});

function jump() {
    let dino = document.getElementById('dino');
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump');
        setTimeout(function() {
            dino.classList.remove('jump');
        }, 500);
    }
}