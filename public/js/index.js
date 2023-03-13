let menuVisible = false;

// Arreglo de los skills técnicos y profesionales
let techProfeSkills = [
    "javascript",
    "htmlcss",
    "svelte",
    "python",
    "java",
    "comunicacion",
    "trabajo",
    "creatividad",
    "dedicacion",
    "compromiso"
]

// Función para ocultar/mostrar menú
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

// Efecto Skills
function efectoSkills() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");

        // Aplica el efecto en todos los skills
        for (let i = 0; i < techProfeSkills.length; i++) {
            habilidades[i].classList.add(techProfeSkills[i]);
        }
        
    }
}

// Detectar Scroll
window.onscroll = function(){
    efectoSkills();
}
