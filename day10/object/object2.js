var car = {
  make :"Toyota"
};

car["model"] = "Camry";
car["model"];
console.log(car["model"]);

car.model;
console.log(car.model);

car.model = "Prius";
car["model"];
console.log(car["model"]);

car.model;
console.log(car.model);

var prop = 'year';

car[prop] = 1992;
console.log(car[prop]);

car.prop = 1992;
console.log(car.prop);

var dream_car = {};

dream_car.make = 2000;
dream_car.model = "Volvo";
dream_car.color = "red";
dream_car.year = 2010;
dream_car.registered =true;
console.log(dream_car);
