import { pipe, fromEvent } from 'rxjs';
import { filter, map, mapTo } from 'rxjs/operators';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map<KeyboardEvent,string>( e => e.code ),
    filter( code => code === 'Enter' ),
    mapTo( 'Estas pulsando el Enter' )
);

keyup$.subscribe(console.log);
