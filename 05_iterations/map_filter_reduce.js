const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile development course",
    price: 5999,
  },
  {
    itemName: "data science",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(priceToPay);
