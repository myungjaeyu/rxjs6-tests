const { of } = require('rxjs')
const { mergeMap, tap } = require('rxjs/operators')

module.exports = action$ => action$.pipe(
    mergeMap(v => {

        console.log('mergeMap outer', v)

        return of(
            {
                type: 'mergeMap_' + v.type,
                payload: {
                    name: 'mergeMap_' + v.payload.name
                }
            }
        )
    }),
    tap(v => console.log('mergeMap inner : ', v)) // mergeMap inner
)

/* @returns

mergeMap outer { type: 'PONG', payload: { name: 'Myungjae Yu' } }

mergeMap inner :  { type: 'mergeMap_PONG', payload: { name: 'mergeMap_Myungjae Yu' } }

{ type: 'mergeMap_PONG', payload: { name: 'mergeMap_Myungjae Yu' } }

*/