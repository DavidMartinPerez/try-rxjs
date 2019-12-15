import { range } from 'rxjs';

// const obs$ = of(1,2,3,4,5,6,7,8,9,10);
const obs$ = range(1,10);

console.log( 'init range' );
obs$.subscribe( console.log );
console.log( 'finish range' );