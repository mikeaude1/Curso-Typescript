/* import { getPokemon } from "./generics/get-pokemon";

getPokemon(4).then(pokemon => console.log(pokemon.sprites.front_default))
.catch(error => console.log(error))
.finally(()=>console.log('Fin del getPokemon')) */

import {Pokemon} from './decorators/pokemon-class'

/* (Pokemon.prototype as any ).customName = 'Pikashu' */

const charmander = new Pokemon('Charmander');

charmander.savePokemonToDB(520);