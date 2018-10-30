const { concat, tap } = require('rxjs/operators')

module.exports = action$ => action$.pipe(
    concat(action$, action$, action$),
    tap(v => console.log('concat tap : ', v))
)

/* @returns

concat tap :  { type: 'PONG', payload: { name: 'Myungjae Yu' } }

concat tap :  { type: 'PONG', payload: { name: 'Myungjae Yu' } }

concat tap :  { type: 'PONG', payload: { name: 'Myungjae Yu' } }

*/