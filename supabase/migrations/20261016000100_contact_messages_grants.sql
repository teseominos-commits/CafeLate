-- Defense in depth: besides RLS, the public roles may only INSERT.
revoke all on public.contact_messages from anon, authenticated;
grant insert on public.contact_messages to anon, authenticated;
