var saying_generator = function () {
  var phrase = "Heeey, " + "it's the" + " Fonz.";
  return phrase;
};

var saying = saying_generator();

var broken_saying_generator = function () {
  var phrase = "Heeey, " + "it's the" + " Fonz.";
  phrase;
};

var broken_saying = broken_saying_generator();

console.log(broken_saying);



/*
var greeter = function () {
  return "Hello";
};

var greeting = greeter();

console.log(greeting + ", nice to meet you.");

console.log(greeter() +", nice to mett you");
*/
