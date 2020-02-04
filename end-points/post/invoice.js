const DB = require("../../middleware/db.js");
const { hashPassword } = require("../../middleware/hash-password.js");

const invoiceQueryString = "INSERT INTO invoice(label, merchant, customer, discount) VALUES($1, $2, $3, $4)";
const invoiceLineQueryStringBase = "INSERT INTO invoice_line(invoice, item, quantity)";
const lastItemQueryString = `
  SELECT timestamp, id
  FROM invoice
  ORDER BY timestamp DESC
  LIMIT 1
`;

function sendError(type, message, response) {
  response.status(type);
  response.send(JSON.stringify({
    error: message,
  }));
}

module.exports = async function(request, response, next) {
  const { body } = request;
  if (!body) { return sendError(400, "Requires body", response) }

  let lastItem = await DB.query(lastItemQueryString);
  let invoiceID = lastItem.rows[0]
    ? (+lastItem.rows[0].id + 1)
    : 1;

  try {
    let insertResponse = await DB.query(invoiceQueryString, [
      `I${invoiceID}`,
      body.merchant,
      "1",
      null
    ]);
  } catch (error) {
    console.log(error);
    return sendError(500, "Invoice item insertion failed", response);
  }

  let insertQueryParams = body.lines.map((_, i) => `($${i * 3 + 1}, $${i * 3 + 2}, $${i * 3 + 3})`).join(", ");
  let queryString = `${invoiceLineQueryStringBase} VALUES ${insertQueryParams}`;
  let queryValues = body.lines.flatMap(line => [invoiceID, line.item, line.quantity]);

  // TODO: implement checks
  try {
    let insertResponse = await DB.query(queryString, queryValues);
  } catch (error) {
    console.log(error);
    return sendError(500, "Invoice item insertion failed", response);
  }

  response.status(200);
  response.send(JSON.stringify({
    id: invoiceID,
    merchant: body.merchant,
    customer: "1",
    discount: null,
    lines: body.lines.map(line => ({
      invoice: invoiceID,
      item: line.item,
      quantity: line.quantity,
    })),
  }));
}
