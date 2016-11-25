var n = 10;
var product = 1;
var counter = 1;

while ( counter <= n ) {
  product = product * counter;
  counter++;
}

document.querySelector('#number').innerHTML = n;
document.querySelector('.result').innerHTML = product;
