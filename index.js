const { of } = require('rxjs')

module.exports = of({
    type: 'PONG',
    payload: {
        name: 'Myungjae Yu'
    }
})