function double(k) {
  return k * 2;
}

function triple(k) {
  return k * 3;
}

function cb(x, n) {
  let y = n(x[0]) + n(x[1]) + n(x[2]);
  console.log(y);
  return y;
}

const a = [1, 2, 3];

cb(a, double);
cb(a, triple);
