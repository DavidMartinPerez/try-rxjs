import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';
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
        distinctUntilKeyChanged( 'name' )
    )
    .subscribe( console.log )