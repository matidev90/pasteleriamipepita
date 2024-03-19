//Iniciar el sitio desde el header.
window.onload = function() {
    window.scrollTo(0, 0); // Hacer que el navegador se desplace al inicio de la página
};

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


/*wsp icon index*/
document.addEventListener("DOMContentLoaded", function() {
    var whatsappButton = document.getElementById("whatsapp-button");
    whatsappButton.addEventListener("click", function(event) {
      event.preventDefault();
      window.open("https://api.whatsapp.com/send?phone=56999750521&text=%F0%9F%91%8B%20Hola,%20me%20gustaría%20realizar%20un%20pedidos", "_blank");
    });
  });

// JavaScript para abrir y cerrar el modal de fotos

function openModal(imgSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("imgModal");
    modal.style.display = "flex"; // Cambia el display a flex
    modalImg.src = imgSrc;
    modal.scrollTop = 0; // Asegura que el modal esté en la parte superior
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}


