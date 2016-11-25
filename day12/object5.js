var move_fn = function() {
  this.position = this.position + this.speed;
};

var car1 = {
  type: "Hyndai Civic",
  speed: 5,
  position: 1,
  move: move_fn
};

var car2 = {
  type: "Toyota Corolla",
  speed: 3,
  position: 6,
  move: move_fn
};

car1.move();
console.log(car1);
car2.move();
console.log(car2);
