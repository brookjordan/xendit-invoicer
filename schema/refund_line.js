module.exports = {
  create: `
    CREATE TABLE IF NOT EXISTS refund_line(
      id SERIAL PRIMARY KEY,
      refund INTEGER not null,
      item INTEGER not null,
      quantity INTEGER not null
    )
  `,

  drop: `
    DROP TABLE IF EXISTS refund_line
  `,
};
