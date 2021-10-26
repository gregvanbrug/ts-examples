// Interfaces - defines the properties instances will have or describes the shape of the object

interface Person {
  firstName: string;
  lastName: string;
}

const gvb: Person = {
  firstName: 'Greg',
  lastName: 'van Brug'
};

// console.log('gvb:', gvb);

interface Employee extends Person {
  job: string;
}

const tom: Employee = {
  firstName: 'Tom',
  lastName: 'Boutell',
  job: 'CTO, for now. Ops, for now. Chief Software Architect, mostly.'
};

// console.log('Employee:', tom);

enum Pets {
  DOG = 'dog',
  CAT = 'cat',
  BIRD = 'bird',
  LIZARD = 'lizard'
}

interface Pet {
  name: string;
  type: Pets;
}

const me: Person = {
  firstName: 'Greg',
  lastName: 'van Brug'
};

const pets: Pet[] = [
  { name: 'Milo', type: Pets.DOG },
  { name: 'Moose', type: Pets.DOG },
  { name: 'Nolan', type: Pets.CAT },
  { name: 'Charlie', type: Pets.CAT },
  { name: 'Mr. PB', type: Pets.CAT },
  { name: 'Rusty', type: Pets.CAT },
  { name: 'Carter', type: Pets.CAT },
  { name: 'Pompeii', type: Pets.LIZARD }
];

function greetPets(person: Person, pets: Pet[]): void {
  const petNames = pets
    ? pets
        .map(({ name }) => name)
        .join(', ')
        .replace(/, ([^,]*)$/, ' and $1')
    : '';

  if (petNames.length) {
    console.log(
      'greetPets:',
      `${person.firstName} has ${pets.length} ${plural(
        'pet',
        pets
      )}! Hi ${petNames}!`
    );
  } else {
    console.log(
      'greetPets:',
      `${person.firstName} doesn't have any pets... :(`
    );
  }
}

// greetPets(me, pets);

// const val: Person = {
//   firstName: 'Val',
//   lastName: 'Jed'
// };

// greetPets(val);

function plural(string: string, items: any[]): string {
  return items.length !== 1 ? `${string}s` : string;
}
export { greetPets };
