var dog = {
  name: 'Darong',
  location: 'Seoul',
  favorite_food: 'Sweet potato',
  hungry: true,
  party: function () {
    console.log(this.name + '이가 미친듯이 춤을 춥니다.');
  },
  eat: function () {
    this.hungry = 'false';
    console.log(this.hungry);
  },
  go_to_park: function () {
    this.hungry = 'true';
    this.location = 'Park';
    console.log(this.hungry);
    console.log(this.location);
  }
};

dog.go_to_park();
