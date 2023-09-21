<script>
  import Header from './Header.svelte';
  import SobreMi from '../Components/SobreMi.svelte';
  import Skills from '../Components/Skills.svelte';
  import Footer from '../Components/Footer.svelte';
  import Curriculum from '../Components/Curriculum.svelte';
  import Portfolio from '../Components/Portfolio.svelte';
  import Contacto from '../Components/Contacto.svelte';
  import WhatsAppButton from '../Components/WhatsAppButton.svelte';
</script>

<div class="app">
  <Header />

  <main>
    <slot />
    <SobreMi />
    <Skills />
    <Curriculum />
    <Portfolio />
    <Contacto />
    <WhatsAppButton />
  </main>

  <footer>
    <Footer />
  </footer>
</div>
