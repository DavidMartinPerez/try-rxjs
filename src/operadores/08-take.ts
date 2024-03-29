import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);

numbers$.pipe(
    tap( val => console.log(`[tap] ->`, val) ),
    take(3)
).subscribe({
	next: (val) => console.log('[next]', val),
	complete: () => console.log('[complete]')
});
