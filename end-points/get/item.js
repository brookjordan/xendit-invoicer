const MOCK_ITEMS = [
  {
    id: 1,
    label: "T-shirt",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 2,
    label: "Shorts",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 3,
    label: "Jumper",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 4,
    label: "Jeans",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 5,
    label: "Trousers",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 6,
    label: "Skirt",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 7,
    label: "Tank top",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 8,
    label: "Shoes",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 9,
    label: "Sneakers",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 10,
    label: "Socks",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 11,
    label: "Boxers",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 12,
    label: "Trunks",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 13,
    label: "Bikini",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 14,
    label: "Leotard",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 15,
    label: "Tie",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 16,
    label: "Bow tie",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 17,
    label: "Shirt",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 18,
    label: "Jacket",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 19,
    label: "Slacks",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 20,
    label: "Dungarees",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 21,
    label: "Suspenders",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 22,
    label: "Lengerie",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 23,
    label: "Bra",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 24,
    label: "Panties",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 25,
    label: "Pants",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 26,
    label: "Mask",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 27,
    label: "Balaclava",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 28,
    label: "Hat",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 29,
    label: "Cap",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
  {
    id: 30,
    label: "Wig",
    price: +(Math.random() * 20).toFixed(2),
    account: Math.ceil(Math.random() * 5),
  },
];

module.exports = function returnInvoiceData(request, response, next) {
  if (!request.user) {
    response.status(200);
    response.send([]);
    return;
  }

  if (request.params && request.params.id) {
    response.status(200);
    response.send({
      ...MOCK_ITEMS.find(item => item.id === +request.params.id),
      account: request.user.id,
    });
  } else {
    response.status(200);
    response.send({
      items: MOCK_ITEMS,
    });
  }
};
