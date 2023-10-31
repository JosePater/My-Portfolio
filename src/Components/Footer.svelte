<script>
  import CardRedes from './CardRedes.svelte';
  // Date
  const today = new Date();
  const year = today.getFullYear();
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const month = months[today.getMonth()];
</script>

<!-- SECCIÓN FOOTER -->
<footer>
  <!-- Botón Ir-al-inicio -->
  <a href="#inicialCard" class="arriba">
    <i class="fa-sharp fa-solid fa-angles-up" />
  </a>

  <!-- Redes sociales -->
  <CardRedes />

  <p>&copy {month} {year} | José Paternina</p>
</footer>

<style>
  footer {
    background-color: #252a2e;
    color: #fff;
    padding: 50px 0 30px 0;
    text-align: center;
    position: relative;
    width: 100%;
  }
  footer .arriba {
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
    line-height: 50px; /* centra el ícono dentro del círculo */
    font-size: 20px;
  }
  footer .arriba:hover {
    background-color: yellow;
    color: black;
  }
</style>
