import { fromEvent } from 'rxjs';
import { tap, map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
	.pipe(
		tap((val) => console.log('[tap] -> ', val)),
        map(({ x, y }) => ({ x, y })),
        takeWhile(( { y } ) => y <= 150, true ) //condicion, inclusive o no inclusive el ultimo next
	)
	.subscribe({
		next: (val) => console.log(`[next] -> `, val),
        complete: () => console.log('[complete]')
	});
