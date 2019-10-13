function* demo() {
  console.log("He" + (yield "123")); // OK
  console.log("Hello" + (yield)); // OK
  console.log("Hiiie" + (yield)); // OK
}
var f = demo();
console.log(f.next().value);
f.next();
console.log(f.next().value);
f.next();

var test = function*() {
  yield 1;
  yield 44;
  return 3;
};

for (var f of test()) {
  console.log(f);
}
