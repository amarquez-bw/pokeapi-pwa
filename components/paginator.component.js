import {spinner} from './spinner.component.js'
import {mostrarPokemones} from './cards.component.js'
import {limpiaHTML} from '../controllers/pokemon.controller.js'

let pokemonsList = document.getElementById("cards");
let links = document.getElementById("links");

export function updatePokemons(url) {
  spinner();

  if (url) {
    // Llamamos a la API de pokemon con Fetch
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // Obtenemos y recorremos a los primeros 20 pokemones obtenidos

        for (let i of res.results) {
          //Realizamos otra solicitud Fetch con la URL especifica del pokemon actual recorrido, para obtener datos mas especficos como la imagen
          fetch(i.url)
            .then((x) => x.json())
            .then((x) => {
              // Vamos pintando o ingresando la imagen y nombre del pokemon actual que se esta evaluando
              mostrarPokemones(x);
              
              //obtenerResultados(x)
            });
        }

        //Botón hacia adelante
        limpiaHTML(links);
        links.innerHTML += res.next
        
          ? `
          <button id="updatedPokemons" type="button" onclick="updatePokemons('${res.next}')" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> 
        
        <!-- <button id="updatedPokemons" type="button" onclick="updatePokemons('${res.next}')" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> 
        <button type="button" onclick="updatePokemons('${res.next}')" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> 
        -->

    Load Pokemons
    <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
        `
          : "";
      });
  }
}

