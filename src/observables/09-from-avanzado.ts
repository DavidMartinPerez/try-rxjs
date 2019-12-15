import { of, from, Observer } from 'rxjs';

/**
 * of = get parms y genera una secuencia
 * from = array, promise, iterable, observable y genera una secuencia
 */

const observer: Observer<any> = {
	next: (val) => console.log(`[next] -> ${val}`),
	error: (err) => console.log,
	complete: () => console.log('[complete]')
};

// #### array ####
// const source$ = from([1,2,3,4,5]); // 1,2,3,4,5
// source$.subscribe( observer );

// // #### string ####
// const source$ = from('david'); // d a v i d
// source$.subscribe( observer );

// #### promesas ####
// const source$ = from<Promise<Response>>(fetch('https://pokeapi.co/api/v2/pokemon/ditto/'));
// source$.subscribe(async (resp) => {
// 	const data = await resp.json();
// 	console.log(data);
// });

// #### iterables #######

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Generador
const gen = function*() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
};

const iterable = gen();
from(iterable).subscribe(observer);
