<!-- SECCIÓN inicialCard -->
<section id="inicialCard" class="inicialCard">
    <div class="contenido-banner">
        <div class="contenedor-img">
            <img src="img/hero.png" alt="">
        </div>
        <h1>JOSÉ PATERNINA</h1>
        <h2>Ingeniero Electrónico</h2>
        <h2>Tecnólogo en Análisis y Desarrollo de Sistemas de Información</h2>
        <h2>Técnico en Soporte de Aplicaciones Informáticas</h2>
        <div class="redes">
            <a href="/"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="/"><i class="fa-brands fa-twitter"></i></a>
            <a href="/"><i class="fa-brands fa-skype"></i></a>
            <a href="/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="/"><i class="fa-solid fa-rss"></i></a>
        </div>
    </div>
</section>

<style>
    .inicialCard{
        background: linear-gradient(to top, rgba(30,35,38, .8), rgba(30,35,38,1)),
        url(/img/fondo.jpg);
        background-size: cover;
        height: 100vh;
        color: #fff;
        display: flex;
        align-items: center;
    }
    .inicialCard .contenido-banner{
        padding: 20px;
        background-color: #1e2326;
        max-width: 350px;
        margin: auto;
        text-align: center;
        border-radius: 40px;
    }
    .inicialCard .contenido-banner img{
        margin-top: 40px;
        border: 10px solid var(--colorTema);
        display: block;
        width: 80%;
        margin: auto;
        border-radius: 100%;
    }
    .inicialCard .contenido-banner h1{
        margin-top: 40px;
        /* font-size: 42px; */
        font-family: Righteous;
        
    }
    .inicialCard .contenido-banner h2{
        font-size: 15px;
        font-weight: normal;
    }
    .inicialCard .contenido-banner .redes a{
        color: #fff;
        display: inline-block;
        text-decoration: none;
        border: 1px solid #fff;  /* Crea un cuadro en cada ícono de redes */
        border-radius: 100%;  /* Pasar de cuadro a círculo */
        width: 42px;
        height: 42px;
        line-height: 42px;  /* Centra los íconos de redes dentro del círculo */
        margin: 40px 5px;  /* Separa los íconos  */
        font-size: 20px;
        transition: .5s;
    }
    .inicialCard .contenido-banner .redes a:hover{
        color: blue;  /* me */
        transition: .5s;
        background-color: var(--colorTema);
    }
    .inicialCard .contenido-banner h2:hover{
        color: var(--colorTema);
        font-weight: bold;
    }
</style>