// Ejemplo de código JavaScript
function cel() {
    alert("Celular: (+52) 559-190-7493");
}

function cambiarColor() {
    document.body.style.backgroundColor = "lightblue";
}

// Obtener todas las pestañas y contenidos
const pestañas = document.querySelectorAll('.pestaña');
const contenidosPestañas = document.querySelectorAll('.contenido-pestaña');

// Agregar un evento de clic a cada pestaña
pestañas.forEach((pestaña, index) => {
    pestaña.addEventListener('click', () => {
        // Ocultar todos los contenidos de pestañas
        contenidosPestañas.forEach((contenido) => {
            contenido.style.display = 'none';
        });

        // Mostrar el contenido de la pestaña correspondiente
        contenidosPestañas[index].style.display = 'block';
    });
});












