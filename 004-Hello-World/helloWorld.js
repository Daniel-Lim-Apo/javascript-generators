function* simpleGenerator() {
  yield "Hello";
  yield "World";
  yield "My friend";
}

for (const value of simpleGenerator()) {
  console.log(value);
}
// Expected output:
// Hello
// World
// My Friend
