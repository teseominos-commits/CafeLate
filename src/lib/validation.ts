export interface ContactInput {
  name: string
  email: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactInput, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const LIMITS = { name: 80, email: 120, message: 1000 } as const

// Returns one error message per invalid field; an empty object means valid.
export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {}
  const name = input.name.trim()
  const email = input.email.trim()
  const message = input.message.trim()

  if (!name) errors.name = 'Escribe tu nombre.'
  else if (name.length > LIMITS.name) errors.name = `Máximo ${LIMITS.name} caracteres.`

  if (!email) errors.email = 'Escribe tu email.'
  else if (email.length > LIMITS.email || !EMAIL_RE.test(email)) errors.email = 'Revisa el email: parece incorrecto.'

  if (message.length < 10) errors.message = 'Cuéntanos algo más (mínimo 10 caracteres).'
  else if (message.length > LIMITS.message) errors.message = `Máximo ${LIMITS.message} caracteres.`

  return errors
}
