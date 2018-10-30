const test = require('ava')
const R = require('rambda')


const action$ = require('./index')


R.forEach(v =>
    test(`${ v } Epic`, t => 
        require(`./epics/${ v }`)
        (action$).subscribe(e => t.pass())))([
                                                'tap',
                                                'map',
                                                'filter',
                                                'scan',
                                                'take',
                                                'concat', 
                                                'mergeMap',
                                                'switchMap',
                                                'catchError',
                                                'retry'])


test.cb('delay Epic', t => require(`./epics/delay`)
                            (action$).subscribe(e => (
                                            console.log('[delay 3sec] ',e),
                                            t.pass(),
                                            t.end()
                                        )
                                    ))


// https://github.com/avajs/ava#observable-support



const scanEpic = require('./epics/scan')
const mergeMapEpic = require('./epics/mergeMap')
const catchError = require('./epics/catchError')

test('scan Epic 2', t => 
    scanEpic(action$)
        .subscribe(e => (
                t.true(R.is(Object, e)),
                t.true(R.has('name', e)),
                t.true(R.is(String, e.name)),
                t.true(R.equals(e, { name: 'Myungjae Yu' }))
            )
        ))

test('mergeMap Epic 2', t => 
    mergeMapEpic(action$)
        .subscribe(e => (
                t.true(R.is(Object, e)),
                t.true(R.has('type', e)),
                t.true(R.is(String, e.type)),
                t.true(R.has('payload', e)),
                t.true(R.is(Object, e.payload)),
                t.true(R.has('name', e.payload)),
                t.true(R.is(String, e.payload.name)),
                t.true(R.equals(e.type, 'mergeMap_PONG')),
                t.true(R.equals(e.payload, { name: 'mergeMap_Myungjae Yu' })),
                t.true(R.equals(e, { type: 'mergeMap_PONG', payload: { name: 'mergeMap_Myungjae Yu' } }))
            )
        ))

test('catchError Epic 2', t =>
    catchError(action$)
        .subscribe(e => (
                t.true(R.is(Object, e)),
                t.true(R.has('type', e)),
                t.true(R.is(String, e.type)),
                t.true(R.has('payload', e)),
                t.true(R.is(Object, e.payload)),
                t.true(R.equals(e.type, 'error ^_^'))
            )
        ))