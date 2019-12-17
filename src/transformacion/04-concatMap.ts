import { fromEvent, interval } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';


//Streams
const click$ = fromEvent(document, 'click');
const interval$ = interval(1000).pipe( take(3) );


click$.pipe(
	concatMap( () => interval$ )
).subscribe( console.log );

