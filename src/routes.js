import Inicio from './Pages/Inicio.svelte';
import ErrorRuta from './Pages/ErrorRuta.svelte'


const routes = {
    '/':Inicio,
    '*':ErrorRuta
}

export default routes