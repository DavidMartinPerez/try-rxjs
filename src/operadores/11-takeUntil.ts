import { fromEvent, interval } from 'rxjs';
import { tap, map, takeWhile, takeUntil } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Stop';

document.querySelector('body').append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent<MouseEvent>(button, 'click');

counter$.pipe(
    takeUntil( clickBtn$ ) // Al recibir el primer next del clickBtn$ se completara el observable counter$
)
.subscribe({
	next: (val) => console.log('[counter][next] ->', val),
	complete: () => console.log('[counter][complete]')
});