-- Create gallery_items table
create table gallery_items (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  before_image_url text not null,
  after_image_url text not null,
  published boolean default true
);

-- Set up Row Level Security (RLS)
alter table gallery_items enable row level security;

-- Policies
create policy "Public gallery is viewable by everyone."
  on gallery_items for select
  using ( published = true );

create policy "Admins can do everything with gallery."
  on gallery_items for all
  using ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );
