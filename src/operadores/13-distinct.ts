import { of, from } from 'rxjs';
import {  distinct } from 'rxjs/operators';

const numbers$ = of<number|string>(1,'1',2,3,4,1,1,2,3,4,1);

numbers$.pipe(
    distinct()
).subscribe( console.log );

interface Heroe {
    name: string;
}

const heroes: Heroe[] = [
    { name: 'Cloud' },
    { name: 'Cloud' },
    { name: 'Batman' },
    { name: 'Batman' },
    { name: 'Spiderman' },
    { name: 'Batman' },
    { name: 'Spiderman' },
    { name: 'Spiderman' },
    { name: 'Link' },
    { name: 'Link' },
    { name: 'Luigi' },
    { name: 'Link' },
]

from( heroes )
    .pipe(
        distinct( h => h.name )
    )
    .subscribe( console.log )
