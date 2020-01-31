module.exports = {
  create: `
    CREATE TABLE IF NOT EXISTS refund(
      id SERIAL PRIMARY KEY,
      label VARCHAR(40) not null,
      discount REAL DEFAULT 0,
      invoice INTEGER not null
    )
  `,

  drop: `
    DROP TABLE IF EXISTS refund
  `,
};
