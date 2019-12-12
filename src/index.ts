import { Observable } from 'rxjs';

const obs$ = new Observable<string>( subs => {

    subs.next( 'Hoola!' );

    subs.complete();

    subs.next('Este next no va a tener efecto porque el observable se completo');

});

obs$.subscribe( console.log );