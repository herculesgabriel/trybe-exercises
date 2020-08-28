let resultado = '';

let a = 10;
let b = 15;
let c = 5;

if (a == b && b == c) {
  console.log('É preciso digitar valores diferentes!');
} else {
  if (a > b && a > c) {
    resultado = a;
  } else if (b > a && b > c) {
    resultado = b;
  } else {
    resultado = c;
  }

  console.log(resultado);
}
