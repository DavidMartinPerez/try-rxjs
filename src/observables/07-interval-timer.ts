import { interval, timer } from 'rxjs';

const observerInterval = {
	next: (val) => console.log('Interval --> [next] -> ', val),
	complete: () => console.log('Interval --> [complete]')
};

const observerTimer = {
	next: (val) => console.log('Timer --> [next] -> ', val),
	complete: () => console.log('Timer --> [complete]')
};

const interval$ = interval(1000);
const timer$ = timer(2000);

console.log('init interval');
interval$.subscribe(observerInterval); // <- asyn
console.log('fin interval');

console.log('init timer');
timer$.subscribe(observerTimer); // <- asyn
console.log('fin timer');

const ahoraMas5 = new Date(); // ahora

ahoraMas5.setSeconds(ahoraMas5.getSeconds() + 5);

const timer5s$ = timer(ahoraMas5);

timer5s$.subscribe((next) => console.log('ahora son 5s más que hace 5s'));
