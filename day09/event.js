var string = '';

var myFunction = function() {
  string = string + "beep";
  console.log(string);
};

document.querySelector('#button').addEventListener('click', myFunction);
