var get_sentence = function () {
  var string1 = "aaa";
  var string2 = "bbb";

  var num = Math.random();

  if ( num < 0.5 ) {
    return string1;
  } else {
    return string2;
  }
};

console.log(get_sentence());
