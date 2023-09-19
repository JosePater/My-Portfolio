<script>
  import Header from './Header.svelte';
  import SobreMi from '../components/SobreMi.svelte';
  import Skills from '../components/Skills.svelte';
  import Footer from '../components/Footer.svelte';
  import Curriculum from '../components/Curriculum.svelte';
  import Portfolio from '../components/Portfolio.svelte';
  import Contacto from '../components/Contacto.svelte';
  import WhatsAppButton from '../components/WhatsAppButton.svelte';
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
