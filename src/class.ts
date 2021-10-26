class Person {
  private static population = 0; // Static members aren't associated with a specific instance of a class
  readonly birthdate: Date;

  constructor(public name: string) {
    this.birthdate = new Date();
    Person.population++;
  }

  static getPopulation() {
    return Person.population;
  }
}

const me = new Person('greg');
// console.log('Person', me);

const val = new Person('val');
// console.log('Person', val);

const tom = new Person('tom');
// console.log('Person', tom);

// console.log(Person.population);
// console.log(Person.getPopulation());

export { Person };
