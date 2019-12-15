import { pipe, fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

// const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
//     map((e) => e.key)
// );

//Pluck recoge la key del objeto que se pasa por el pipe
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
	pluck('key')
);

const keyupTaget$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
	pluck('target', 'baseURI')
);


keyup$.subscribe(console.log);
keyupTaget$.subscribe(console.log);