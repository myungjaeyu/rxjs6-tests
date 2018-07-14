const { of } = require('rxjs')
const { switchMap, tap } = require('rxjs/operators')

module.exports = action$ => action$.pipe(
    switchMap (v => {

        console.log('switchMap outer', v)

        return of(
            {
                type: 'switchMap _' + v.type,
                payload: {
                    name: 'switchMap _' + v.payload.name
                }
            }
        )
    }),
    tap(v => console.log('switchMap inner : ', v)) // switchMap inner
)

/* @returns

switchMap outer { type: 'PONG', payload: { name: 'Myungjae Yu' } }

switchMap inner :  { type: 'switchMap _PONG', payload: { name: 'switchMap _Myungjae Yu' } }

{ type: 'switchMap _PONG', payload: { name: 'switchMap _Myungjae Yu' } }

*/