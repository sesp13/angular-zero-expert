function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}

@sealed
class MySuperClass {
  public myPropertie: string = 'ABC123';

  print(){
    console.log("Hello World")
  }
}

const myClass = new MySuperClass()
console.log(myClass.myPropertie);