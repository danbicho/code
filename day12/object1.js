var person = {
  name: 'Danbi',
  location: 'Seoul',
  hobbies: ['working', 'watching'],
  cat: {
    name: "Boo",
    hobbies: ["running", "sleeping"]
  },
  party: function(){
    console.log('Party party!!');
  }
};

person.work = function () {
  console.log(this.cat);
  console.log(this.party());
};


person.workout = function () {
  console.log(this.hobbies[1]);
  console.log(this.cat.hobbies[0]);
};

this.float_through_life_on_autopilot = function () {
  console.log(person.party());
  console.log(person.work());
  console.log(person.workout());
};

float_through_life_on_autopilot();
