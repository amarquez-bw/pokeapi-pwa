import { limpiaHTML } from "../controllers/pokemon.controller.js";
import { main_container, cardsContainer } from "../controllers/main.js";

export function mostrarPokemones(pokemon) {
  limpiaHTML(main_container);

  const { id, name } = pokemon;
  const pokemonType = pokemon.types[0].type.name;

  const nodo = document.createElement("DIV");

  nodo.innerHTML = `
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img loading="lazy" class="rounded-t-lg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
          pokemon.id
        }.png" alt="${name}" />
    </a>
    <div class="p-5">
        <a href="#">
        <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">${pokemonType}</span>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span class="text-3xl font-bold text-gray-900 dark:text-white">${pokemon.name.toUpperCase()}</span> </p>


        <a href="#" id="${id}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
`;

  cardsContainer.appendChild(nodo);
}
