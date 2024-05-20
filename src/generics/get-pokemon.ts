import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = async(pokemonid:number):Promise<Pokemon> => {
   const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
    console.log(data);
   return data
}