require("dotenv").config();

const { Client } = require("pg");

const DB = new Client();

async function runSchema(func = "create") {
  await DB.connect();

  await DB.query(`
    CREATE TABLE IF NOT EXISTS session(
      "sid" varchar NOT NULL COLLATE "default",
      "sess" json NOT NULL,
      "expire" timestamp(6) NOT NULL
    )
    WITH (OIDS=FALSE);
  `);

  await DB.query(`
    ALTER TABLE "session"
      ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
  `);

  await DB.query(`
    CREATE INDEX "IDX_session_expire" ON "session" ("expire");
  `);

  await DB.end();
}

runSchema();
