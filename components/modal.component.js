import {typesIterador, limpiaHTML} from '../controllers/pokemon.controller.js'
import { stats_pokemon } from '../controllers/main.js';
let modal

function mostrarEstadisticas(estadisticas) {
  limpiaHTML(stats_pokemon);

  const estadistica = document.createElement("DIV");
  let estadisticasObj = {
    hp: estadisticas[0],
    attack: estadisticas[1],
    defense: estadisticas[2],
    special_attack: estadisticas[3],
    special_defense: estadisticas[4],
    speed: estadisticas[5],
  };

  estadistica.innerHTML = `
      <div class=" container_stats_items">
  
    <div class="">
    <p class="text-lg text-left font-medium text-gray-900 dark:text-white stat_pokemon_item">HP</p>
  
  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-blue-600 rounded-full text-center text-xl text-gray-900 dark:text-white text_estadistica" style="width: ${estadisticasObj.hp.base_stat}% "> ${estadisticasObj.hp.base_stat}%</div>
  </div>
  </div>
  
  <div class="">
  <p class="text-lg text-left font-medium text-gray-900 dark:text-white stat_pokemon_item">Attack</p>
  
  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-blue-600 rounded-full text-center text-xl text-gray-900 dark:text-white text_estadistica" style="width: ${estadisticasObj.attack.base_stat}%"> ${estadisticasObj.attack.base_stat}%</div>
  </div>
  </div>
  
  <div class="">
  <p class="text-lg text-left font-medium text-gray-900 dark:text-white stat_pokemon_item">Defense</p>
  
  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-blue-600 rounded-full text-center text-xl text-gray-900 dark:text-white text_estadistica" style="width: ${estadisticasObj.defense.base_stat}%"> ${estadisticasObj.defense.base_stat}%</div>
  </div>
  </div>
  
  <div class="">
  <p class="text-lg text-left font-medium text-gray-900 dark:text-white stat_pokemon_item">Special Attack</p>
  
  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-blue-600 rounded-full text-center text-xl text-gray-900 dark:text-white text_estadistica" style="width: ${estadisticasObj.special_attack.base_stat}%"> ${estadisticasObj.special_attack.base_stat}%</div>
  </div>
  </div>
  
  <div class="">
  <p class="text-lg text-left font-medium text-gray-900 dark:text-white stat_pokemon_item">Special Defense</p>
  
  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-blue-600 rounded-full text-center text-xl text-gray-900 dark:text-white text_estadistica" style="width: ${estadisticasObj.special_defense.base_stat}%"> ${estadisticasObj.special_defense.base_stat}%</div>
  </div>
  </div>
  
  <div class="">
  <p class="text-lg text-left font-medium text-gray-900 dark:text-white stat_pokemon_item">Speed</p>
  
  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-blue-600 rounded-full text-center text-xl text-gray-900 dark:text-white text_estadistica" style="width: ${estadisticasObj.speed.base_stat}%"> ${estadisticasObj.speed.base_stat}%</div>
  </div>
  </div>
  
  <button type="button" id="close_modal_button" class="stat_pokemon_item_button text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-lg text-left font-medium text-gray-900 dark:text-white">
  <img src="assets/icons/ArrowSmallLeft.svg" class="button-return"/>  Back 
  </button>
    `;

  stats_pokemon.appendChild(estadistica);
}

export function mostrarModal(data) {
  // set the modal menu element
  const $targetEl = document.getElementById("modalEl");
  const name_pokemon = document.getElementById("name_pokemon");
  const imagenPokemon = document.getElementById("imagenPokemon");
  const close_modal_button = document.querySelector("#close_modal_button");

  typesIterador(data.types);

  mostrarEstadisticas(data.stats);

  name_pokemon.innerText = data.name.toUpperCase();
  name_pokemon.classList.add("item-modal-pokemon")
  imagenPokemon.innerHTML = `<img class="pokemon_item_details p-8 rounded-t-lg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png" alt="${data.name}" />`;

  // options with default values
  const options = {
    placement: "bottom-right",
    backdrop: "dynamic",
    backdropClasses:
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    onHide: () => {
      console.log("modal is hidden");
    },
    onShow: () => {
      console.log("modal is shown");
    },
    onToggle: () => {
      console.log("modal has been toggled");
    },
  };

  modal = new Modal($targetEl, options);
  modal.show();
}

export function cerrarModal() {
  modal.hide();
}
