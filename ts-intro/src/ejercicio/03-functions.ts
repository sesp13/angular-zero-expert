function sumCommon(a: number, b: number): number {
  return a + b
}

// Arrow function
const sumArrow = (a: number, b: number): number => {
  return a + b
}

function multiplicar(numero: number, otroNumbero?: number, base: number = 2): number {
  return numero * base
}

let result = sumCommon(10, 30);
console.log(result);
result = sumArrow(50, 30);
console.log(result);
result = multiplicar(5, 10);
console.log(result);
result = multiplicar(5, 10, 35);
console.log(result);


interface CharacterLOR {
  name: string,
  lp: number,
  showHp: () => void,
}

function heal(character: CharacterLOR, healX: number): void {
  character.lp += healX;
  console.log(character);
}

const newCharacter: CharacterLOR = {
  name: 'Strider',
  lp: 50,
  showHp() {
    console.log(`Life points: ${this.lp}`)
  }
}

heal(newCharacter, 5);

newCharacter.showHp();