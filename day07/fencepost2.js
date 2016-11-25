var n = 17;
var string = '<p class="Pstring">';
var counter = 1;

while ( counter <= n ) {
  if ( counter !== n ) {
    string = string+ '<p>' +counter+ '</p>' +'<hr>';
    } else {
    string = string + counter;
  }
  counter++;
}

document.querySelector('#target').innerHTML = string;
