import { baseUrl, main_container, cardsContainer, search_navbar, search_navbar_mb } from "./main.js";
import {mostrarModal, cerrarModal} from '../components/modal.component.js';
import {spinner} from '../components/spinner.component.js'
import { mostrarPokemones } from "../components/cards.component.js";
import {mostrarErrores} from '../components/404.component.js'
import {connectionApi} from './connection.controller.js'
import { updatePokemons} from '../components/paginator.component.js'

export async function pokemonSeleccionado(e) {
  e.preventDefault()
  const id = e.target.id;

  //console.log(e.target.id);
  if (id && id !== "modalEl" && id !=="close_modal_button") {
    fetch(baseUrl + `/pokemon/${id}`)
      .then((res) => res.json())
      .then((res) => mostrarModal(res))
      .catch((error) => mostrarAlertas(error));
  } 

  if (e.target.parentElement.id == 'close_modal_button' || id == 'close_modal_button' ){
    cerrarModal()
  }

  const rango = cardsContainer.childNodes.length -1
  if(id=='updatedPokemons'){
    updatePokemons(baseUrl+`/pokemon?limit=20&offset=${rango}`)
  }

}

export function typesIterador(array) {
  const types_pokemon = document.querySelector("#types_pokemon");

  limpiaHTML(types_pokemon);

  array.forEach((object) => {
    const types = document.createElement("DIV");
    types.innerHTML = `
      <span class="bg-blue-100 text-blue-100 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-100">${object.type.name}</span>
      `;

    types_pokemon.appendChild(types);
  });
}

export async function parametrosBusqueda(e) {

  if (e.key == "Enter") {
    limpiaHTML(cardsContainer);
    limpiaHTML(main_container);
    spinner();
    let termino = search_navbar.value.trim();

    if(search_navbar.value){
      termino = search_navbar.value.trim().toLowerCase();
    }

    if(search_navbar_mb.value){
      termino = search_navbar_mb.value.trim().toLowerCase();
    }
    

    let query = baseUrl + `/pokemon/${termino}`;

    if (termino.length == 0) return connectionApi(baseUrl + "/pokemon");

    await fetch(query)
      .then((res) => res.json())
      .then((res) => mostrarPokemones(res))
      .catch((error) => mostrarErrores(error, termino));

    search_navbar.value = "";
    search_navbar_mb.value = "";
  }
}

export function limpiaHTML(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

export function mostrarAlertas(msg) {
  console.log(msg);
}
