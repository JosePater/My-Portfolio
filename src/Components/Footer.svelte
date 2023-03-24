<script>
    import { inicialCard } from './InicialCard.svelte'; // importar Objeto
</script>

<!-- SECCIÓN FOOTER -->
<footer>
    <!-- Botón Ir-al-inicio -->
    <a href="#inicialCard" class="arriba">
        <i class="fa-sharp fa-solid fa-angles-up"></i>
    </a>

    <!-- Redes sociales -->
    <div class="redes">
        {#each inicialCard.redes as red}
            <a href="{red.link}"><i class="{red.icon}"></i></a>
        {/each}
    </div>

</footer>

<style>
    footer{
        background-color: #252A2E;
        color: #fff;
        padding: 50px 0 30px 0;
        text-align: center;
        position: relative;
        width: 100%;
    }
    footer .redes{
        margin-bottom: 20px;
    }
    footer .redes a{
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
    footer .arriba{
        display: block;
        width: 50px;
        height: 50px;
        color: #fff;
        background-color: var(--colorTema);
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        top: -25px;
        border-radius: 50%;
        line-height: 50px;  /* centra el ícono dentro del círculo */
        font-size: 20px;
    }
    footer .arriba:hover{
        background-color: yellow;
        color: black;
    }
    footer .redes a:hover{
        transition: .5s;
        background-color: var(--colorTema);
    }
    
</style>

