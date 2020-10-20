import React from "react";
import pokemons from "../database/data";
import Pokemon from "./Pokemon.jsx";

function Pokedex() {
  return pokemons.map((pkm) => <Pokemon key={pkm.id} pokemon={pkm} />);
}

export default Pokedex;
