CREATE TABLE "leads" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"company" text,
	"product" text,
	"message" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
