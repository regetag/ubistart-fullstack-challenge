CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  id uuid primary KEY default(uuid_generate_v4()),
  email varchar not null,
  password varchar not null,
  created_at timestamp default(now()),
  updated_at timestamp default(current_timestamp)
);

create table to_dos(
  id uuid primary KEY default(uuid_generate_v4()),
  title varchar(50) not null,
  description varchar(200) null,
  
  deadline_at timestamp null,
  completed_at timestamp null,
  created_at timestamp default(now()),
  updated_at timestamp default(current_timestamp),
  
  user_id uuid not null,
  constraint fk_user_id foreign key(user_id) references users(id)
);