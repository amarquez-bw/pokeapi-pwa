import {updatePokemons} from './components/paginator.component.js'
import {baseUrl} from './controllers/main.js'
import {pokemonSeleccionado} from './controllers/pokemon.controller.js'
document.addEventListener("DOMContentLoaded", main);
document.addEventListener("click", pokemonSeleccionado);

function main() {
  updatePokemons(baseUrl + "/pokemon?limit=20&offset=0");
}