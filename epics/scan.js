const { scan } = require('rxjs/operators')

module.exports = action$ => action$.pipe(
    scan( (v, curr) => Object.assign(v, { name : curr.payload.name }), { name : '' })
)

/* @returns

{ name: 'Myungjae Yu' }

*/