<script>
  const inicialCard = {
    redes: [
      {
        icon: 'fa-brands fa-linkedin',
        link: 'https://www.linkedin.com/in/josepaternina/',
      },
      { icon: 'fa-brands fa-github', link: 'https://github.com/JosePater' },
      { icon: 'fa-brands fa-twitter', link: 'https://twitter.com/JosePater30' },
      {
        icon: 'fa-brands fa-skype',
        link: 'https://join.skype.com/invite/tnjJTojEUuxU',
      },
    ],
  };
</script>

<div class="card-redes">
  <div class="redes">
    {#each inicialCard.redes as red}
      <a href={red.link} target="_blank"><i class="{red.icon} fa-beat" /></a>
    {/each}
  </div>
</div>

<style>
  .card-redes {
    padding: 10px;
    max-width: 350px;
    margin: auto;
    text-align: center;
    border-radius: 40px;
  }
  .card-redes .redes a {
    color: #fff;
    display: inline-block;
    text-decoration: none;
    border: 1px solid #fff; /* Crea un cuadro en cada ícono de redes */
    border-radius: 100%; /* Pasar de cuadro a círculo */
    width: 42px;
    height: 42px;
    line-height: 42px; /* Centra los íconos de redes dentro del círculo */
    margin: 20px 5px; /* Separa los íconos  */
    font-size: 20px;
    transition: 0.5s;
  }
  .card-redes .redes a:hover {
    color: blue; /* me */
    transition: 0.5s;
    background-color: var(--colorTema);
    transform: scale(1.2);
  }
</style>
