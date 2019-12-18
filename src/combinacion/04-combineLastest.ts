import { combineLatest, of, fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const letras$ = of('a', 'b', 'c', 'd');
const numeros$ = of(1, 2, 3, 4, 5);

combineLatest(letras$, numeros$).subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');
document.querySelector('body').append(input1, input2);

const getInputStream = (elem: HTMLElement) =>
	fromEvent<KeyboardEvent>(elem, 'keyup').pipe(pluck<KeyboardEvent, string>('target', 'value'));

combineLatest(getInputStream(input1), getInputStream(input2)).subscribe(console.log);
