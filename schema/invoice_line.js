module.exports = {
  create: `
    CREATE TABLE IF NOT EXISTS invoice_line(
      id SERIAL PRIMARY KEY,
      invoice INTEGER not null,
      item INTEGER not null,
      quantity INTEGER not null
    )
  `,

  drop: `
    DROP TABLE IF EXISTS invoice_line
  `,
};
