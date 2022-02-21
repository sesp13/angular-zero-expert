// typescript code

let skills: (boolean | string | number)[] = ['Bash', 'Counter', 'Healing', 1];

skills.push(1);

interface Character {
    name: string,
    hp: number,
    skills: string[],
    // Nulleable propertie
    homeTown?: string,
}

const personaje: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing']
}

personaje.homeTown = 'Pueblo paleta';

console.table(personaje)