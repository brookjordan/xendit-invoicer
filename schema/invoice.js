module.exports = {
  create: `
    CREATE TABLE IF NOT EXISTS invoice(
      id SERIAL PRIMARY KEY,
      label VARCHAR(40),
      discount REAL DEFAULT 0,
      customer INTEGER not null,
      merchant INTEGER not null,
      timestamp TIMESTAMPTZ DEFAULT current_timestamp
    )
  `,

  drop: `
    DROP TABLE IF EXISTS invoice
  `,
};
