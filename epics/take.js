const { take } = require('rxjs/operators')

module.exports = action$ => action$.pipe(
    take(1)
)

/* @returns

{ type: 'PONG', payload: { name: 'Myungjae Yu' } }

*/