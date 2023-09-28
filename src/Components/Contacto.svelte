<script>
  export const prerender = true;
  const contacto = {
    img: '/images/ubicacion.png',
    input: [
      {
        title: 'Nombre',
        name: 'name',
      },
      {
        title: 'Número de teléfono',
        name: 'number',
      },
      {
        title: 'Correo electrónico',
        name: 'email',
      },
      {
        title: 'Asunto',
        name: 'subject',
      },
    ],

    // Campos de textos
    datos: [
      {
        icon: 'fa-solid fa-location-dot',
        name: 'Colombia',
      },
      {
        icon: 'fa-sharp fa-solid fa-mobile',
        name: 'Llámanos: +57 301 650 2350',
      },
      {
        icon: 'fa-solid fa-envelope',
        name: 'Email: josepater_1130@hotmail.com',
      },
    ],
  };
</script>

<!-- SECCIÓN CONTACTO -->
<section id="contacto" class="contacto">
  <div class="contenido-seccion">
    <h2>Contacto</h2>
    <div class="fila">
      <form class="col" name="contact" method="POST" data-netlify="true">
        {#each contacto.input as item}
          <input
            type={item.name}
            name={item.name}
            placeholder={item.title}
            required
          />
        {/each}

        <textarea
          type="text"
          name="message"
          cols="30"
          rows="7"
          placeholder="Mensaje"
          required
        />

        <button type="submit">
          Enviar mensaje<i class="fa-solid fa-paper-plane" />
          <span class="overlay" />
        </button>
        <input type="hidden" name="form-name" value="contact" />
      </form>

      <!-- Mapa -->
      <div class="col">
        <img src={contacto.img} alt="" />
        <div class="info">
          <ul>
            {#each contacto.datos as item}
              <li>
                <i class={item.icon} />
                {item.name}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .contacto {
    background-image: url(/images/contacto_bg.png);
    background-color: #1e2326;
    color: #fff;
    padding: 50px 0;
  }
  .contacto .contenido-seccion {
    max-width: 1100px;
    margin: auto;
  }
  .contacto h2 {
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;
  }
  .contacto .fila {
    display: flex; /* Coloca el contenido en 2 columnas*/
  }
  .contacto .col {
    width: 50%;
    padding: 10px;
    position: relative;
  }
  .contacto .col input,
  textarea {
    display: block;
    width: 100%;
    padding: 18px;
    border: none;
    margin-bottom: 20px;
    /* background-color: #252A2E; */
    color: black;
    font-size: 19px;
  }
  .contacto button {
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
  .contacto button .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: var(--colorTema);
    z-index: -1;
    transition: 1s;
  }
  .contacto button:hover .overlay {
    width: 100%;
  }
  .contacto .col img {
    width: 100%;
    height: 573px;
  }
  .contacto .col .info {
    position: absolute;
    top: 40%;
    background-color: #252a2e;
    padding: 20px;
    width: 380px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .contacto .col .info ul {
    list-style: none;
    margin-left: -20px;
  }
  .contacto .col .info ul li {
    margin-bottom: 20px;
    margin-left: -10px;
  }
  .contacto .col .info ul li i {
    color: var(--colorTema);
    display: inline-block;
    margin-right: 20px;
  }

  /* Pantalla <=700px se hace una solo columna (display:block;)*/
  @media screen and (max-width: 750px) {
    .contacto .fila {
      display: block;
    }
    .contacto .fila .col {
      width: 100%;
    }
    .contacto .fila .col img {
      height: 300px;
    }
  }
</style>
