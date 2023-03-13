<!-- SECCIÓN CURRICULUM -->
<section id="curriculum" class="curriculum">
    <div class="contenido-seccion">
        <h2>Curriculum</h2>
        <div class="fila">

            <div class="col izquierda">
                <h3>Educación</h3>
                <div class="item izq">
                    <h4>Ingeniería Electrónica</h4>
                    <span class="casa">Universidad Nacional Abierta y a Distancia - UNAD</span>
                    <span class="fecha">2018 - 2023</span>
                    <p>Robótica, Telemetría, Telecontrol, IoT</p>
                    <div class="conectori">
                        <div class="circuloi"></div>
                    </div>
                </div>

                <div class="item izq">
                    <h4>Tecnología en Análisis y Desarrollo de Sistemas de Información</h4>
                    <span class="casa">Servicio Nacional de Aprendizaje - SENA</span>
                    <span class="fecha">2021 - 2023</span>
                    <p>Tecnologías de la información</p>
                    <div class="conectori">
                        <div class="circuloi"></div>
                    </div>
                </div>

                <div class="item izq">
                    <h4>Técnico en Soporte de Aplicaciones Informática</h4>
                    <span class="casa">Instituto Centro de Sistemas - System Center</span>
                    <span class="fecha">2021 - 2023</span>
                    <p>Soporte técnico</p>
                    <div class="conectori">
                        <div class="circuloi"></div>
                    </div>
                </div>
            </div>

            <div class="col derecha">
                <h3>Experiencia de trabajo</h3>
                <div class="item der">
                    <h4>Front-end Developer</h4>
                    <span class="casa">Fundación Fundasoft - Argentina</span>
                    <span class="fecha">Octubre 2022 - 2023</span>
                    <p>Pasante en el desarrollo front-end, donde se contruyen
                        páginas usando el framework Svelte
                    </p>
                    <div class="conectord">
                        <div class="circulod"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<style>
    .curriculum{
        background-color: #1e2326;
        color: #fff;
        padding: 50px 20px;
    }
    .curriculum .contenido-seccion{
        max-width: 1100px;
        margin: auto;
    }
    .curriculum h2{
        font-size: 48px;
        font-family: 'Righteous';
        text-align: center;
        padding: 20px 0;
    }
    .curriculum .fila{
        display: flex;
        justify-content: space-between;  /* Espacios entre las columas */
    }
    .curriculum .fila .col{
        width: 49%;
        padding: 0 20px;

    }
    .curriculum .fila .col h3{
        font-size: 28px;
        font-family: 'Righteous';
        margin-bottom: 25px;
    }
    .curriculum .fila .izquierda{
        border-right: 2px solid #252A2E;
    }
    .curriculum .fila .derecha{
        border-left: 2px solid #252A2E;
    }
    .curriculum .fila .item{
        padding: 25px;
        margin-bottom: 30px;
        background-color: #252A2E;
        position: relative;
    }
    .curriculum .fila .item h4{
        font-size: 20px;
        margin-bottom: 10px;
    }
    .curriculum .fila .item .casa{
        color: var(--colorTema);
        font-size: 22px;
        font-weight: bold;
        display: block;
    }
    .curriculum .fila .item .fecha{
        display: block;
        color: var(--colorTema);
        margin-bottom: 10px;
    }
    .curriculum .fila .item p{
        line-height: 24px;
    }
    .curriculum .fila .izq{
        border-right: 2px solid var(--colorTema);
        margin-right: 20px;
    }
    .curriculum .fila .der{
        border-left: 2px solid var(--colorTema);
        margin-left: 20px;
    }

    /* Conectores izquierdos */
    .curriculum .fila .item .conectori{
        height: 2px;
        background-color: var(--colorTema);
        width: 47px;
        position: absolute;
        top: 50%;
        right: -47px;
        z-index: 5;
    }
    .curriculum .fila .item .conectori .circuloi{
        display: block;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: var(--colorTema);
        float: right;
        position: relative;
        bottom: 4px;
    }
    /* Conectores derechos */
    .curriculum .fila .item .conectord{
        height: 2px;
        background-color: var(--colorTema);
        width: 47px;
        position: absolute;
        top: 50%;
        left: -47px;
        z-index: 5;
    }
    .curriculum .fila .item .conectord .circulod{
        display: block;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: var(--colorTema);
        float: left;
        position: relative;
        bottom: 4px;
    }

    /* Pantalla <=700px se hace una solo columna (display:block;)*/
    @media screen and (max-width:700px){
        .curriculum .fila{
            display: block;
        }
        .curriculum .fila .col{
            width: 90%;
        }
        .curriculum .fila .derecha{
            margin-left: 20px;
        }
    }
    
</style>
