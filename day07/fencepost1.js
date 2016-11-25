var n = 17;
var string = '';
var counter = 1;

while ( counter <= n ) {
  if ( counter !== n ) {
    string = string + counter + ',';
    } else {
    string = string + counter;
  }
  counter++;
}

document.querySelector('#target').textContent = string;
