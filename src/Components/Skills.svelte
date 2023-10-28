<script>
  import { onMount } from 'svelte';
  // My Skills
  const skills = {
    techical: [
      {
        nombre: 'JavaScript',
        class: 'javascript',
        porcentaje: '75',
      },
      {
        nombre: 'HTML & CSS',
        class: 'htmlcss',
        porcentaje: '80',
      },
      {
        nombre: 'React',
        class: 'react',
        porcentaje: '70',
      },
      {
        nombre: 'Svelte',
        class: 'velte',
        porcentaje: '80',
      },
      {
        nombre: 'Python',
        class: 'python',
        porcentaje: '50',
      },
      {
        nombre: 'Java',
        class: 'java',
        porcentaje: '40',
      },
    ],

    professional: [
      {
        nombre: 'Comunicación',
        class: 'Comunicacion',
        porcentaje: '80',
      },
      {
        nombre: 'Trabajo en Equipo',
        class: 'trabajo',
        porcentaje: '90',
      },
      {
        nombre: 'Creatividad',
        class: 'creatividad',
        porcentaje: '95',
      },
      {
        nombre: 'Dedicación',
        class: 'dedicacion',
        porcentaje: '90',
      },
      {
        nombre: 'Compromiso',
        class: 'compromiso',
        porcentaje: '100',
      },
    ],
  };

  let techProfeSkills = [
    'javascript',
    'htmlcss',
    'react',
    'svelte',
    'python',
    'java',
    'comunicacion',
    'trabajo',
    'creatividad',
    'dedicacion',
    'compromiso',
  ];

  // Efecto Skills
  function efectoSkills() {
    var skills = document.getElementById('skills');
    var distancia_skills =
      window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
      let habilidades = document.getElementsByClassName('progreso');

      // Aplica el efecto en todos los skills
      for (let i = 0; i < techProfeSkills.length; i++) {
        habilidades[i].classList.add(techProfeSkills[i]);
      }
    }
  }

  onMount(() => {
    window.addEventListener('scroll', efectoSkills);

    // Quitar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', efectoSkills);
    };
  });
</script>

<!-- SECCIÓN SKILL -->
<section id="skills" class="skills">
  <div class="contenido-seccion">
    <h2>Skills</h2>
    <div class="fila">
      <!-- Technical Skill -->
      <div class="col">
        <h3>Technical Skills</h3>
        {#each skills.techical as item}
          <div class="skill {item.class}">
            <span>{item.nombre}</span>
            <div class="barra-skill">
              <div class="progreso">
                <span>{item.porcentaje}%</span>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <!-- Professional Skill -->
      <div class="col">
        <h3>Professional Skills</h3>
        {#each skills.professional as item}
          <div class="skill {item.class}">
            <span>{item.nombre}</span>
            <div class="barra-skill">
              <div class="progreso">
                <span>{item.porcentaje}%</span>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .skills {
    background-color: #252a2e;
    color: #fff;
    padding: 50px 20px;
  }
  .skills .contenido-seccion {
    max-width: 1100px;
    margin: auto;
  }
  .skills h2 {
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;
  }
  .skills .fila {
    display: flex;
  }
  .skills .fila .col {
    width: 50%;
    padding: 0 20px;
  }
  .skills .fila .col h3 {
    font-size: 28px;
    font-family: 'Righteous';
    margin-bottom: 25px;
  }
  .skills .skill > span {
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
  }
  .skills .skill .barra-skill {
    height: 8px;
    width: 80%;
    background-color: #131517;
    position: relative;
    margin-bottom: 30px;
  }
  .skills .skill .progreso {
    background-color: var(--colorTema);
    position: absolute;
    top: 0;
    left: 0;
    height: 8px;
  }
  .skills .skill .barra-skill span {
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
  @media screen and (max-width: 700px) {
    .sobremi .fila .col {
      width: fit-content;
    }

    .skills .fila {
      display: block;
    }
    .skills .fila .col {
      width: 100%;
    }
    .skills .fila .col .barra-skill {
      width: 100%;
    }
  }

  .skills .skill .javascript {
    width: 0%;
    animation: 2s javascript forwards;
  }
  @keyframes javascript {
    0% {
      width: 0%;
    }
    100% {
      width: 75%;
    }
  }

  .skills .skill .htmlcss {
    width: 0%;
    animation: 2s htmlcss forwards;
  }
  @keyframes htmlcss {
    0% {
      width: 0%;
    }
    100% {
      width: 80%;
    }
  }

  .skills .skill .react {
    width: 0%;
    animation: 2s react forwards;
  }
  @keyframes react {
    0% {
      width: 0%;
    }
    100% {
      width: 70%;
    }
  }

  .skills .skill .svelte {
    width: 0%;
    animation: 2s svelte forwards;
  }
  @keyframes svelte {
    0% {
      width: 0%;
    }
    100% {
      width: 80%;
    }
  }

  .skills .skill .python {
    width: 0%;
    animation: 2s python forwards;
  }
  @keyframes python {
    0% {
      width: 0%;
    }
    100% {
      width: 55%;
    }
  }

  .skills .skill .java {
    width: 0%;
    animation: 2s java forwards;
  }
  @keyframes java {
    0% {
      width: 0%;
    }
    100% {
      width: 40%;
    }
  }

  /* Professional Skills */
  .skills .skill .comunicacion {
    width: 0%;
    animation: 2s comunicacion forwards;
  }
  @keyframes comunicacion {
    0% {
      width: 0%;
    }
    100% {
      width: 80%;
    }
  }

  .skills .skill .trabajo {
    width: 0%;
    animation: 2s trabajo forwards;
  }
  @keyframes trabajo {
    0% {
      width: 0%;
    }
    100% {
      width: 90%;
    }
  }

  .skills .skill .creatividad {
    width: 0%;
    animation: 2s creatividad forwards;
  }
  @keyframes creatividad {
    0% {
      width: 0%;
    }
    100% {
      width: 98%;
    }
  }

  .skills .skill .dedicacion {
    width: 0%;
    animation: 2s dedicacion forwards;
  }
  @keyframes dedicacion {
    0% {
      width: 0%;
    }
    100% {
      width: 89%;
    }
  }

  .skills .skill .compromiso {
    width: 0%;
    animation: 2s compromiso forwards;
  }
  @keyframes compromiso {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
</style>
