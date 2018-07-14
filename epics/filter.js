const { filter } = require('rxjs/operators')

module.exports = action$ => action$.pipe(
    filter(v => v.payload.name === 'Myungjae Yu')
)

/* @returns

{ type: 'PONG', payload: { name: 'Myungjae Yu' } }

*/