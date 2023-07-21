const orders = [
  {
    data: "2005-05-15",
    subtotal: 90.22,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Old red shoe",
          price: 45.11,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders(){
    return orders;
}

module.exports = {
    getAllOrders
}