function* generatorFunction() {
  yield 1;
  yield 20;
  yield 300;
}

const gen = generatorFunction();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next().value); // 20
console.log(gen.next()); // { value: 300, done: false }
console.log(gen.next()); // { value: undefined, done: true }
console.log(gen.next()); // { value: undefined, done: true }
