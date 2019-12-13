import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]', value),
    error: err => console.warn('[error]', err),
    complete: () => console.info('[complete]')
};

let cont = 0;
const interval$ = new Observable<number>( subs => {
    //Creamos un contador que emitirá números cada 3s


    const interval = setInterval(() => {
        //Cada 3 segundo se ejecutará este código
        subs.next( cont++ );
    }, 3000);

    //Retornamos una función que se ejecutará cuando se haga unsubscribe de la subscripcion
    return () => {
        clearInterval( interval );
        console.log('[unsubscribe]Interval destroy')
    }

});

const subs1 = interval$.subscribe( num => console.log( 'Num:', num ));

//Fuga de memoria
const subs2 = interval$.subscribe( num => console.log( 'Num:', num ));
const subs3 = interval$.subscribe( num => console.log( 'Num:', num ));

setTimeout( () => {
    //Fuga de memoria aunque hagamos unsubscribe vemos que sigue ejecutandose ese setInterval
    //Esto crea grande huecos de performace.
    //NOTE: Para solucionar esto retornamos una función que destruirá el intervalo de la subscribe
    subs1.unsubscribe();
    console.log('log -> subs1 unsubscribe')
}, 3000 );

/*
###### CONSOLE #########


EJEMPLO SI NO ESTUVIERAMOS RETORNANDO UNA FUNCION EN LA SUBSCRIPCIÓN EN LA QUE ELIMINA EL INTERVAL.
ESTO HARÁ QUE SE SIGA EJECUTANDO EL INTERVAL DE LA PRIMERA SUBSCRICIÓN

// Num: 0 <- subs1
// Num: 1 <- subs2
// Num: 2 <- subs3
    //NOTE: hacemos unsubscribe del primer subs.
// log -> subs1 unsubscribe
    - subs1
// Num: 4 <- subs2
// Num: 5 <- subs3
    - subs1
// Num: 7 <- subs2
// Num: 8 <- subs3
    - subs1
// Num: 10 <- subs2
// Num: 11 <- subs3


EJEMPLO ELIMINANDO EL INTERVAL en el retorno del Observer:
// Num: 0 <- subs1
// Num: 1 <- subs2
// Num: 2 <- subs3
// [unsubscribe]Interval destroy
// log -> subs1 unsubscribe
// Num: 3 <- subs2
// Num: 4 <- subs3
// Num: 5 <- subs2
// Num: 6 <- subs3
// Num: 7 <- subs2
// Num: 8 <- subs3

*/