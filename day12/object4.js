var party_fn = function () {
  console.log(this.name + '이가 미친듯이 춤을 춥니다.');
};
var eat_fn = function () {
  this.hungry = 'false';
  console.log(this.hungry);
};

var go_to_park_fn = function () {
  this.hungry = 'true';
  this.location = 'Park';
  console.log(this.hungry);
  console.log(this.location);
};

var dog = {
  name: 'Darong',
  location: 'Seoul',
  favorite_food: 'Sweet potato',
  hungry: true,
  party: party_fn,
  eat: eat_fn,
  go_to_park: go_to_park_fn
};

dog.go_to_park();
