<script>
  const sobreMi = {
    cargo: 'DESARROLLADOR FRONT-END JÚNIOR',
    name: 'José Paternina',
    url_CV:
      'https://drive.google.com/file/d/1YKUBzNfJBru-GOQWbqIK0PCl6ti9w7-1/view',
    descrip:
      'ingeniero electrónico apasionado por el desarrollo de desarrollo web y la otras tecnologías.',
    datos: [
      { name: 'Cumpleaños', valor: '30-09-1993' },
      { name: 'Teléfono', valor: '+57 301 650 2350' },
      { name: 'Email', valor: 'josepater_1130@hotmail.com' },
      { name: 'Website', valor: 'https://www.linkedin.com/in/josepaternina' },
      { name: 'Ubicación', valor: 'Colombia' },
    ],
    intereses: [
      { name: 'Deporte', icon: 'fa-solid fa-chess' },
      { name: 'Android', icon: 'fa-brands fa-android' },
      { name: 'Libros', icon: 'fa-solid fa-book' },
      { name: 'Playa', icon: 'fa-solid fa-umbrella-beach' },
    ],
  };
</script>

<!-- SECCIÓN SOMRE MI -->
<section id="sobremi" class="sobremi">
  <div class="contenido-seccion">
    <h2>Sobre Mí</h2>
    <p>Hola, soy <span>{sobreMi.name}, </span> {sobreMi.descrip}</p>

    <div class="fila">
      <!-- Datos personales -->
      <div class="col">
        <h3>Datos Personales</h3>
        <ul>
          {#each sobreMi.datos as item}
            <li>
              <strong>{item.name}:</strong>
              {item.valor}
            </li>
          {/each}
          <li>
            <strong>Cargo:</strong>
            <span>{sobreMi.cargo}</span>
          </li>
        </ul>
      </div>

      <!-- Intereses -->
      <div class="col">
        <h3>Intereses</h3>
        <div class="contenedor-intereses">
          {#each sobreMi.intereses as item}
            <div class="intereses">
              <i class="{item.icon} fa-bounce" />
              <span>{item.name}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
    <button>
      <a href={sobreMi.url_CV} target="_blank" rel="noopener noreferrer">
        Descargar CV <i class="fa-solid fa-download" />
      </a>
      <span class="overlay" />
    </button>
  </div>
</section>

<style>
  .sobremi {
    background-color: #1e2326;
    color: #fff;
    padding: 50px 20px;
  }
  .sobremi .contenido-seccion {
    max-width: 1100px;
    margin: auto;
  }
  .sobremi h2 {
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;
  }
  .sobremi .contenido-seccion p {
    font: 18px;
    line-height: 22px;
    margin-bottom: 20px;
  }
  .sobremi .contenido-seccion p span {
    color: var(--colorTema);
    font-weight: bolder;
  }
  .sobremi .fila {
    display: flex; /* en 2 columnas */
  }
  .sobremi .fila .col {
    width: 50%; /* Separa las 2 columnas */
  }
  .sobremi .fila .col h3 {
    font-size: 28px;
    font-family: 'Righteous';
    margin-bottom: 25px;
  }
  .sobremi.fila .col ul {
    list-style: none;
  }
  .sobremi .fila .col li {
    margin: 12px 0;
  }
  .sobremi .fila .col ul li strong {
    display: inline-block;
    color: var(--colorTema);
  }
  .sobremi .fila .col ul li span {
    color: #1e2326;
  }
  .sobremi .fila .col ul li span {
    background-color: var(--colorTema);
    padding: 3px;
    font-weight: bold;
    border-radius: 5px;
  }
  .sobremi .fila .col ul li span:hover {
    background-color: yellow;
    cursor: default;
  }
  .sobremi .fila .col .contenedor-intereses {
    display: flex;
    flex-wrap: wrap;
  }
  .sobremi .fila .col .contenedor-intereses .intereses {
    width: 100px;
    height: 100px;
    background-color: #252a2e;
    border-radius: 10px;
    margin: 0 15px 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }
  .sobremi .fila .col .contenedor-intereses .intereses:hover {
    background-color: var(--colorTema);
  }
  .sobremi .fila .col .contenedor-intereses .intereses i {
    font-size: 30px;
    margin-bottom: 10px;
  }
  .sobremi button {
    cursor: pointer;
    background-color: transparent;
    border: 2px solid #fff;
    width: fit-content;
    display: block;
    margin: 20px auto;
    padding: 10px 22px;
    font-size: 16px;
    color: #fff;
    position: relative;
    z-index: 10;
  }
  .sobremi button a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
  }
  .sobremi button .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 0%; /* inicio relleno */
    height: 100%;
    background-color: var(--colorTema);
    z-index: -1; /* Se devuelte el relleno */
    transition: 0.5s; /* Tiempo del relleno */
  }
  .sobremi button:hover .overlay {
    width: 100%; /* fin relleno */
  }

  @media screen and (max-width: 700px) {
    /* Pantalla <=700px se hace una solo columna (display:block;)*/
    .sobremi .fila {
      display: block;
    }
    .sobremi .fila .col {
      width: fit-content;
    }
  }
</style>
