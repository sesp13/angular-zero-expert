interface Direction {
  street: string;
  country: string;
  city: string;
}

interface SuperHero {
  name: string;
  age: number;
  direction: Direction,
  showDirection: () => string;
}

// Option 2 nested 
// interface SuperHero {
//   name: string;
//   age: number;
//   direction: {
//     street: string,
//     country: string,
//     city: string
//   },
//   showDirection: () => string;
// }

const superHero: SuperHero = {
  name: 'Spiderman',
  age: 30,
  direction: {
    street: 'Main St',
    country: 'USA',
    city: 'NY'
  },
  showDirection() {
    return `${this.name}, ${this.direction.city}, ${this.direction.country}`
  }
}

const direction = superHero.showDirection();

console.log(direction);