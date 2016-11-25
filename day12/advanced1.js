var answer_collector = function (array) {
  var results = [];
      for (var i = 0; i < array.length; i++) {
        var fn = array[i];
          results.push(fn());
  }
    console.log(results);
    return results;
};

var input = [
  function(){ return 'a';},
  function(){ return 'b';}
];

answer_collector(input);
