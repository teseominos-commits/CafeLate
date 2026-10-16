import { FormEvent, useState } from 'react'
import { sendContact } from '../lib/sendContact'
import { LIMITS, validateContact, type ContactErrors } from '../lib/validation'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [errors, setErrors] = useState<ContactErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    // Hidden field that humans never fill: bots do. Pretend success and drop it.
    if (data.get('website')) {
      setStatus('sent')
      return
    }
    const input = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
    }
    const found = validateContact(input)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('sending')
    try {
      await sendContact(input)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p className="notice notice-ok" role="status">
        ¡Gracias! Hemos recibido tu mensaje y te responderemos pronto.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="form">
      <div className="field">
        <label htmlFor="name">Nombre</label>
        <input id="name" name="name" autoComplete="name" maxLength={LIMITS.name}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
        {errors.name && <span id="name-err" className="error">{errors.name}</span>}
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" maxLength={LIMITS.email}
          aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />
        {errors.email && <span id="email-err" className="error">{errors.email}</span>}
      </div>
      <div className="field">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" rows={5} maxLength={LIMITS.message}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
        {errors.message && <span id="message-err" className="error">{errors.message}</span>}
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">No rellenar</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="privacy">
        Usaremos tu nombre y email solo para responderte. Puedes pedirnos que los borremos cuando quieras.
      </p>
      {status === 'error' && (
        <p className="notice notice-err" role="alert">
          No hemos podido enviar tu mensaje. Inténtalo de nuevo en unos minutos.
        </p>
      )}
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
      </button>
    </form>
  )
}
