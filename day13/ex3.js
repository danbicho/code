var img = [];

var get_pictures = function(searchTerm){
  $.ajax({
    url: "https://api.imgur.com/3/gallery/search?q=" + encodeURI(searchTerm),
    headers: { "Authorization": "Client-ID e3776adbe9c5fb9" },
    success: function(response) {
      console.log(response);

      var array = response.data;
      for(var i = 0; i < array.length; i++) {
        var imgObj = array[i];
        if(imgObj.type && imgObj.type.includes('image')) {
          var link = imgObj.link;
          var $img = $('<img>').attr('src',link);
          $('body').append($img);
        }
      }
    }
  });
};

$('.button').on('click', function(){
  var value = $('.text').val();
  get_pictures(value);
});
