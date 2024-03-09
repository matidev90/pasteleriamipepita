// Inicializar el carrusel de Bootstrap
document.addEventListener("DOMContentLoaded", function() {
    $('#carouselExampleIndicators').carousel();
});

document.addEventListener('DOMContentLoaded', function() {
    const zoomEffects = document.querySelectorAll('.zoom-effect');
    
    zoomEffects.forEach(function(zoomEffect) {
        let isDragging = false;
        let startX, startY, offsetX, offsetY;

        zoomEffect.addEventListener('mousedown', function(e) {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            offsetX = zoomEffect.scrollLeft;
            offsetY = zoomEffect.scrollTop;
        });

        zoomEffect.addEventListener('mouseup', function() {
            isDragging = false;
        });

        zoomEffect.addEventListener('mouseleave', function() {
            isDragging = false;
        });

        zoomEffect.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            const x = e.clientX - startX;
            const y = e.clientY - startY;
            zoomEffect.scrollLeft = offsetX - x;
            zoomEffect.scrollTop = offsetY - y;
        });
    });
});