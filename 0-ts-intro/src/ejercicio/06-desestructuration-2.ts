export interface Product {
  desc: string,
  price: number
}

const phone: Product = {
  desc: 'Nokia A1',
  price: 25
}

const phone2: Product = {
  desc: 'IPAD 2',
  price: 19
}


// ISV: Impuesto sobre venta
export function calculateISV(products: Product[]): [number, number] {
  let total = 0;

  // Common
  // products.forEach(product => {
  //   total += product.price
  // });

  // Arg desestructuration
  products.forEach(({ price }) => {
    total += price
  });

  return [total, total * 0.15];
}

const articles = [phone, phone2];

// Arr desestructuration
const [total, isv] = calculateISV(articles);

// console.log(`total: ${total}`);
// console.log(`ISV: ${isv}`);