import test from 'ava'
import add from '../src/index.js'

test('my passing test', (t) => {
  t.deepEqual(add(1, 1), 2)
})
