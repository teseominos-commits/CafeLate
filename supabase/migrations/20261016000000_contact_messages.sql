-- Contact form messages. The public site can only INSERT; nobody can read them from the web.
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 80),
  email text not null check (char_length(btrim(email)) between 3 and 120),
  message text not null check (char_length(btrim(message)) between 10 and 1000),
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

create policy "Anyone can send a message"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);

-- No select/update/delete policies: they are denied by default.
-- Messages are read from the Supabase dashboard (service role).
