import { fromEvent } from 'rxjs';
/**
 * Eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

src1$.subscribe(({ x, y }) => {
	console.log(`[MouseEvent | x & y] -> x:${x}, y: ${y}`);
});
src2$.subscribe(({ key }) => {
	console.log(`[KeyboardEvent | key] -> ${key}`);
});
