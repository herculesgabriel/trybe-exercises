const assert = require('assert');

const greetPeople = (people) => {
  const greeting = [];

  for (const person of people) {
    greeting.push(`Hello ${person}`);
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter);

assert.strictEqual(typeof greetPeople, 'function');

assert.deepStrictEqual(output, result);
