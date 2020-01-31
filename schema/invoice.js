module.exports = {
  create: `
    CREATE TABLE IF NOT EXISTS invoice(
      id SERIAL PRIMARY KEY,
      label VARCHAR(40) not null,
      discount REAL DEFAULT 0,
      customer INTEGER not null,
      merchant INTEGER not null
    )
  `,

  drop: `
    DROP TABLE IF EXISTS invoice
  `,
};
