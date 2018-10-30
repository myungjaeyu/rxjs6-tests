const { tap } = require('rxjs/operators')

module.exports = action$ => action$.pipe(
    tap(v => console.log('tap :', v))
)

/* @returns

tap : { type: 'PONG', payload: { name: 'Myungjae Yu' } }

*/