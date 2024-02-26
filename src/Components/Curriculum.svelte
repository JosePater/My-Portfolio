<script>
  const curriculum = {
    education: [
      {
        name: 'Ingeniero Electrónico',
        university: 'Universidad Nacional Abierta y a Distancia - UNAD',
        date: '2018 - 2023',
        more: 'Robótica, Telemetría, Telecontrol, IoT',
      },
      {
        name: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
        university: 'Servicio Nacional de Aprendizaje - SENA',
        date: '2021 - 2023',
        more: 'Tecnologías de la Información',
      },
      {
        name: 'Técnico en Soporte de Aplicaciones Informáticas',
        university: 'Instituto Centro de Sistemas - System Center',
        date: '2021 - 2023',
        more: 'Soporte técnico',
      },
    ],
    experience: [
      {
        company: 'Fundación Fundasoft - Argentina',
        perfil: 'Front-end Developer',
        date: 'Octubre 2022 - Mayo 2023',
        descrip:
          'Pasante en el desarrollo front-end, donde colaboré con el desarrollo de una página web a una ONG usando framework Svelte',
      },
      {
        company: 'Mejora del proyecto "API Películas"',
        perfil: 'Front-end & Back-end Developer',
        date: 'Agosto 2023 - septiembre 2023',
        descrip:
          'Desarrollé la mejora de una aplicación web basada en la API de The Movie Database (TMDb) que muestra información detallada sobre películas. Se incluyó la implementación de mejoras en el frontend para la interfaz de usuario, como filtrado por categorías, navegación de la página y responsiva. Se desarrolla la optimización del backend, gestionando las solicitudes a la API de TMDb, la lógica del servidor y la seguridad del sistema',
      },
      {
        company: 'Proyecto "Contador de Palabras"',
        perfil: 'Front-end Developer',
        date: 'Agosto 2023 - septiembre 2023',
        descrip:
          'Esta aplicación web es una creación propia que permite a los usuarios ingresar texto y contar las palabras que se repiten. Además, ofrece configuraciones personalizables, como la capacidad de omitir palabras específicas, establecer un límite mínimo de letras y distinguir entre mayúsculas y minúsculas',
      },
      {
        company: 'Proyecto "Encriptador de texto"',
        perfil: 'Front-end Developer [Orale Next Education + Alura]',
        date: 'Febrero 2024',
        descrip:
          'Este proyecto consiste en una aplicación que encripta y desencripta textos utilizando un sistema de sustitución de letras. Con esta herramienta, se puede intercambiar mensajes secretos con otras personas que conozcan el secreto de la encriptación utilizada.',
      },
    ],
  };
</script>

<!-- SECCIÓN CURRICULUM -->
<section id="curriculum" class="curriculum">
  <div class="contenido-seccion">
    <h2>Curriculum</h2>

    <div class="fila">
      <div class="col izquierda">
        <h3>Educación</h3>
        {#each curriculum.education as item}
          <div class="item izq">
            <h4>{item.name}</h4>
            <span class="casa">{item.university}</span>
            <span class="fecha">{item.date}</span>
            <p>{item.more}</p>
            <div class="conectori">
              <div class="circuloi" />
            </div>
          </div>
        {/each}
      </div>

      <div class="col derecha">
        <h3>Experiencia de trabajo</h3>
        {#each curriculum.experience as item}
          <div class="item der">
            <h4>{item.company}</h4>
            <span class="casa">{item.perfil}</span>
            <span class="fecha">{item.date}</span>
            <p>{item.descrip}</p>
            <div class="conectord">
              <div class="circulod" />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .curriculum {
    background-color: #1e2326;
    color: #fff;
    padding: 50px 20px;
  }
  .curriculum .contenido-seccion {
    max-width: 1100px;
    margin: auto;
  }
  .curriculum h2 {
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;
  }
  .curriculum .fila {
    display: flex;
    justify-content: space-between; /* Espacios entre las columas */
  }
  .curriculum .fila .col {
    width: 49%;
    padding: 0 20px;
  }
  .curriculum .fila .col h3 {
    font-size: 28px;
    font-family: 'Righteous';
    margin-bottom: 25px;
  }
  .curriculum .fila .izquierda {
    border-right: 2px solid #252a2e;
  }
  .curriculum .fila .derecha {
    border-left: 2px solid #252a2e;
  }
  .curriculum .fila .item {
    padding: 25px;
    margin-bottom: 30px;
    background-color: #252a2e;
    position: relative;
  }
  .curriculum .fila .item h4 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .curriculum .fila .item .casa {
    color: var(--colorTema);
    font-size: 22px;
    font-weight: bold;
    display: block;
  }
  .curriculum .fila .item .fecha {
    display: block;
    color: var(--colorTema);
    margin-bottom: 10px;
  }
  .curriculum .fila .item p {
    line-height: 24px;
  }
  .curriculum .fila .izq {
    border-right: 2px solid var(--colorTema);
    margin-right: 20px;
  }
  .curriculum .fila .der {
    border-left: 2px solid var(--colorTema);
    margin-left: 20px;
  }

  /* Conectores izquierdos */
  .curriculum .fila .item .conectori {
    height: 2px;
    background-color: var(--colorTema);
    width: 47px;
    position: absolute;
    top: 50%;
    right: -47px;
    z-index: 5;
  }
  .curriculum .fila .item .conectori .circuloi {
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
  .curriculum .fila .item .conectord {
    height: 2px;
    background-color: var(--colorTema);
    width: 47px;
    position: absolute;
    top: 50%;
    left: -47px;
    z-index: 5;
  }
  .curriculum .fila .item .conectord .circulod {
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
  @media screen and (max-width: 700px) {
    .curriculum .fila {
      display: block;
    }
    .curriculum .fila .col {
      width: 90%;
    }
    .curriculum .fila .derecha {
      margin-left: 20px;
    }
  }
</style>
