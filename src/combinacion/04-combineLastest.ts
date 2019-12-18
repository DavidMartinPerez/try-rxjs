import { combineLatest, of } from 'rxjs';

const letras$ = of('a','b','c','d');
const numeros$ = of(1,2,3,4,5);

combineLatest(
    letras$, numeros$
).subscribe( console.log )
