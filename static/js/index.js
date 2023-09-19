// Función para ocultar/mostrar menú
let menuVisible = false;

function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;

    } else {
        // Hace visible el menú al  vincular nav.responsive (CSS) 
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculta el Menú cuando se selecciona algo
    mostrarOcultarMenu();
}
