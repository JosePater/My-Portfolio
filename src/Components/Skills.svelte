<!-- SECCIÓN SKILL -->
<section id="skills" class="skills">
    <div class="contenido-seccion">
        <h2>Skills</h2>
        <div class="fila">

            <!-- Technical Skill -->
            <div class="col">
                <h3>Technical Skills</h3>

                <div class="skill javascript">
                    <span>JavaScript</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>75%</span>
                        </div>
                    </div>
                </div>
                <div class="skill htmlcss">
                    <span>HTML & CSS</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>80%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Svelte</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>50%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Python</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>55%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Java</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>40%</span>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Professional Skill -->
            <div class="col">
                <h3>Professional Skills</h3>
                <div class="skill">
                    <span>Comunicación</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>80%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Trabajo en Equipo</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>90%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Creatividad</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>98%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Dedicación</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>89%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Compromiso</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>100%</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<style>
    .skills{
        background-color: #252A2E;
        color: #fff;
        padding: 50px 20px;
    }
    .skills .contenido-seccion{
        max-width: 1100px;
        margin: auto;
    }
    .skills h2{
        font-size: 48px;
        font-family: 'Righteous';
        text-align: center;
        padding: 20px 0;
    }
    .skills .fila{
        display: flex;
    }
    .skills .fila .col{
        width: 50%;
        padding: 0 20px;
    }
    .skills .fila .col h3{
        font-size: 28px;
        font-family: 'Righteous';
        margin-bottom: 25px;
    }
    .skills .skill > span{
        font-weight: bold;
        display: block;
        margin-bottom: 10px;
    }
    .skills .skill .barra-skill{
        height: 8px;
        width: 80%;
        background-color: #131517;
        position: relative;
        margin-bottom: 30px;
    }
    .skills .skill .progreso{
        background-color: var(--colorTema);
        position: absolute;
        top: 0;
        left: 0;
        height: 8px;
    }
    .skills .skill .barra-skill span{
        position: absolute;
        height: 40px;
        width: 40px;
        background-color: var(--colorTema);
        border-radius: 50px;
        line-height: 40px;
        text-align: center;
        top: -17px;
        right: -15px;
        font-size: 14px;
    }

    /* Pantalla <=700px se hace una solo columna (display:block;)*/
    @media screen and (max-width:700px){
        .sobremi .fila .col{
            width: fit-content;
        }

        .skills .fila{
            display: block;
        }
        .skills .fila .col{
            width: 100%;
        }
        .skills .fila .col .barra-skill{
            width: 100%;
        }
    }


    .skills .skill .javascript{
        width: 0%;
        animation: 2s javascript forwards;
    }
    @keyframes javascript{
        0%{width: 0%;}
        100%{width: 75%;}
    }

    .skills .skill .htmlcss{
        width: 0%;
        animation: 2s htmlcss forwards;
    }
    @keyframes htmlcss{
        0%{width: 0%;}
        100%{width: 80%;}
    }

    .skills .skill .svelte{
        width: 0%;
        animation: 2s svelte forwards;
    }
    @keyframes svelte{
        0%{width: 0%;}
        100%{width: 50%;}
    }

    .skills .skill .python{
        width: 0%;
        animation: 2s python forwards;
    }
    @keyframes python{
        0%{width: 0%;}
        100%{width: 55%;}
    }

    .skills .skill .java{
        width: 0%;
        animation: 2s java forwards;
    }
    @keyframes java{
        0%{width: 0%;}
        100%{width: 40%;}
    }

    /* Professional Skills */
    .skills .skill .comunicacion{
        width: 0%;
        animation: 2s comunicacion forwards;
    }
    @keyframes comunicacion{
        0%{width: 0%;}
        100%{width: 80%;}
    }

    .skills .skill .trabajo{
        width: 0%;
        animation: 2s trabajo forwards;
    }
    @keyframes trabajo{
        0%{width: 0%;}
        100%{width: 90%;}
    }

    .skills .skill .creatividad{
        width: 0%;
        animation: 2s creatividad forwards;
    }
    @keyframes creatividad{
        0%{width: 0%;}
        100%{width: 98%;}
    }

    .skills .skill .dedicacion{
        width: 0%;
        animation: 2s dedicacion forwards;
    }
    @keyframes dedicacion{
        0%{width: 0%;}
        100%{width: 89%;}
    }

    .skills .skill .compromiso{
        width: 0%;
        animation: 2s compromiso forwards;
    }
    @keyframes compromiso{
        0%{width: 0%;}
        100%{width: 100%;}
    } 

</style>