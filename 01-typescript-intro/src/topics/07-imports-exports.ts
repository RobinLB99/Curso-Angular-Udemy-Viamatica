import { Product, ivaCalculator } from "./06-functions-destructuring";

const shopingCard: Product[] = [
  {
    description: "Galaxy A12",
    price: 195.99,
  },
  {
    description: "iPad",
    price: 484.99,
  },
  {
    description: "MacBook Pro",
    price: 1299.99,
  },
];

//const iva = 0.15;
const [total, valueIva] = ivaCalculator({ products: shopingCard, iva: 0.15 });
console.log(`Total: ${total} IVA: ${valueIva}`); // [1995.97, 0.15]
