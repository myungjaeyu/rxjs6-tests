const { of } = require('rxjs')
const { mergeMap, catchError, retry } = require('rxjs/operators')

module.exports = action$ => action$.pipe(
    mergeMap(v => {
        console.log('retry Error')
    }),
    retry(3),
    catchError(err => of(
        {
            type: 'retry error ^_^',
            payload: {}
        }
    )),
)

/* @returns

retry Error
retry Error
retry Error
retry Error

{ type: 'retry error ^_^', payload: {} }

*/