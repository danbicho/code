var picture_factory = function() {
  $('.button').on('click', function(){
    var value = $('.text').val();
    get_pictures(value);

    $.ajax({
      url: "https://api.imgur.com/3/gallery/search?q=" + encodeURI(value),
      headers: { "Authorization": "Client-ID e3776adbe9c5fb9" },
      success: function(response) {
        console.log(response);
      }
    });
  });

};
picture_factory();
