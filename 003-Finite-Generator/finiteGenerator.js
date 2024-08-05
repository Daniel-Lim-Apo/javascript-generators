function* finiteGenerator(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

// number of interactions as a parameter
const gen = finiteGenerator(3);

console.log(gen.next().value); // Expected: 0
console.log(gen.next().value); // Expected: 1
console.log(gen.next().value); // Expected: 2
console.log(gen.next().value); // Expected: undefined
console.log(gen.next().value); // Expected: undefined
