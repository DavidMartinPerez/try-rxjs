import { of, from } from 'rxjs';
import {  distinctUntilChanged } from 'rxjs/operators';

const numbers$ = of<number|string>(1,'1',2,3,4,1,1,2,3,4,1);

numbers$.pipe(
    distinctUntilChanged()
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
        distinctUntilChanged( (ant, curr) => ant.name === curr.name )
    )
    .subscribe( console.log )