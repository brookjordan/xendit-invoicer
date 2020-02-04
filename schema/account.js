module.exports = {
  create: `
    CREATE TABLE IF NOT EXISTS account(
      id SERIAL PRIMARY KEY,
      name VARCHAR(60),
      email VARCHAR(60) UNIQUE not null,
      password VARCHAR(60) not null,
      balance REAL DEFAULT 0,
      timestamp TIMESTAMPTZ DEFAULT current_timestamp
    )
  `,

  drop: `
    DROP TABLE IF EXISTS account
  `,
};
