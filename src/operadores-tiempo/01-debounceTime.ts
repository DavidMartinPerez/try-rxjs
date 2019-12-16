import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

//Click ejemplo
const click$ = fromEvent( document, 'click' );

click$.pipe(
  debounceTime(1000)
)//.subscribe( console.log )

//Input ejemplo
const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent( input, 'keyup' ).pipe(
  debounceTime(1000),
  pluck<Event, string>( 'target', 'value' ),
  distinctUntilChanged()
);

input$.subscribe( console.log );
