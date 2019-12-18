import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'davidmartinperez';

forkJoin({
    user: ajax.getJSON( `${GITHUB_API_URL}/${GITHUB_USER}` ).pipe(
        catchError( err => of(null) )
    ),
    repos: ajax.getJSON( `${GITHUB_API_URL}/${GITHUB_USER}/repos` ).pipe(
        catchError( err => of(null) )
    ),
    gists: ajax.getJSON( `${GITHUB_API_URL}/${GITHUB_USER}/gistss` ).pipe(
        catchError( err => of(null) )
    ),
}).subscribe(console.log);
