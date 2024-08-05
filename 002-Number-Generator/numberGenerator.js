function* numberGenerator() {
  let i = 200;
  while (true) {
    yield i++;
  }
}

const gen = numberGenerator();

console.log(gen.next().value); // Expected: 200
console.log(gen.next().value); // Expected: 201
console.log(gen.next().value); // Expected: 202
