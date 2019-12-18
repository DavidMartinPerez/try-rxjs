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
* debounceTime
    - Descarta los valores emitidos que tardan menos del tiempo especificado entre salidas.
* throttleTime
    - Emite el primer valor y luego ignorar durante la duración especificada y vuelve a emitirlo.
* sampleTime
    - Emite cada X tiempo el ultimo valor emitido por el obseravble
* sample
    - Emite el valor del observable cuando se emite el observable indicado.
* auditTime
    - Desde la primera siguiente emisión del observable hace una espera de X segundos y emite el último valor emitido durante esos X segundos.
* Encadenar operadores

### AJAX
* ajax
* catchError
* getJson
* method http

### Transformadores
( son observables de aplanamiento )
* mergeAll
    - Convierte todas las emisiones de observables interiores en un observable y lo emite
* mergeMap
    - Emite cada valor de origen en un Observable que se fusiona en el Observable de salida
* switchMap
    - Emite observables fusionado en la salida, solo emite el valor más reciente cancelando todos los demás
* concatMap
    - Concatena todos los observables creando una cola que se ejecutarán por orden al terminar el observable anterior.
* exhaustMap
    - Ignora todos los observables emitidos mientrás este activo el observable actual.

### asd
* startWith
    - Emite por primer valor.
* endWith
    - Emite por ultimo valor.

### Ejemplos
* scrollbar -> [video](https://twitter.com/davililloperez/status/1206260294647001088)
