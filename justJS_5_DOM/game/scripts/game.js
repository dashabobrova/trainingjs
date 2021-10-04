renderer.renderBoard();

window.addEventListener('keydown', function(e){
    mover.makeStep(e);
});