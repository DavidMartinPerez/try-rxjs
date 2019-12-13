import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]', value),
    error: err => console.warn('[error]', err),
    complete: () => console.info('[complete]')
};

const obs$ = new Observable<string>( subs => {

    subs.next( 'Hoola!' );
    subs.next( 'Mundo!' );

    //Error
    // const a = undefined;
    // a.name = 'Error name of undefined';

    subs.complete();

    subs.next('Este next no va a tener efecto porque el observable se completo');

});

obs$.subscribe( observer );

// obs$.subscribe(
//     value => console.log('next', value),
//     err => console.warn('error', err),
//     () => console.log('complete')
// );