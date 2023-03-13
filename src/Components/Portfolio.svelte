<!-- SECCIÓN PORTFOLIO-->
<section id="portfolio" class="portfolio">
    <div class="contenido-seccion">
        <h2>PORTFOLIO</h2>
        <div class="galeria">

            <div class="proyecto">
                <img src="img/p1.png" alt="">
                <div class="overlay">
                    <h3>Página Web</h3>
                    <p>Sitio web English Together</p>
                </div>
            </div>

            <div class="proyecto">
                <img src="img/p2.png" alt="">
                <div class="overlay">
                    <h3>Api Películas</h3>
                    <p>Acceso de info películas mediante API</p>
                </div>
            </div>

            <div class="proyecto">
                <img src="img/p1.png" alt="">
                <div class="overlay">
                    <h3>Página Web</h3>
                    <p>Sitio web English Together</p>
                </div>
            </div>

        </div>
    </div>
</section>

<style>
    .portfolio{
        background-color: #252A2E;
        color: #fff;
        padding: 50px 20px;
    }
    .portfolio .contenido-seccion{
        max-width: 1100px;
        margin: auto;
    }
    .portfolio h2{
        font-size: 48px;
        font-family: 'Righteous';
        text-align: center;
        padding: 20px 0;
    }
    .portfolio .galeria{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .portfolio .galeria .proyecto{
        position: relative;
        max-width: 340px;
        height: fit-content;
        margin: 10px;
        cursor: pointer;
    }
    .portfolio .galeria .proyecto img{
        width: 100%;
        display: block;
    }
    .portfolio .galeria .proyecto .overlay{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        background: linear-gradient(rgba(28,182,152,.8), rgba(28,182,152,.8));
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: 1s;
        font-size: 18px;
        letter-spacing: 3px;
        opacity: 0;
    }
    .portfolio .galeria .proyecto .overlay h3{
        margin-bottom: 20px;
        transition: 1s;
    }
    .portfolio .galeria .proyecto .overlay:hover{
        opacity: 1;
    }
    .portfolio .galeria .proyecto .overlay:hover h3{
        margin-bottom: 0px;
    }

    /* Pantalla <=700px se hace una solo columna (display:block;)*/
    @media screen and (max-width:700px){
        .portfolio .galeria{
            display: block;
            width: 100%;
        }
        .portfolio .galeria .proyecto{
            max-width: 100%;
        }
        .portfolio .galeria .proyecto img{
            width: 100%;
        }
    }
    
</style>
