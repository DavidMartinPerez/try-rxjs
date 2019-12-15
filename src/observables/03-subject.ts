import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => console.log('[next]', value),
	error: (err) => console.warn('[error]', err),
	complete: () => console.info('[complete]')
};

const interval$ = new Observable<number>( subs => {

	const intervalID = setInterval( () => {
		subs.next( Math.random() );
	}, 1000 );

	return () => {
		clearInterval( intervalID )
		console.log('interval destruido');
	};

});

/**
 * Subject
 * 1- Casteo múltiple
 * 2- También es un osbserver
 */
const subject$ = new Subject<number>();
const subscription = interval$.subscribe( subject$ );

const subs1 = subject$.subscribe( observer );
setTimeout( () => {
	const subs2 = subject$.subscribe( observer );
}, 1001 );

setTimeout( () => {
	subject$.next( 10 );

	subject$.complete();

	subscription.unsubscribe();
}, 3500);