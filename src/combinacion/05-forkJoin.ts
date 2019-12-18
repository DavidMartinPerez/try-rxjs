import { of, interval, forkJoin } from 'rxjs';
import { take, delay, tap } from 'rxjs/operators';

const numeros$ = of(1, 2, 3, 4, 5);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3500));

// forkJoin( numeros$, intervalo$, letras$ )
//     .subscribe(console.log)

forkJoin({ numeros: numeros$,
           intervalo: intervalo$,
           letras: letras$
        })
.subscribe( resp => {
    console.log('numeros: ', resp.numeros)
    console.log('intervalo: ', resp.intervalo)
    console.log('letras: ', resp.letras)
});
