<script>
    const myNumber = '573176351951';
    const message = 'Hola, José. Te contacto desde tu Portfolio.';
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${myNumber}&text=${message}`
</script>

<section>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
    <a href={linkWhatsApp} class="float" target="_blank">
    <i class="fa fa-whatsapp my-float" />
    </a>
</section>

<style>
  .float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 20px;
    background-color: #25d366;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 40px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
  }
  .float:hover {
    text-decoration: none;
    color: #1b1a1a;
    background-color: #25d366;
    animation: shake 1s;
    animation-iteration-count: infinite;
  }

  .my-float {
    margin-top: 0;
  }
  
  @keyframes pulse-animation {
    0% { box-shadow: 0 0 0 0px #25d36657, 0 0 0 0px rgba(0, 0, 0, 0.2); }
    100% { box-shadow: 0 0 0 20px rgba(0, 0, 0, 0); }
  }

  /* Definición de la animación shake */
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(5px); }
    50% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
    100% { transform: translateX(0); }
  }

  /* Estilo del elemento con las animaciones */
  a {
    width: 100px;
    height: 100px;
    background-color: #25d366;
    margin: 0 20px;
    animation: pulse-animation 2s infinite, shake 2s infinite; /* Aplicar las animaciones */
  }
</style>
