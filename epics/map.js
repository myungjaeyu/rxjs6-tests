const { map } = require('rxjs/operators')

module.exports = action$ => action$.pipe(
    map(v => v.payload)
)

/* @returns

{ name: 'Myungjae Yu' }

*/