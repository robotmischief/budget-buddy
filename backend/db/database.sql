/*
* Database Structure
*/
CREATE DATABASE budbuddb;

CREATE TABLE "records" (
  "record_id" SERIAL PRIMARY KEY,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "user_id" int NOT NULL,
  "type_id" int NOT NULL,
  "amount" float NOT NULL,
  "category_id" int,
  "description" varchar(255)
);

CREATE TABLE "users" (
  "user_id" SERIAL PRIMARY KEY,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "name" varchar(255) NOT NULL,
  "password" TEXT NOT NULL, -- TODO: Module / salt password (SQL PASSWORD type not working with postgres?)
  "email" varchar(255) UNIQUE NOT NULL -- TODO: validate emails (email data type not working on postgres?) 
);

CREATE TABLE "types" (
  "type_id" SERIAL PRIMARY KEY,
  "label" varchar(255) UNIQUE NOT NULL
);


CREATE TABLE "categories" (
  "category_id" SERIAL PRIMARY KEY,
  "label" varchar(255) UNIQUE NOT NULL
);

ALTER TABLE "records" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "records" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("category_id");

ALTER TABLE "records" ADD FOREIGN KEY ("type_id") REFERENCES "types" ("type_id");

--dummy user for testing
CREATE USER demo WITH PASSWORD 'demo';
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO demo;
INSERT INTO users (name, password, email) VALUES ('demo', 'demo', 'demo@demo.com');

--must have types to record
INSERT INTO types (type_id, label) VALUES (1, 'INCOME');
INSERT INTO types (type_id, label) VALUES (2, 'EXPENSE');