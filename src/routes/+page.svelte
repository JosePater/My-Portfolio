<script context="module">
  import CardRedes from '../Components/CardRedes.svelte';
  export const inicialCard = {
    // Objeto para exportar
    name: 'JOSÉ PATERNINA',
    profession: [
      { type: 'Ingeniero Electrónico' },
      { type: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información' },
      { type: 'Técnico en Soporte de Aplicaciones Informáticas' },
    ],
  };
</script>

<!-- SECCIÓN inicialCard -->
<section id="inicialCard" class="inicialCard">
  <div class="contenido-banner">
    <div class="contenedor-img">
      <img src="/images/hero.png" alt="" />
    </div>
    <h1 class="fa-fade">{inicialCard.name}</h1>

    {#each inicialCard.profession as item}
      <h2>{item.type}</h2>
    {/each}

    <CardRedes />
  </div>
</section>

<style>
  .inicialCard {
    background: linear-gradient(
        to top,
        rgba(30, 35, 38, 0.8),
        rgba(30, 35, 38, 1)
      ),
      url(/images/background.jpg);
    background-size: cover;
    height: 125vh;
    color: #fff;
    display: flex;
    align-items: center;
  }
  .inicialCard .contenido-banner {
    padding: 20px;
    background-color: #1e2326;
    max-width: 350px;
    margin: auto;
    text-align: center;
    border-radius: 40px;
  }
  .inicialCard .contenido-banner img {
    margin-top: 40px;
    border: 10px solid var(--colorTema);
    display: block;
    width: 80%;
    margin: auto;
    border-radius: 100%;
  }
  .inicialCard .contenido-banner h1 {
    margin-top: 40px;
    /* font-size: 42px; */
    font-family: Righteous;
  }
  .inicialCard .contenido-banner h2 {
    font-size: 15px;
    font-weight: normal;
  }
  .inicialCard .contenido-banner h2:hover {
    color: var(--colorTema);
    transform: scale(1.1);
  }
</style>
