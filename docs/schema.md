# Schema Information

## jobs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
location    | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
jobType_id | integer   | not null, foreign key (references jobTypes), indexed
archived    | boolean   | not null, default: false

## jobTypes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
job_id     | integer   | not null, foreign key (references jobs), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
company_name    | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
