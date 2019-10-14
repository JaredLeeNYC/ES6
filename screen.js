var ages = [32, 33, 16, 40];

function adult(arr){
  let adultAges = [];
  arr.forEach((x) => {return x>18?adultAges.push(x):1;})
  return adultAges;
}

console.log(adult(ages));