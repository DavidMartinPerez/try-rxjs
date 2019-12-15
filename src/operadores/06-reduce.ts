import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

// Reduce con vanile JS
const numbers = [1,2,3,4,5];

const reducer = ( acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce( reducer, 0 );

console.log('suma total', total);

// reduce RXJS

interval(500)
    .pipe(
        take(6),
        tap( val => console.log(`[tap] -> ${val}`) ),
        reduce( reducer )
    )
    .subscribe({
    next: val => console.log('[next] ->', val),
    complete: () => console.log('[complete]')
})