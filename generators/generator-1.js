let x = 1;
function* foo() {
  x++;
  yield;
  console.log(x);
}

const bar = () => {
  x++;
};

let it = foo();

it.next();
console.log(x);
bar();
it.next();
