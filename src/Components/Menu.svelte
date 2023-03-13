<!-- MENU ENCABEZADO -->
<div class="contenedor-header">
    <header>
        <div class="logo">
            <a href="/">JosePater</a>
        </div>
        <nav id="nav">
            <ul>
                <li><a href="#inicialCard" onclick="seleccionar()">INICIO</a></li>
                <li><a href="#sobremi" onclick="seleccionar()">SOBRE MI</a></li>
                <li><a href="#skills" onclick="seleccionar()">SKILLS</a></li>
                <li><a href="#curriculum" onclick="seleccionar()">CURRICULUM</a></li>
                <li><a href="#portfolio" onclick="seleccionar()">PORTFOLIO</a></li>
                <li><a href="#contacto" onclick="seleccionar()">CONTACTO</a></li>
            </ul>
        </nav>
        <div class="nav-responsive" onclick="mostrarOcultarMenu()"> <!-- MenuBarrita -->
            <i class="fa-solid fa-bars"></i>
        </div>
    </header>
</div>

<style>
    .contenedor-header{
        background: #1e2326;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 99;
    }
    .contenedor-header header{
        max-width: 1100px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
    }
    .contenedor-header header .logo a{
        font-family: 'Righteous';
        font-size: 36px;
        color: var(--colorTema);
        text-decoration: none;
    }

    .contenedor-header header ul{
        display: flex;
        list-style: none;
    }

    .contenedor-header header nav ul li a{
        text-align: none;
        color: #fff;
        margin: 0 15px;
        padding: 3px;
        transition: .5s;
        text-decoration: none;
    }
    .contenedor-header header nav ul li a:hover{
        color: var(--colorTema);
    }
    .nav-responsive{    /*  MenuBarrita */
        background-color: var(--colorTema);
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        display: none; /* Oculta el MenuBarrita*/
    }
    /* ========== SECCIÓN RESPONSIVE ========== */
    @media screen and (max-width:980px){
        nav{
            /* Cuando la pantalla sea <= 8980px se oculta el menú */
            display: none;
        }
        .nav-responsive{
            /* Aparece el MenuBarrita */
            display: block;
        }
        /* nav.responsive{
            display: block;
            position: absolute;
            right: 0;
            top: 75px;
            background-color:#252A2E;
            width: 180px;
        }
        nav.responsive ul{
            /* Aparece el menú desplegable 
            display: block !important;
        }
        nav.responsive ul li{
            border-bottom: 1px solid #fff;  /* Rallas blancas 
        } */
    }
</style>