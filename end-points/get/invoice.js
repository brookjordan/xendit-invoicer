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
      label: "I00001",
    });
  } else {
    let invoiceResponse = await DB.query(`
      SELECT id,label,discount,customer,merchant
      FROM invoice
      WHERE
        customer = ${request.user.id}
        OR merchant = ${request.user.id}
    `);
    response.status(200);
    response.send({
      invoices: invoiceResponse.rows,
    });
  }
};
