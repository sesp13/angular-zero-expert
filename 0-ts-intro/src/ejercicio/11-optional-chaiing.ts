interface Passanger {
  name: string;
  // Here ?  makes sons propertie optional
  sons?: string[],
}

const passanger1: Passanger = {
  name: 'Fernando',
}

const passanger2: Passanger = {
  name: "Melissa",
  sons: ["Natalia", "Gabriel"]
}

function printSons(passanger: Passanger): void{
  const howManySons = passanger.sons?.length || 0;
  console.log(howManySons)
}

printSons(passanger2);
printSons(passanger1);