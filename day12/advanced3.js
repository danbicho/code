multiplies_by = function(number1) {
  return function(number2) {
    console.log(number1 * number2);
  };
};

var fn = multiplies_by(5);
fn(3);
