import test from 'ava'
import random from './'

test('main', t => {
  const ret1 = random()
  const ret2 = random({count: 2})
  t.is(ret1.length, 1)
  t.is(ret2.length, 2)
})
