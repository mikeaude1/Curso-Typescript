/* //import * as HeroClasses from "./classes/Hero";
//import powers from "./data/powers";
import { Hero } from "./classes/Hero";
//console.log('Hola Mundo!!!!');
//const Hero= 123;
const superman= new Hero('Superman',2, 55);
console.log(superman);
console.log(superman.power);
//console.log( powers );
 */
import { genericFunction, printObject, genericArrowFunction } from "../generics/generics";
import { Hero,Villain } from "../interfaces"
/* 
printObject(123);
printObject(new Date);
printObject({a:1, b:2,c:3});
printObject([1,2,3,4,5,6,7,8,9,10]);
printObject('Hola Mundo'); */

//console.log(/* genericFunction */genericArrowFunction(123).toFixed(2));
//console.log(genericFunction('Hola mundo').toUpperCase()/* .toFixed(2) */);
//console.log(genericFunction(new Date()).getDate()/* .toFixed(2) */);

const deadpool={
    name:'Deadpool',
    realName:'Wade Winstong Wilson',
    dangerLevel:130
}
console.log( genericArrowFunction<Hero>(deadpool).realName);
console.log( genericArrowFunction<Villain>(deadpool).dangerLevel);