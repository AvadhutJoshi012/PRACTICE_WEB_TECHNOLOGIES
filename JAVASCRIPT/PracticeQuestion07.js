let price = [500, 745, 658, 254, 321];

// for (let p of price) {
//   console.log(p);
//   let offer = p / 10;
//   let value = price[i] - offer;
//   console.log(`The values after Offer is: ${value}`);
// }

for (let i = 0; i < price.length; i++) {
//   console.log(`The Value before offer is: ${price[i]}`);
  let offer = price[i] / 10;
  let val = price[i] - offer;
  console.log(`The Value after offer is: ${val}`);
}
