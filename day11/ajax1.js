$.ajax({
  method: 'GET',
  url: 'http://jsonplaceholder.typicode.com/posts/1',
  success: function(data) {
    console.log(data);
  }
});
