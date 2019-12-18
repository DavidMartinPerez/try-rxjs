import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// Helper
const url = 'https://reqres.in/api/login?delay=1';
const httpLogin = (login) => {
	return ajax.post(url, login).pipe(
		pluck('response', 'token'),
		catchError( err => of(null) )
	);
};

// creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

inputEmail.type = 'email';
inputEmail.placeholder = 'email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);

const body = document.querySelector('body');
body.append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
	tap((ev) => ev.preventDefault()),
	map((ev) => ({
		email: ev.target[0].value,
		password: ev.target[1].value
	})),
	//mergeMap( httpLogin ) // se repiten las peticiones cada vez que pulse submit
	switchMap( httpLogin ) // Cancela las peticiones anteriores siempre que se pulse el boton submit y solo envia la ultima
	//exhaustMap( httpLogin ) //Cuando envia el submit deja de esccuhar las demás emisiones hasta que este termine
);

submitForm$.subscribe((token) => console.log(token));
