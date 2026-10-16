import type { ContactInput } from './validation'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

// Inserts the message through Supabase's REST API. The table only allows inserts (RLS).
export async function sendContact(input: ContactInput): Promise<void> {
  if (!url || !key) throw new Error('El formulario aún no está configurado.')
  const res = await fetch(`${url}/rest/v1/contact_messages`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      name: input.name.trim(),
      email: input.email.trim(),
      message: input.message.trim(),
    }),
  })
  if (!res.ok) throw new Error('No se pudo enviar el mensaje.')
}
