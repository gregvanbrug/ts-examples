// Enums - a set of named constants

enum Colors {
  red,
  green,
  orange,
  blue
}

// console.log('Colors:', `My favorite color is ${Colors.orange}`);

enum ColorsByName {
  RED = 'red',
  ORANGE = 'orange',
  GREEN = 'green',
  BLUE = 'blue'
}

// console.log('ColorsByName:', `My favorite color is ${ColorsByName.ORANGE}`);

enum Codes {
  OK = 200,
  NOT_FOUND = 404
}

// console.log('Codes:', `${Codes.OK}: ${Codes[Codes.OK]}`);

export { Colors, ColorsByName, Codes };
