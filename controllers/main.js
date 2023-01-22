import {parametrosBusqueda} from './pokemon.controller.js';
import {muestraPerfil} from '../components/profile.component.js'

export const cardsContainer = document.querySelector("#cards");
export const search_navbar = document.querySelector("#search-navbar");
export const baseUrl = "https://pokeapi.co/api/v2";
export const profile = document.querySelector("#profile")
export const main_container = document.querySelector("#main-container");
export const stats_pokemon = document.querySelector("#stats_pokemon");
export const search_navbar_mb = document.querySelector("#search-navbar-mb")
// export const modal;

search_navbar.addEventListener("keypress", parametrosBusqueda);
profile.addEventListener("click", muestraPerfil)
search_navbar_mb.addEventListener("keypress", parametrosResponsivos)

function parametrosResponsivos(e){
    //console.log(e)
parametrosBusqueda(e)
}