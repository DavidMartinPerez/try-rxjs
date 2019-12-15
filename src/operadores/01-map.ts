import { range, pipe, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

range(1, 5).pipe(
    map<number, string>((x) => `${x * 10}`)
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map((e) => e.key)
);

keyup$.subscribe(console.log);
