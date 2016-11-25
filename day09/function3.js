var n = 0;
var get_sentence = function (text1, text2) {

  var num = Math.random();

  if ( num < 0.5 ) {
    return text1;
  } else {
    return text2;
  }
};

while ( n < 10) {

  console.log(get_sentence('lll', 'mmm'));
  n++;
}
