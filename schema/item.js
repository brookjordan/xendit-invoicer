module.exports = {
  create: `
    CREATE TABLE IF NOT EXISTS item(
      id SERIAL PRIMARY KEY,
      label VARCHAR(40) not null,
      price REAL not null,
      account INTEGER not null,
      timestamp TIMESTAMPTZ DEFAULT current_timestamp
    )
  `,

  drop: `
    DROP TABLE IF EXISTS item
  `,
};
