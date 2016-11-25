var i = 0;

function appendStrings (array, selector) {
  while ( i < array.length ) {
    $(selector).append(array[i]);
    i++;
  }
}

appendStrings(recipe, '#recipe');
appendStrings(bucket_list, '#bucket_list');
