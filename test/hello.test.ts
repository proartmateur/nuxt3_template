// @vitest-environment jsdom
import { describe, test, expect } from 'vitest'
describe('My test', () => {
  test('my test', () => {
    // ...
    const a = 1
    expect(1).eq(a)
  })
})
