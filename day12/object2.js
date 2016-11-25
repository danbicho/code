var car = {
  type: "Honda Civic",
  position: 1,
  speed: 100,
  move: function() {
    var prev = this.position;
    this.position = this.position + this.speed;
    console.log(this.type + "is moving from " + prev + " to " + this.position);
  }
};

car.move();
