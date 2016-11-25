var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are";

var scrambled_array = scrambled_poem.split(' ');
console.log(scrambled_array);

var unscrambled_array = [];

while ( scrambled_array.length !== 0 ) {

  var x = scrambled_array.shift();
  unscrambled_array.push(x);

  var y = scrambled_array.pop();
  unscrambled_array.push(y);

  console.log(unscrambled_array);
} if ( scrambled_array.length === 0) {
  unscrambled_array.join(' ');

  console.log(unscrambled_array);
}
