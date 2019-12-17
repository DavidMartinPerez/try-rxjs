import { fromEvent, interval } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';


//Streams
const click$ = fromEvent(document, 'click');
const interval$ = interval(1000)


// click$.pipe(
// 	mergeMap( () => interval$ )
// ).subscribe( console.log );

click$.pipe(
	switchMap( () => interval$ )
).subscribe( console.log );

