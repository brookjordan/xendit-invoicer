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
      label: "R00001",
      invoice: Math.ceil(Math.random() * 30),
    });
  } else {
    response.status(200);
    response.send([
      {
        id: 1,
        label: "R00001",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 2,
        label: "R00002",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 3,
        label: "R00003",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 4,
        label: "R00004",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 5,
        label: "R00005",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 6,
        label: "R00006",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 7,
        label: "R00007",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 8,
        label: "R00008",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 9,
        label: "R00009",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 10,
        label: "R00010",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 11,
        label: "R00011",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 12,
        label: "R00012",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 13,
        label: "R00013",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 14,
        label: "R00014",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 15,
        label: "R00015",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 16,
        label: "R00016",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 17,
        label: "R00017",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 18,
        label: "R00018",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 19,
        label: "R00019",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 20,
        label: "R00020",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 21,
        label: "R00021",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 22,
        label: "R00022",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 23,
        label: "R00023",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 24,
        label: "R00024",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 25,
        label: "R00025",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 26,
        label: "R00026",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 27,
        label: "R00027",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 28,
        label: "R00028",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 29,
        label: "R00029",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 30,
        label: "R00030",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 31,
        label: "R00031",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 32,
        label: "R00032",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 33,
        label: "R00033",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 34,
        label: "R00034",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 35,
        label: "R00035",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 36,
        label: "R00036",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 37,
        label: "R00037",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 38,
        label: "R00038",
        invoice: Math.ceil(Math.random() * 30),
      },
      {
        id: 39,
        label: "R00039",
        invoice: Math.ceil(Math.random() * 30),
      },
    ]);
  }
};
