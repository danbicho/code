var n = 1;
var string = '';

while ( n <= 100 ){
  if ( n % 3 === 0 && n % 5 === 0) {
    string = string + 'FizzBuzz';
  } else if ( n % 3 === 0) {
    string = string + 'Fizz';
  } else if ( n % 5 === 0) {
    string = string + 'Buzz';
  } else {
    console.log(n);
  }
  n++;
}
