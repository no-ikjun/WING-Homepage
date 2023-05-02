drop table if exists "members";

create table "members" (
  "id" int(10) not null auto_increment,
  "name" varchar(255) not null,
  "email" varchar(255) not null,
  "skill" text,
  "role" varchar(50) not null,
  "link" text,
  "team" varchar(50) not null,
  primary_key ("id")
);