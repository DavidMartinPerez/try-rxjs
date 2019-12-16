import { ajax } from 'rxjs/ajax';
import { Observer } from 'rxjs';

const observer: Observer<{}> = {
	next: (data) => console.info('[next] ->', data),
	error: (err) => console.warn('[error] -> ', err),
	complete: () => console.log('[Complete]')
};

const url = 'https://httpbin.org/dzzelay/2';
const HEADERS = {
	'Content-Type': 'application/json',
	'mi-token': 'asdkfykksdaasd234'
};

const obs$ = ajax.getJSON(url, HEADERS);

obs$.subscribe(observer);
