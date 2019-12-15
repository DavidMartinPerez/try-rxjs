import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1,5).pipe(
    tap( val => console.log(`[tap] -> ${val}`) ),
    map( val => val * 10 ),
    tap({
        next: val => console.log('[tap -> next] ->', val),
        complete: () => console.log('[tap -> complete]')
    })
);

numeros$.subscribe( val => console.log( `[subs] -> ${val}` ) );