import { fromEvent } from 'rxjs';
import { auditTime, map, tap, pluck } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    pluck( 'x'),
    tap(val => console.log('[tap] -> x: ',val)),
    auditTime( 2000 ),
).subscribe( val => console.log('[next]->', val) )