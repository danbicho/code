var i = 0;

function appendStrings (array) {
  while ( i < array.length ) {
    $('.string').append(array[i]);
    i++;
  }
}

appendStrings(recipe);
appendStrings(bucket_list);
