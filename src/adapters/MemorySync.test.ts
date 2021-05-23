import test from 'ava'

import { MemorySync } from './MemorySync'

test('should read and write', (t) => {
  const obj = { a: 1 }

  const memory = new MemorySync()

  // Null by default
  t.is(memory.read(), null)

  // Write obj
  t.is(memory.write(obj), undefined)

  // Read obj
  t.deepEqual(memory.read(), obj)
})
