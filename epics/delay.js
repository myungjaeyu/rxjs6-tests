const { delay } = require('rxjs/operators')

module.exports = action$ => action$.pipe(
    delay(3000)
)

/* @returns

[delay 3sec]  { type: 'PONG', payload: { name: 'Myungjae Yu' } }

*/