import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent( document, 'click' );

click$.pipe(
  throttleTime(3000)
)//.subscribe( console.log )


const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent( input, 'keyup' ).pipe(
  throttleTime(1000, asyncScheduler, {
    leading: false,
    trailing: true
  }),
  pluck<Event, string>( 'target', 'value' ),
  distinctUntilChanged()
);

input$.subscribe( console.log );
