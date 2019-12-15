import { pipe, range, from, fromEvent } from 'rxjs';
import { filter, map, mapTo } from 'rxjs/operators';

range(20, 10)
	.pipe(
		filter((val) => {
			return val % 2 === 0;
		})
	)
	.subscribe(console.log);

interface Heroe {
	tipo: string;
	nombre: string;
}

const heroes: Heroe[] = [
	{ tipo: 'Heroe', nombre: 'Batman' },
	{ tipo: 'Heroe', nombre: 'Spiderman' },
	{ tipo: 'Antiheroe', nombre: 'Venom' },
	{ tipo: 'Villano', nombre: 'Joker' },
	{ tipo: 'Villano', nombre: 'Duende verde' }
];

from(heroes)
	.pipe(
		filter((val) => {
			return val.tipo !== 'Heroe';
		})
	)
	.subscribe(console.log);
