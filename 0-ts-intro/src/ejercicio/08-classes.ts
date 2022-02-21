class CommonPerson {
  constructor(
    public name: string,
    public direction: string,
  ) { }
}
class Hero extends CommonPerson {

  constructor(
    public alterEgo: string,
    public age?: number,
    public realName?: string,
  ) {
    // Call to the constructor of my father
    super(realName, 'My Street');
  }

}

interface Character2 {
  alterEgo?: string;
  age?: number;
  realName?: number;
}

const ironman = new Hero('ironman', 45, "Tony");
const spiderman: Character2 = {};

console.log(ironman);