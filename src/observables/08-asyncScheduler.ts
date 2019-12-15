import { asyncScheduler } from 'rxjs';

// setTimeout(() => {},3000);
// setInterval(() => {},3000);

// setTimeout creado con asyncSchedular
const hey = () => console.log('Hello World');
const heyByName = (name) => console.log(`Hello ${name}`);

asyncScheduler.schedule(heyByName, 1000, 'David');

// setInterval creado con asyncSchedular
const state = 0;
const subs = asyncScheduler.schedule(
	function(state) {
		console.log('[state] ->', state);

		this.schedule(state + 1, 1000);
	},
	3000,
	state
);

// setTimeout(() => {
// 	subs.unsubscribe();
// 	console.log('subs unsubscribe');
// }, 7000);

//Cancelamos el asynchedular interval con un asynchedular timeout

asyncScheduler.schedule(() => {
	subs.unsubscribe();
	console.log('subs unsubscribe');
}, 7000);
