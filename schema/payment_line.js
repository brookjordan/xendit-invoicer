module.exports = {
  create: `
    CREATE TABLE IF NOT EXISTS payment_line(
      id SERIAL PRIMARY KEY,
      payment INTEGER not null,
      item INTEGER not null,
      quantity INTEGER not null
    )
  `,

  drop: `
    DROP TABLE IF EXISTS payment_line
  `,
};
