## Profundizando en Reactive X

### Observables
* observable
* unsubscribe
* add
* subject
* of
* fromEvent
* range
* timer
* interval
* asyncSheduler
* from

### Operadores
* map
* pluck
* mapTo
* filter
* tap
* reduce
* scan
* take
* first
    - Cuando ejecuta el primer next o el primero que cumple una condición, termina el observable.
* takeWhile
    - Ejecuta next de los obseravbles mientrás se cumpla una condición
* takeUntil
    - Completa el observable cuando el observable indicado como parametro emita su primer next
* Skip
    - Ignora el resto del código N veces
* Distinct
    - Solo emite los valores que no han sido antes emitidos, por lo cual los repetidos los elimina
* distinctUntilChanged
    - Solo emite los valores si el anterior emitido no es igual
* distinctUntilKeyChanged
    - Distinge si la key anterior a cambiado
* Encadenar operadores

### Ejemplos
* scrollbar -> [video](https://twitter.com/davililloperez/status/1206260294647001088)