-- Create profiles table
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  full_name text,
  avatar_url text,
  role text check (role in ('admin', 'member', 'user')) default 'user',
  
  constraint username_length check (char_length(full_name) >= 3)
);

-- Create posts table
create table posts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  slug text not null unique,
  content text,
  cover_image text,
  published boolean default false,
  author_id uuid references profiles(id) on delete set null
);

-- Create leads table
create table leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text not null,
  source text check (source in ('newsletter', 'waitlist')) default 'waitlist',
  status text default 'new'
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;
alter table posts enable row level security;
alter table leads enable row level security;

-- Policies
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

create policy "Published posts are viewable by everyone."
  on posts for select
  using ( published = true );

create policy "Admins can do everything with posts."
  on posts for all
  using ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

create policy "Admins can view leads."
  on leads for select
  using ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

create policy "Anyone can insert leads."
  on leads for insert
  with check ( true );
