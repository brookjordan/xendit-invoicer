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
      label: "I00001",
    });
  } else {
    response.status(200);
    response.send([
      {
        id: 1,
        label: "I00001",
      },
      {
        id: 2,
        label: "I00002",
      },
      {
        id: 3,
        label: "I00003",
      },
      {
        id: 4,
        label: "I00004",
      },
      {
        id: 5,
        label: "I00005",
      },
      {
        id: 6,
        label: "I00006",
      },
      {
        id: 7,
        label: "I00007",
      },
      {
        id: 8,
        label: "I00008",
      },
      {
        id: 9,
        label: "I00009",
      },
      {
        id: 10,
        label: "I00010",
      },
      {
        id: 11,
        label: "I00011",
      },
      {
        id: 12,
        label: "I00012",
      },
      {
        id: 13,
        label: "I00013",
      },
      {
        id: 14,
        label: "I00014",
      },
      {
        id: 15,
        label: "I00015",
      },
      {
        id: 16,
        label: "I00016",
      },
      {
        id: 17,
        label: "I00017",
      },
      {
        id: 18,
        label: "I00018",
      },
      {
        id: 19,
        label: "I00019",
      },
      {
        id: 20,
        label: "I00020",
      },
      {
        id: 21,
        label: "I00021",
      },
      {
        id: 22,
        label: "I00022",
      },
      {
        id: 23,
        label: "I00023",
      },
      {
        id: 24,
        label: "I00024",
      },
      {
        id: 25,
        label: "I00025",
      },
      {
        id: 26,
        label: "I00026",
      },
      {
        id: 27,
        label: "I00027",
      },
      {
        id: 28,
        label: "I00028",
      },
      {
        id: 29,
        label: "I00029",
      },
      {
        id: 30,
        label: "I00030",
      },
      {
        id: 31,
        label: "I00031",
      },
      {
        id: 32,
        label: "I00032",
      },
      {
        id: 33,
        label: "I00033",
      },
      {
        id: 34,
        label: "I00034",
      },
      {
        id: 35,
        label: "I00035",
      },
      {
        id: 36,
        label: "I00036",
      },
      {
        id: 37,
        label: "I00037",
      },
      {
        id: 38,
        label: "I00038",
      },
      {
        id: 39,
        label: "I00039",
      },
    ]);
  }
};
