console.log('--------------- Object 4  ---------------');

for (var loopCat in my_cat) {
  console.log(my_cat[loopCat]);
}

for (var loopDreamCar in dream_car) {
  console.log(dream_car[loopDreamCar]);
  if( loopDreamCar === 'color') {
  $('.string').append(dream_car[loopDreamCar]);
  }
}

for (var loopMyDreamLife in my_dream_life) {
  console.log(my_dream_life[loopMyDreamLife]);
}
