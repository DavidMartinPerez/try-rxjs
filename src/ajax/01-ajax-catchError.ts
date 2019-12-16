import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


const url = 'https://pokeapi.co/api/v2/pokemon/ditto/';

ajax( url ).pipe(
    pluck( 'response', 'name' ),
    catchError( (err:AjaxError) => {
        console.warn(err.message);
        return of(null)
    })
).subscribe( poke => console.log('poke: ', poke ));