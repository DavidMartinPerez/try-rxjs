import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/dzzelay/2';
const catchErrorCustom = (resp: AjaxError) => {
	console.warn('error:', resp.message);
	return of({
		ok: false
	});
};

const obs$ = ajax.getJSON(url, {
	'Content-Type': 'application/json',
	'mi-token': 'asdkfykksdaasd234'
});

obs$.subscribe(
    (data) => console.info( '[next] ->', data ),
    (err) => console.warn( '[error] -> ', err),
    () => console.log('[Complete]'));
