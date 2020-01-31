const express = require("express");
const getSchemaItems = require("./middleware/get-schema-items.js");

const app = express();

app.get("/schema",
  getSchemaItems,
  async (request, response, next) => {
    let schemaItems = request.schemaItems;
    response.status(200);
    response.send(schemaItems.map(item => ({
      name: item.split(".")[0],
    })));
  },
);

app.listen(3000, () => {
  console.log("Started on PORT 3000");
});
