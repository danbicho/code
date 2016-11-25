var mouse_tracker = function(event) {
  console.log(event.pageX, event.pageY, !!event.which);
  $('img').css('top',event.pageY).css('left',event.pageX);

  if (!!event.which) {
    $('body').css('cursor', 'none');
  }
};

$('body').on('mousemove', mouse_tracker);
