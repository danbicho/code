var reverse_adder = function(car) {
  car.reverse = function() {
    this.position = this.position - this.speed;
  };
};

var car1 = {
  type: "Hyndai Civic",
  speed: 5,
  position: 10
};

var car2 = {
  type: "Toyota Corolla",
  speed: 3,
  position: 6
};

reverse_adder(car1);
reverse_adder(car2);

car1.reverse();
console.log(car1);
console.log(car2);
