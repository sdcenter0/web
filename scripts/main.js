let price = 100;
let quantity = 11;
let vat = 20;
let total = price * quantity * (1 + vat / 100);
let isGreaterThan20 = quantity >= 20;

if (isGreaterThan20) {
  total = total * (1 - 10 / 100);
} else {
  if (quantity >= 10) {
    total = total * (1 - 5 / 100);
  } else {
    total = total * (1 - 2 / 100);
  }
}

console.log(total);
