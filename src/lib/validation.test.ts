import { describe, expect, it } from 'vitest'
import { validateContact } from './validation'

const ok = { name: 'Ana', email: 'ana@example.com', message: 'Hola, quiero reservar mesa.' }

describe('validateContact', () => {
  it('accepts valid input', () => {
    expect(validateContact(ok)).toEqual({})
  })
  it('requires name, email and message', () => {
    const e = validateContact({ name: ' ', email: '', message: '' })
    expect(Object.keys(e).sort()).toEqual(['email', 'message', 'name'])
  })
  it('rejects malformed emails', () => {
    expect(validateContact({ ...ok, email: 'ana@' }).email).toBeDefined()
    expect(validateContact({ ...ok, email: 'ana example@x.com' }).email).toBeDefined()
  })
  it('rejects too short and too long messages', () => {
    expect(validateContact({ ...ok, message: 'hola' }).message).toBeDefined()
    expect(validateContact({ ...ok, message: 'x'.repeat(1001) }).message).toBeDefined()
  })
  it('rejects a too long name', () => {
    expect(validateContact({ ...ok, name: 'a'.repeat(81) }).name).toBeDefined()
  })
})
