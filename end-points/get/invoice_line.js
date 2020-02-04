const DB = require("../../middleware/db.js");

module.exports = async function returnInvoiceData(request, response, next) {
  if (!request.user) {
    response.status(200);
    response.send([]);
    return;
  }
  if (request.params && request.params.id) {
    response.status(200);
    response.send({
      id: +request.params.id,
      quantity: Math.ceil(Math.pow(Math.random() * 2, 3)),
      item_id: Math.ceil(Math.random() * 30),
    });
  } else if (request.params && request.params.invoice_id) {
    let invoiceLineResponse = await DB.query(`
      SELECT id,invoice,item,quantity
      FROM invoice_line
      WHERE invoice = ${request.params.invoice_id}
    `);

    response.status(200);
    response.send({
      invoiceLines: invoiceLineResponse.rows.map(lineData => ({
        id: lineData.id,
        quantity: lineData.quantity,
        item_id: lineData.item,
      })),
    });
  } else {
    response.status(200);
    response.send({
      invoiceLines: Array.from({ length: 200 }, (item, i) => ({
        id: i + 1,
        quantity: Math.ceil(Math.pow(Math.random() * 2, 3)),
        item_id: Math.ceil(Math.random() * 30),
      })),
    });
  }
};
