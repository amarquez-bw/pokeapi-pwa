import { spinner } from "../components/spinner.component.js";
import {mostrarAlertas, limpiaHTML} from './pokemon.controller.js'
import { main_container } from "./main.js";
import {mostrarPokemones} from '../components/cards.component.js'

export async function connectionApi(url) {
  spinner();

  await fetch(url)
    .then((res) => res.json())
    .then((res) => obtenerResultados(res))
    .catch((error) => mostrarAlertas(error));
}

function obtenerResultados(data) {
  limpiaHTML(main_container);

  const pokemons = data.results;

  pokemons.forEach((pokemon) => {
    infoPokemon(pokemon);
  });
}

async function infoPokemon(pokemon) {
  let infoPokemon = pokemon.url;

  await fetch(infoPokemon)
    .then((res) => res.json())
    .then((res) => mostrarPokemones(res))
    .catch((error) => mostrarAlertas(error));
}
