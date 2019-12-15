import { pipe, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

//Mapto transforma el valor recibido en otro
const keyupMapTo$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
	mapTo<KeyboardEvent, string>('key')
);

keyupMapTo$.subscribe(console.log)