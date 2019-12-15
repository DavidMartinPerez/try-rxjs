import { fromEvent, interval } from 'rxjs';
import { tap, takeUntil, skip } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Stop';

document.querySelector('body').append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent<MouseEvent>(button, 'click').pipe(
    tap( () => console.log('[tap] antes skip') ),
    skip(1), // Ignora X veces todo el resto del código
    tap( () => console.log('[tap] despues skip') )
);

counter$.pipe(
    takeUntil( clickBtn$ )
)
.subscribe({
	next: (val) => console.log('[counter][next] ->', val),
	complete: () => console.log('[counter][complete]')
});