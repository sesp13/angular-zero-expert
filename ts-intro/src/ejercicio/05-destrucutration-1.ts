interface Player {
  volume: number,
  second: number,
  song: string,
  details: Details
}

interface Details {
  author: string,
  year: number
}

const player: Player = {
  volume: 90,
  second: 36,
  song: 'Careless whisper',
  details: {
    author: 'George Michael',
    year: 1980
  }
}

// Object destructuration
const { volume, second, song, details } = player
const { author } = details;

// Second way
// const { volume, second, song, details: { author } } = player

// console.log(`El volumen actual es de : ${volume}`);
// console.log(`El segundo actual es de : ${second}`);
// console.log(`La canción actual es de : ${song}`);
// console.log(`El autor actual es de : ${author}`);

// Array deestructuration
const dbz = ['Goku', 'Vegeta', 'Trunks'];
// Dumie example
// console.log(`Personaje 1: ${dbz[0]}`);
// console.log(`Personaje 2: ${dbz[1]}`);
// console.log(`Personaje 3: ${dbz[2]}`);

// With desestucturation
const [, , trunks] = dbz;
// console.log(`Personaje 1: ${goku}`);
// console.log(`Personaje 2: ${vegeta}`);
console.log(`Personaje 3: ${trunks}`);
