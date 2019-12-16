import { fromEvent, asyncScheduler } from 'rxjs';
import { map, sampleTime, pluck } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click' );
  
click$.pipe(
  sampleTime(2000),
  map( ( {x, y} ) => ( {x, y} ) )
).subscribe( console.log )


const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent( input, 'keyup' ).pipe(
  sampleTime(2000),
  pluck<Event, string>( 'target', 'value' )
);

input$.subscribe( console.log );
