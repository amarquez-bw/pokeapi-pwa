import { limpiaHTML } from "../controllers/pokemon.controller.js";
import { main_container, cardsContainer } from "../controllers/main.js";

export function mostrarErrores(msg, termino) {
  limpiaHTML(main_container);
  limpiaHTML(cardsContainer);
  const alerta = document.createElement("DIV");
  alerta.innerHTML = `
  <div class="">
  <div role="status" class="pokemon_not_found">
  
  <img loading="lazy" class="h-auto max-w-lg mx-auto img_pokemon_not_found" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png"/>
  
  <span class="sr-only">Loading...</span>
  <div class="align_not_found">
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span class="text-6xl text-gray-900 dark:text-white">"${termino}" not found.</span> </p>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span class="text-4xl text-gray-900 dark:text-white"> Please try again </p>
  </div>
  
  <button type="button" onclick="location.reload()" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">GO</button>
  </div>
  </div>
    `;

  main_container.appendChild(alerta);
}
