import { ajax } from 'rxjs/ajax';
import { Observer } from 'rxjs';
import { pluck } from 'rxjs/operators';

const observer: Observer<{}> = {
	next: (data) => console.info('[next] ->', data),
	error: (err) => console.warn('[error] -> ', err),
	complete: () => console.log('[Complete]')
};

const url = 'https://httpbin.org/delay/1';
const HEADERS = {
	'Content-Type': 'application/json',
	'mi-token': 'asdkfykksdaasd234'
};

// ajax.post(
// 		url,
// 		{
// 			id: 1,
// 			name: 'David'
// 		},
// 		HEADERS
// 	)
// 	.pipe(pluck('request'))
// 	.subscribe(observer);

ajax({
	url,
	method: 'POST',
	headers: HEADERS,
	body: {
		id: 1,
		name: 'David'
	}
})
.pipe(pluck('request'))
.subscribe(observer);
