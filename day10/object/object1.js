var my_dream_life = {};
var property_key = 'job';
my_dream_life['job'] = 'cook';

var another_property_key = 'salary';
my_dream_life['salary'] = '100';

console.log(my_dream_life[property_key]);
console.log(my_dream_life['job']);

var next_property = 'car';
my_dream_life['car'] = 'volkswagen';

console.log(my_dream_life[next_property]);
console.log(my_dream_life['car']);
console.log(my_dream_life);

my_dream_life['job'] = 'programer';
my_dream_life['salary'] = '200';
my_dream_life['car'] = 'mini';

console.log(my_dream_life);
