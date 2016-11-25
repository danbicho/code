var book1 = {
  id: 'book1',
  name: 'Will You Be There?',
  category: 'Romance',
  picture_url: 'http://image.kyobobook.co.kr/images/book/large/732/l9780340933732.jpg',
  price: 16000,
  selling_points: ['Fiction', 'Cheap']
};
var book2 = {
  id: 'book2',
  name: 'Grit',
  category: 'Economy',
  picture_url: 'http://image.kyobobook.co.kr/images/book/large/165/l9781501144165.jpg',
  price: 20500,
  selling_points: ['Good comments', 'Original', 'Screenplay']
};
var album1 = {
  id: 'album1',
  name: 'Here',
  category: 'Pop',
  picture_url: 'http://image.kyobobook.co.kr/newimages/music/large/6094/2490602.jpg',
  price: 18500,
  selling_points: ['Orchestra', 'healing']
};
var album2 = {
  id: 'album2',
  name: '24K MAGIC',
  category: 'Pop',
  picture_url: 'http://image.kyobobook.co.kr/newimages/music/large/8984/2489836.jpg',
  price: 20500,
  selling_points: ['BRUNO MARS', 'Mini', 'ATLANTIC']
};


var add_to_page = function(product, selector) {

  $('#content').append($('<div id="' + selector + '">').html( $('<div class="name">').text(product.name)));
  $('#content').append($('<div id="' + selector + '">').html( $('<div class="category">').text(product.category)));
  $('#content').append($('<div id="' + selector + '">').html( $('<div class="picture">').html( $('<img>').attr('src', product.picture_url))));
  $('#content').append($('<div id="' + selector + '">').html( $('<div class="price">').text(product.price + '원')));
  $('#content').append($('<div id="' + selector + '">').html( $('<div class="array-of-keywords">').text(product.selling_points)));
};

add_to_page(book1, 'book1');
add_to_page(book2, 'book2');
add_to_page(album1, 'album1');
add_to_page(album2, 'album2');

$(navbar).click(function() {
  $('#content').empty();
});
