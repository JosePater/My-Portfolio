<script context="module">
    export const inicialCard = { // Objeto para exportar
        name: 'JOSÉ PATERNINA',
        profession: [
            {type: 'Ingeniero Electrónico'},
            {type: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información'},
            {type: 'Técnico en Soporte de Aplicaciones Informáticas'},
        ],
        redes: [
            {icon: 'fa-brands fa-linkedin', link:'https://www.linkedin.com/in/josepaternina/'},
            {icon: 'fa-brands fa-github', link:'https://github.com/JosePater'},
            {icon: 'fa-brands fa-twitter', link:'https://twitter.com/JosePater30'},
            {icon: 'fa-brands fa-skype', link:'https://join.skype.com/invite/tnjJTojEUuxU'},
        ]
    }

</script>

<!-- SECCIÓN inicialCard -->
<section id="inicialCard" class="inicialCard">
    <div class="contenido-banner">
        <div class="contenedor-img">
            <img src="/images/hero.png" alt="">
        </div>
        <h1 class="fa-fade">{inicialCard.name}</h1>

        {#each inicialCard.profession as item}
            <h2>{item.type}</h2>            
        {/each}

        <div class="redes">
            {#each inicialCard.redes as red}
                <!-- svelte-ignore security-anchor-rel-noreferrer -->
                <a href="{red.link}" target="_blank"><i class="{red.icon} fa-beat"></i></a>
            {/each}
        </div>

    </div>
</section>

<style>
    .inicialCard{
        background: linear-gradient(to top, rgba(30,35,38, .8), rgba(30,35,38,1)),
        url(/images/background.jpg);
        background-size: cover;
        height: 125vh;
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