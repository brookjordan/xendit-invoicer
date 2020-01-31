require("dotenv").config();

const port = process.env.PORT || 5000;
const express = require("express");
const getSchemaItems = require("./middleware/get-schema-items.js");
const setAllowedOriginHeaders = require("./middleware/set-allowed-origin-headers.js");

const invoices = require("./end-points/invoice.js");
const invoiceLines = require("./end-points/invoice_line.js");

const app = express();

app.get("/schema",
  setAllowedOriginHeaders,
  getSchemaItems,
  async (request, response, next) => {
    let schemaItems = request.schemaItems;
    response.status(200);
    response.send(schemaItems.map(item => ({
      name: item.split(".")[0],
    })));
  },
);

app.get("/invoice",
  setAllowedOriginHeaders,
  getSchemaItems,
  invoices,
);

app.get("/invoice_line",
  setAllowedOriginHeaders,
  getSchemaItems,
  invoiceLines,
);

app.listen(port, () => {
  console.log(`Started on PORT ${port}`);
});
