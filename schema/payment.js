module.exports = {
  create: `
    CREATE TABLE IF NOT EXISTS payment(
      id SERIAL PRIMARY KEY,
      label VARCHAR(40) not null,
      discount REAL DEFAULT 0,
      invoice INTEGER not null,
      timestamp TIMESTAMPTZ DEFAULT current_timestamp
    )
  `,

  drop: `
    DROP TABLE IF EXISTS payment
  `,
};
