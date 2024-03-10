// Inicializar el carrusel de Bootstrap
document.addEventListener("DOMContentLoaded", function() {
    $('#carouselExampleIndicators').carousel();
});

$('#carouselExampleControls').on('slid.bs.carousel', function () {
    if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
        $(this).carousel('pause');
        setTimeout(function () {
            $('#carouselExampleControls').carousel(0);
        }, 1000); // Cambia el valor de este retraso según tus preferencias
    } else if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
        setTimeout(function () {
            $('#carouselExampleControls').carousel('cycle');
        }, 1000); // Cambia el valor de este retraso según tus preferencias
    }
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