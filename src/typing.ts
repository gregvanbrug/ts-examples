// Common Types: boolean, number, string, null, undefined, any, void, [], {}, JS class
// Additional Types: biginit, symbol, unknown, never

const num: number = 1;

// console.log('num:', num);

function add(a: number, b: number): number {
  return a + b;
}

// console.log('add:', add(1, 2));

function join(a: string, b: string): string[] {
  return [a, b];
}

// console.log('join:', join('a', 'b'));
// console.log('join:', join(['a', 'b', 'c'], 'd'));

function addAtleastOne(a: number, b = 1): number {
  return a + b;
}

// console.log('addAtleastOne:', addAtleastOne(1));
// console.log('addAtleastOne:', addAtleastOne(1, 3));

// Union Types

type Value = number | string;

const v1: Value = 1;
// console.log('Value:', v1);

const v2: Value = 'foo';
// console.log('Value', v2);

// const v3: Value = true;
// console.log(v3);

// Type alias

type pet = 'dog' | 'cat';

const myDog: pet = 'dog';
// console.log('myDog:', myDog);

// const myLizard: pet = 'lizard';
// console.log('myLizard:', myLizard);

export { add, join };
