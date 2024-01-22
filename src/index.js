const orders = [
  {
    id: "OR123",
    title: "Order 1",
    date: "15.09.23"
  },
  {
    id: "OR456",
    title: "Order 2",
    date: "18.09.23"
  },
  {
    id: "OR789",
    title: "Order 3",
    date: "20.09.23"
  },
  {
    id: "OR234",
    title: "Order 4",
    date: "22.09.23"
  },
  {
    id: "OR567",
    title: "Order 5",
    date: "25.09.23"
  }
];

const orderItems = [
  {
    orderId: "OR123",
    itemTitle: "Apple GOLD",
    itemPrice: 5.99,
    amount: 3
  },
  {
    orderId: "OR123",
    itemTitle: "Potatoes",
    itemPrice: 2.49,
    amount: 2
  },
  {
    orderId: "OR123",
    itemTitle: "Mellon",
    itemPrice: 8.99,
    amount: 3
  },
  {
    orderId: "OR456",
    itemTitle: "USB Mouse",
    itemPrice: 29.99,
    amount: 1
  },
  {
    orderId: "OR456",
    itemTitle: "Apple lightning",
    itemPrice: 15.99,
    amount: 2
  },
  {
    orderId: "OR456",
    itemTitle: "Gamepad",
    itemPrice: 27.99,
    amount: 1
  },
  {
    orderId: "OR789",
    itemTitle: 'Book "Clean Code"',
    itemPrice: 9.99,
    amount: 4
  },
  {
    orderId: "OR789",
    itemTitle: "Toy Buz Lighter",
    itemPrice: 12.99,
    amount: 3
  },
  {
    orderId: "OR234",
    itemTitle: "Kitchen Appliances Set",
    itemPrice: 34.99,
    amount: 1
  },
  {
    orderId: "OR567",
    itemTitle: "Socks",
    itemPrice: 24.99,
    amount: 2
  },
  {
    orderId: "OR567",
    itemTitle: "Sports Equipment",
    itemPrice: 49.99,
    amount: 1
  },
  {
    orderId: "OR567",
    itemTitle: "Outdoor Gear",
    itemPrice: 19.99,
    amount: 3
  }
];

/**
 * Create a function that sorts orders by their total price.
 */
