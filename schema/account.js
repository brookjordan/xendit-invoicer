module.exports = {
  create: `
    CREATE TABLE IF NOT EXISTS account(
      id SERIAL PRIMARY KEY,
      label VARCHAR(40),
      usename VARCHAR(40) not null,
      password VARCHAR(40) not null,
      balance REAL DEFAULT 0
    )
  `,

  drop: `
    DROP TABLE IF EXISTS account
  `,
};
