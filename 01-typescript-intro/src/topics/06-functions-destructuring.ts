export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Galaxy A12",
  price: 195.99,
};

const tablet: Product = {
  description: "iPad",
  price: 499.99,
};

const laptop: Product = {
  description: "MacBook Pro",
  price: 1299.99,
};

interface ivaCalculationsOptions {
  iva: number;
  products: Product[];
}

// function ivaCalculator({ iva, products }: ivaCalculationsOptions): [number, number] {
export function ivaCalculator(
  options: ivaCalculationsOptions
): [number, number] {
  const { iva, products } = options; // destructuring de options
  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, iva];
}

// const shoppingCard: Product[] = [phone, tablet, laptop];
// const iva = 0.15;

// En EMACS6 cuando el nombre de la propiedad es igual al nombre de la variable se puede omitir la escritura de la variable. Ejem: ( iva: iva -> iva )
// const [total, valueIva] = ivaCalculator({ iva, products: shoppingCard });

// console.log(`Total: ${total} IVA: ${valueIva}`); // [1995.97, 0.15]
