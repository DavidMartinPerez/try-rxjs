import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LOREM } from '../const';

//Creamos el texto lorem y se lo añadimos al body
const text = document.createElement('div');
text.innerHTML = LOREM;

const body = document.querySelector('body');
body.append( text );

//Creamos el progressbar y se lo añadimos al body
const progressBar = document.createElement('div');
progressBar.setAttribute( 'class', 'progress-bar' );

body.append( progressBar );

const calculateScroll = ( event ) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;

    return ( scrollTop / ( scrollHeight - clientHeight) ) * 100;
};

//Streams
const scroll$ = fromEvent( document, 'scroll');

const progress$ = scroll$.pipe(
    map( calculateScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {

    progressBar.style.width = `${porcentaje}%`;

});

