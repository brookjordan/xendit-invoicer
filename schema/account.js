module.exports = {
  create: `
    CREATE TABLE IF NOT EXISTS account(
      id SERIAL PRIMARY KEY,
      label VARCHAR(60),
      username VARCHAR(60) UNIQUE not null,
      password VARCHAR(60) not null,
      balance REAL DEFAULT 0
    )
  `,

  drop: `
    DROP TABLE IF EXISTS account
  `,
};
