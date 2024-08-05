function* fetchData() {
  const response1 = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data1 = yield response1.json();
  console.log(data1);

  const response2 = yield fetch("https://jsonplaceholder.typicode.com/posts/2");
  const data2 = yield response2.json();
  console.log(data2);
}

function run(generator) {
  const gen = generator();

  function handle(yielded) {
    if (!yielded.done) {
      yielded.value
        .then((data) => handle(gen.next(data)))
        .catch((err) => gen.throw(err));
    }
  }

  handle(gen.next());
}

run(fetchData);
