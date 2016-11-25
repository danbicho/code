var n = 17;
var string = '';
var counter = 1;

while ( counter <= n ) {
  if ( counter % 2 === 0 ) {
      string = string+ '<p class="odd">' +counter+ '</p>' +'<hr>';
  } else if ( counter % 2 !== 0 ) {
      string = string+ '<p class="even">' +counter+ '</p>' +'<hr>';
    }
  counter++;
}

document.querySelector('#target').innerHTML = string;
