import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
	.pipe(
		tap((val) => console.log('[tap] -> ', val.clientY)),
		map(({ clientX, clientY }) => ({ clientX, clientY })),
		first(({ clientY }) => clientY >= 150)
	)
	.subscribe({
		next: (val) => console.log(`[next] -> `, val),
		complete: () => console.log('[complete]')
	});
