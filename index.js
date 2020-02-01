require("dotenv").config();

const port = process.env.PORT || 5000;
const express = require("express");
const bodyParser = require("body-parser")

const setCORSPolicy = require("./middleware/set-cors-policy.js")
const getSchemaItems = require("./middleware/get-schema-items.js");

const getInvoices = require("./end-points/get/invoice.js");
const getInvoiceLines = require("./end-points/get/invoice_line.js");

const postAccount = require("./end-points/post/account.js");

const app = express();
const jsonParser = bodyParser.json()

app.use(setCORSPolicy);

app.get("/",
  getSchemaItems,
  async (request, response, next) => {
    let schemaItems = request.schemaItems;
    response.status(200);
    response.send({
      version: "1.0.0-alpha.1",
      availableEndPoints: schemaItems.map(item => ({
        name: item.split(".")[0],
      }))
    });
  },
);

app.get("/invoice",
  getSchemaItems,
  getInvoices,
);

app.post("/account",
  getSchemaItems,
  jsonParser,
  postAccount,
);

app.get("/invoice_line",
  getSchemaItems,
  getInvoiceLines,
);

app.listen(port, () => {
  console.log(`Started on PORT ${port}`);
});
