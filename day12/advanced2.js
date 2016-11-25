var secret_keeper = function (string1, string2) {
  var secret = '1234';
  $('.sentence').append(string1 + secret + string2);
};

secret_keeper('aaaaaa', 'bbbbb');
