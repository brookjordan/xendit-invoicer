module.exports = function returnInvoiceData(request, response, next) {
  if (!request.user) {
    response.status(200);
    response.send([]);
    return;
  }

  if (request.params && request.params.id) {
    response.status(200);
    response.send({
      id: +request.params.id,
      label: "P00001",
      invoice: Math.ceil(Math.random() * 30),
    });
  } else {
    response.status(200);
    response.send([
      {
        id: 1,
        label: "P00001",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 2,
        label: "P00002",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 3,
        label: "P00003",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 4,
        label: "P00004",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 5,
        label: "P00005",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 6,
        label: "P00006",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 7,
        label: "P00007",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 8,
        label: "P00008",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 9,
        label: "P00009",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 10,
        label: "P00010",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 11,
        label: "P00011",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 12,
        label: "P00012",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 13,
        label: "P00013",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 14,
        label: "P00014",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 15,
        label: "P00015",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 16,
        label: "P00016",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 17,
        label: "P00017",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 18,
        label: "P00018",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 19,
        label: "P00019",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 20,
        label: "P00020",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 21,
        label: "P00021",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 22,
        label: "P00022",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 23,
        label: "P00023",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 24,
        label: "P00024",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 25,
        label: "P00025",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 26,
        label: "P00026",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 27,
        label: "P00027",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 28,
        label: "P00028",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 29,
        label: "P00029",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 30,
        label: "P00030",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 31,
        label: "P00031",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 32,
        label: "P00032",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 33,
        label: "P00033",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 34,
        label: "P00034",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 35,
        label: "P00035",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 36,
        label: "P00036",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 37,
        label: "P00037",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 38,
        label: "P00038",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 39,
        label: "P00039",
        invoice: Math.ceil(Math.random() * 30),
      },
    ]);
  }
};
