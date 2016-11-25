var answer_logger = function (fn) {
  var answer = fn();
  $('#answer').text(answer);
};

answer_logger(function(){
  return "이 string이 div#answer안에 들어가 있어야 합니다";
});
