import axios from "axios";

export const getPokemon = async(pokemonid:number):Promise<number> => {
   const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
    console.log(resp.data);
   return resp.data
}