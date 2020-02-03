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
      label: "T-shirt",
      price: +(Math.random() * 20).toFixed(2)
    });
  } else {
    response.status(200);
    response.send([
      {
        id: 1,
        label: "T-shirt",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 2,
        label: "Shorts",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 3,
        label: "Jumper",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 4,
        label: "Jeans",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 5,
        label: "Trousers",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 6,
        label: "Skirt",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 7,
        label: "Tank top",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 8,
        label: "Shoes",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 9,
        label: "Sneakers",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 10,
        label: "Socks",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 11,
        label: "Boxers",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 12,
        label: "Trunks",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 13,
        label: "Bikini",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 14,
        label: "Leotard",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 15,
        label: "Tie",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 16,
        label: "Bow tie",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 17,
        label: "Shirt",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 18,
        label: "Jacket",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 19,
        label: "Slacks",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 20,
        label: "Dungarees",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 21,
        label: "Suspenders",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 22,
        label: "Lengerie",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 23,
        label: "Bra",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 24,
        label: "Panties",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 25,
        label: "Pants",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 26,
        label: "Mask",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 27,
        label: "Balaclava",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 28,
        label: "Hat",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 29,
        label: "Cap",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 30,
        label: "Wig",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 31,
        label: "",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 32,
        label: "",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 33,
        label: "",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 34,
        label: "",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 35,
        label: "",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 36,
        label: "",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 37,
        label: "",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 38,
        label: "",
        price: +(Math.random() * 20).toFixed(2)
      },
      {
        id: 39,
        label: "",
        price: +(Math.random() * 20).toFixed(2)
      },
    ]);
  }
};
