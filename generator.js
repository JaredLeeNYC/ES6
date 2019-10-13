var arr = [1, [[2, 3], 4], [5, 6]];
console.log(arr.length);

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

var flat = function*(a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== "number") {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (var f of flat(arr)) {
  console.log(f);
}
