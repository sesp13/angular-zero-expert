import { Product, calculateISV } from "./06-desestructuration-2";

const cart: Product[] = [
  {
    desc: 'Phone 1',
    price: 10
  },
  {
    desc: 'Phone 2',
    price: 150
  }
];

const [total, isv] = calculateISV(cart)

console.log(`total: ${total}`);
console.log(`ISV: ${isv}`);