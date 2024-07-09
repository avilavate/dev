function* Mul(x, y, z) {
  let result = x * (y * (yield));

  return result;
}

let it = Mul(10, 10, 7);

it.next();
let ret = it.next(10);
console.log(ret.value);

