module.exports = function returnInvoiceData(request, response, next) {
  response.status(200);
  if (!request.user) {
    response.send([]);
    return;
  }
  response.send([
    ...Array.from({ length: Math.ceil(Math.pow(Math.random() * 2, 3)) }, (item, i) => ({
      id: i,
      quantity: Math.ceil(Math.pow(Math.random() * 2, 3)),
      item: {
        label: `Item ${Math.round(Math.random() * 30)}`,
        price: `$${(Math.round(Math.random() * 100) / 10).toFixed(2)}`,
      },
    }))
  ]);
};
