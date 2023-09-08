import generateStupidName from 'sillyname';
import superheroes from 'superheroes';

var sillyName = generateStupidName();

var supHero = superheroes.random();

console.log(`My name is ${sillyName} `);
console.log(`My name is ${supHero} `);