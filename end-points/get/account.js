const DB = require("../../middleware/db.js");

module.exports = async function returnInvoiceData(request, response, next) {
  if (!request.user) {
    console.log("No user");
    response.status(200);
    response.send([]);
    return;
  }

  if (request.params && request.params.id) {
    console.log("Single ID");
    let accountData = await DB.query("SELECT id,password,name,email from account WHERE id=$1", [
      request.params.id,
    ]);
    response.status(200);
    response.send(
      {
        id: accountData.rows[0].id,
        name: accountData.rows[0].name,
        email: accountData.rows[0].email,
      }
    );
  } else {
    console.log("All accounts");
    let accountData = await DB.query("SELECT id,password,name,email from account");
    response.status(200);
    console.log(accountData.rows);
    response.send(
      accountData.rows.map(row => ({
        id: row.id,
        name: row.name,
        email: row.email,
      }))
    );
  }
};
