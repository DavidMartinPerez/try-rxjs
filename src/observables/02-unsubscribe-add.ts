import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => console.log('[next]', value),
	error: (err) => console.warn('[error]', err),
	complete: () => console.info('[complete]')
};

let cont = 0;
const interval$ = new Observable<number>((subs) => {
	//Creamos un contador que emitirá números cada 3s

	const interval = setInterval(() => {
		//Cada 3 segundo se ejecutará este código
		subs.next(cont++);
	}, 1000);

	setTimeout(() => {
		subs.complete();
	}, 2500);

	return () => {
		clearInterval(interval);
		console.log('[unsubscribe] Interval destroyed');
	};
});

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

subs1.add(subs2).add(subs3);

setTimeout(() => {
	subs1.unsubscribe();
	console.log('[log - setTimeout] -> completado timeout');
}, 3000);
