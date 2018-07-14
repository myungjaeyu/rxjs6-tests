const { of } = require('rxjs')
const { mergeMap, catchError } = require('rxjs/operators')

module.exports = action$ => action$.pipe(
    mergeMap(v => v),
    catchError(err => of(
        {
            type: 'error ^_^',
            payload: {}
        }
    ))
)

/* @returns

{ type: 'error ^_^', payload: {} }

*/