import { from } from 'rxjs';
import { scan, reduce, map } from 'rxjs/operators';

// Reduce con vanile JS
const numbers = [1,2,3,4,5];

const acumulator = (acc: number, curr: number) => acc + curr;

// reduce
from( numbers )
    .pipe(
        reduce( acumulator, 0 )
    )
    .subscribe(val => console.log(`[reduce] -> ${val}`))


// scan
from( numbers )
    .pipe(
        scan( acumulator, 0 )
    )
    .subscribe(val => console.log(`[scan] -> ${val}`))


// Ejemplo Redux con scan
interface User {
	id?: string;
	token?: string;
	age?: number;
}
const users: User[] = [
	{ id: 'dmartinp', token: '2134asd1', age: 22 },
	{ id: 'dleong', token: null, age: 30 },
	{ id: 'ocvalente', token: 'exsafr1122', age: 25 }
];

const state$ = from(users).pipe(
	scan<User, User>(
		(acc, cur) => {
			return {
				...acc,
				...cur
			};
		},
		{ age: 33 }
	)
);

const id$ = state$.pipe(
    map( state => state )
);

id$.subscribe( console.log );