create table if not exists public.learner_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  progress jsonb not null default '{"activeCourse":0,"courses":{}}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.learner_progress enable row level security;

drop policy if exists "Learners can read own progress" on public.learner_progress;
create policy "Learners can read own progress"
on public.learner_progress
for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "Learners can insert own progress" on public.learner_progress;
create policy "Learners can insert own progress"
on public.learner_progress
for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "Learners can update own progress" on public.learner_progress;
create policy "Learners can update own progress"
on public.learner_progress
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());
